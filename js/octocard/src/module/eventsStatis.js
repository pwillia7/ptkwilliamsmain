/*jshint laxbreak:true */

/**
 * eventsStatis module.
 *
 * @param {Octocard} card .
 * @param {Function} callback .
 */
var eventsStatisModule = function (card, callback) {
    var data = card.data.eventsStatis;

    // if input user has no Organization,
    // don't show this module
    if (data.length === 0) {
        callback();
        return;
    }

    var d;

    // organize data
    var maxCounter = 0;
    var i = data.length - 1;
    var result = [];
    var date;
    var nextDate;
    // fill the empty date
    var fillDate = function (endDate) {
        // 24 * 3600 * 1000 = 86400000
        date = new Date(86400000 + date.getTime());
        while (date < endDate) {
            result.push({
                date: date,
                counter: 0
            });
            date = new Date(86400000 + date.getTime());
        }
    };
    for (; i >= 0; i--) {
        d = data[i];
        maxCounter = Math.max(maxCounter, d.counter);
        date = util.strToDate(d.date);
        result.push({
            date: date,
            counter: d.counter
        });

        if (i === 0) {
            break;
        }
        nextDate = util.strToDate(data[i - 1].date);
        fillDate(nextDate);
    }
    var today = util.tomorrow();
    fillDate(today);

    // generate event statistic map
    var html = '';
    i = result.length - 1;
    var barWidth = 100 / (i + 1);
    for (; i >= 0; i--) {
        d = result[i];
        html += util.format(eventsStatisModule.MOD_BAR_HTML, {
            date: d.date.toDateString(),
            counter: d.counter,
            /* safari has the sub-pixel issue*/
            width: barWidth,
            height: (d.counter / maxCounter) * 100,
            visibility: d.counter ? 'visible' : 'hidden'
        });
    }

    // rend all
    card.appendModHTML(
        'eventsStatis',
        util.format(eventsStatisModule.MOD_HTML, {
            map: html
        })
    );
    callback();
};

eventsStatisModule.MOD_HTML = ''
    + '<h2>Events</h2>'
    + '<div class="octocard-m-eventsstatis-bd">#{map}</div>'
    + '<div class="octocard-m-eventsstatis-date">'
    +     '<span class="octocard-m-eventsstatis-date-end">'
    +         'Now'
    +     '</span>'
    + '</div>';
eventsStatisModule.MOD_BAR_HTML = ''
    + '<div class="octocard-m-eventsstatis-bar" style="width:#{width}%;">'
    +     '<div style="height:#{height}%;visibility:#{visibility};">'
    +         '#{date} - #{counter}'
    +     '</div>'
    + '</div>';

modules.add('eventsStatis', eventsStatisModule);



