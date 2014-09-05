(function() {
// This file concat by grunt. 

var THEME_CSS = '/* resert css */#root-id {    position: relative;    padding: 1em;    min-height: 40px;    margin: 0 2px 2px 0;    display: block;    color: #fff;    font: 14px "Helvetica Neue", Arial, Helvetica, sans-serif;    text-align: left;    line-height: 1.5;    border: 1px solid #CCC;    background-color: #9eaeb3;    -webkit-box-sizing: border-box;    -moz-box-sizing: border-box;    box-sizing: border-box;}#root-id.octocard-min {    font-size: 12px;}#root-id span,#root-id img,#root-id ul,#root-id ol,#root-id h1,#root-id h2,#root-id li,#root-id p,#root-id div {    margin: 0;    padding: 0;    border: none;    float: none;    position: static;    overflow: hidden;    width: auto;    height: auto;    line-height: inherit;    color: inherit;    font-size: inherit;    font-weight: normal;    background: none;}#root-id h1,#root-id h2 {    color: #fff;    font-weight: bold;}#root-id li {    list-style: none;}#root-id p,#root-id div,#root-id img {    display: block;}#root-id a,#root-id span {    display: inline;    font-size: inherit;    text-decoration: none;}#root-id a {    color: #fff;    text-decoration: none;    -webkit-transition: color 0.5s ease;    transition: color 0.5s ease;}#root-id a:hover {       text-decoration: none;}#root-id .octocard-m {    position: relative;    width: 100%;    padding: 0 0 10px 0;    margin: 0 0 10px 0;    border-bottom: 4px solid #492625;}#root-id .octocard-m:last-child {    margin-bottom: 0;    padding-bottom: 0;    border-bottom: none;}#root-id .octocard-error {    display: inline-block;    vertical-align: middle;    color: #DA4453;}#root-id .octocard-error a {    margin-left: 10px;}/* loader css */#root-id .octocard-loading {    position: absolute;    top: 0;    left: 0;    height: 100%;    width: 100%;    background-color: rgba(255, 255, 255, 0.8);}#root-id .octocard-loading-inner {    position: absolute;    top: 50%;    left: 50%;    width: 80px;    height: 20px;    margin-left: -40px;    margin-top: -10px;    overflow: visible;}#root-id .octocard-loading-0,#root-id .octocard-loading-1,#root-id .octocard-loading-2 {    float: left;    width: 20px;    height: 100%;    margin-right: 10px;    background: #492625;}#root-id .octocard-loading-2 {    margin-right: 0;}#root-id .octocard-loading-cur {    background-color: #492625;    -webkit-transform: scale(1.2);    -ms-transform: scale(1.2);    transform: scale(1.2);}/* module/base css */#root-id .octocard-m-base {   margin: -1em -1em 10px -1em;   padding: 0.5em 1em;   background-color: #492625;   }#root-id .octocard-m-base a {    display: block;}#root-id .octocard-m-base a:hover {    text-decoration: none;}#root-id .octocard-m-base img {    float: left;    margin-right: 10px;    padding: 1px;    width: 44px;    height: 44px;    border: 1px solid #DDD;    -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);    -webkit-transition: border-color 0.5s ease;    transition: border-color 0.5s ease;}#root-id .octocard-m-base a:hover img {    border-color: #492625;}#root-id .octocard-m-base span,#root-id .octocard-m-base h1 {    overflow: hidden;    line-height: 28px;    font-size: 20px;    white-space: nowrap;    text-overflow: ellipsis;    -webkit-transition: color 0.5s ease;    transition: color 0.5s ease;}#root-id .octocard-m-base a:hover h1 {    }#root-id .octocard-m-base .octocard-m-base-noname {    line-height: 48px;    font-size: 24px;}#root-id .octocard-m-base span {    display: block;    font-size: 16px;    line-height: 20px;}/* min base */#root-id.octocard-min .octocard-m-base img {    width: 36px;    height: 36px;    padding: 0;    border: none;    -webkit-box-shadow: none;    box-shadow: none;}#root-id.octocard-min .octocard-m-base h1 {    font-size: 16px;    line-height: 20px;}#root-id.octocard-min .octocard-m-base .octocard-m-base-noname {    font-size: 16px;    line-height: 36px;}#root-id.octocard-min .octocard-m-base span {    font-size: 14px;    line-height: 16px;}/* module/details css */#root-id .octocard-m-details li {    white-space: nowrap;    text-overflow: ellipsis;}#root-id .octocard-m-details li:before {    content: "-";    float: left;    margin-right: 10px;    color: #AAB2BD;}#root-id .octocard-m-details a {    display: block;    overflow: hidden;    text-overflow: ellipsis;}/* min details */#root-id.octocard-min .octocard-m-details li:before {    display: none;}/* max details */#root-id.octocard-max .octocard-m-details li {    float: left;    margin-right: 2%;    width: 48%;}/* module/orgs css */#root-id .octocard-m-orgs h2 {    margin-bottom: 5px;}#root-id .octocard-m-orgs ul {    margin: 0;    padding: 0;    overflow: hidden;    list-style: none;}#root-id .octocard-m-orgs li {    list-style: none;    float: left;    margin-right: 4px;    margin-bottom: 4px;}#root-id .octocard-m-orgs li:last-child {    margin-right: 0;}#root-id .octocard-m-orgs a {    float: left;    text-decoration: none;    color: inherit;}#root-id .octocard-m-orgs img {    padding: 1px;    width: 32px;    height: 32px;    border: 1px solid #ddd;}#root-id .octocard-m-orgs a:hover img {    border-color: #492625;}/* min orgs */#root-id.octocard-min .octocard-m-orgs img {    padding: 0;    width: 24px;    height: 24px;    border: none;}/* module/repos css */#root-id .octocard-m-repos ul {    margin: 0;    padding: 0;    overflow: hidden;    list-style: none;}#root-id .octocard-m-repos li {    list-style: none;}#root-id .octocard-m-repos a {    position: relative;    display: block;    text-decoration: none;    color: inherit;}#root-id .octocard-m-repos a {    width: 100%;}#root-id .octocard-m-repos a h2,#root-id .octocard-m-repos a p {    font-size: 14px;    margin-right: 50px;    white-space: nowrap;    text-overflow: ellipsis;}#root-id .octocard-m-repos a:hover h2 {    color: #492625;    -webkit-transition: color 0.5s ease;    transition: color 0.5s ease;}#root-id .octocard-m-repos a span {    position: absolute;    top: 50%;    right: 0;    margin-top: -10.5px;    line-height: 1.5;    font-size: 14px;    color: #fff;}/* min repos */#root-id.octocard-min .octocard-m-repos a {    margin: 0.15em 0;   /* (1.5 - 1.2) / 2 = 0.15 */    line-height: 1.2;}#root-id.octocard-min .octocard-m-repos p {    display: none;}#root-id.octocard-min .octocard-m-repos h2 {    margin-right: 0.25em;    display: inline;    white-space: initial;    word-wrap: break-word;}#root-id.octocard-min .octocard-m-repos span {    display: inline;    position: static;    margin: 0;    font-size: 12px;}/* max repos */#root-id.octocard-max .octocard-m-repos h2 {    font-size: 16px;}#root-id.octocard-max .octocard-m-repos p {    white-space: initial;}/* module/stats css */#root-id .octocard-m-stats ul {    margin: 0;    padding: 0;    height: 42px;    overflow: hidden;    list-style: none;}#root-id .octocard-m-stats li,#root-id .octocard-m-stats a {    float: left;    width: 33.33%;    text-decoration: none;    list-style: none;    color: inherit;    text-align: center;}#root-id .octocard-m-stats a {    width: 100%;}#root-id .octocard-m-stats a strong,#root-id .octocard-m-stats a span {    display: block;    width: 100%;    line-height: 1.2;    text-align: center;}#root-id .octocard-m-stats a:hover strong,#root-id .octocard-m-stats a:hover span {    color: #492625;    -webkit-transition: color 0.5s ease;    transition: color 0.5s ease;}#root-id .octocard-m-stats a span {    margin-top: -5px;    font-size: 12px;    color: #fff;}#root-id .octocard-m-stats a strong {    font-size: 28px;    font-weight: bold;    color: #fff;}/* min stats */#root-id.octocard-min .octocard-m-stats ul {    height: 37px;}#root-id.octocard-min .octocard-m-stats a strong {    font-size: 24px;}#root-id.octocard-min .octocard-m-stats li {    width: 50%;}/* max stats */#root-id.octocard-max .octocard-m-stats li {    width: 25%;}/* module/eventsStatis css */#root-id .octocard-m-eventsstatis {    position: relative;}#root-id .octocard-m-eventsstatis h2 {    margin-bottom: 5px;}#root-id .octocard-m-eventsstatis-bd {    overflow: hidden;    width: 100%;    height: 30px;}#root-id .octocard-m-eventsstatis-bar {    position: relative;    float: right;    min-width: 3px;    height: 100%;}#root-id .octocard-m-eventsstatis-bar div {    position: absolute;    bottom: 0;    left: 0;    width: 100%;    text-indent: -9999px;    background-color: #492625;}#root-id .octocard-m-eventsstatis-date {    display: none;    overflow: hidden;    font-size: 12px;    color: #888;}#root-id .octocard-m-eventsstatis-date-end {    float: right;}/* min eventsstatis */#octocard.octocard-min .octocard-m-eventsstatis-bd {    height: 48px;}#octocard.octocard-min .octocard-m-eventsstatis-date {    display: none;}/* module/footer css */#root-id:hover .octocard-footer {    display: block;}#root-id .octocard-footer {    position: absolute;    bottom: -20px;    right: -1px;    display: none;    padding: 1px 4px;    z-index: 1;    height: 12px;    text-align: center;    font-size: 12px;    line-height: 12px;    background: #EFEFEF;    border: 1px solid #CCC;    color: #492625;}';
/*jshint laxbreak:true, eqnull:true */

var dateReg = /(\d{4})-(\d{2})-(\d{2})T/;
var util = {
    /**
     * Insert css text.
     *
     * @param {string} css css style text.
     * @return {Element} style element.
     */
    createStyle: function (css) {
        var style = document.createElement('style');
        style.type = 'text/css';

        if (style.styleSheet) {
            // IE
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        return style;
    },

    /**
     * format
     *      util.format('hello #{v}', 'world');
     *      util.format('hello #{a}, I like #{b}', {a: 'world', b: 'book'});
     *
     * @param {string} tmpl template text.
     * @param {string|Object} _key key or object.
     * @param {string} _value value.
     */
    format: function (tmpl, _key, _val) {
        if (!_key) {
            return tmpl;
        }
        var val;

        if (typeof _key !== 'object') {
            var key = _val ? _key : '#{v}';
            val = _val || _key;
            return tmpl.replace(new RegExp(key, 'g'), ('' + val));
        } else {
            var obj = _key;
            return tmpl.replace(_val || /#\{([^{}]+)\}/g, function(match, key) {
                val = obj[key];
                return (val == null) ? '' : ('' + val);
            });
        }
    },

    // cacheKey: 'githubcard-data',
    /**
     * Get JSONP call result cache.
     *
     * @param {string} url .
     * @return {Object} data.
    getJSONPCache: function (url) {
        var value = localStorage.getItem(util.cacheKey);
        if (value) {
            value = JSON.parse(value);
            value = value[url.replace(
                /([?&])callback=[^$&]+(&?)/,
                function (str, $1) {
                    return $1;
                }
            )];
        }

        // not found
        if (!value) {
            return null;
        }

        // out of time
        var now = new Date();
        if (value.last <= now) {
            localStorage.removeItem(util.cacheKey);
            return null;
        }

        return value.data;
    },
     */

    /**
     * Set JSONP cache.
     *
     * @param {string} url url string.
     * @param {Object} data .
     * @param {number} hour cache last `n` hour.
    setJSONPCache: function (url, data, hour) {
        var value = localStorage.getItem(util.cacheKey);
        if (value) {
            value = JSON.parse(value);
        } else {
            value = {};
        }

        url = url.replace(
            /([?&])callback=[^$&]+(&?)/,
            function (str, $1) {
                return $1;
            }
        );
        value[url] = {
            last: util.getTime((-1 * hour) / 24).toString(),
            data: data
        };

        localStorage.setItem(util.cacheKey, JSON.stringify(value));
    },
     */

    /**
     * jsonp
     *
     * @param {string} url .
     * @param {Function<Object>} success success callback.
     * @param {Function=} fail failed callback.
     */
    jsonp: function (url, success, fail) {
        /*
        // find cache
        var cache = util.getJSONPCache(url);
        if (cache) {
            success(cache);
            return;
        }
        */

        // no cache
        var script = document.createElement('script');
        var callbackName = 'githubcardjsonp' + (new Date().getTime());
        var timer;
        var timeout = 50000;
        var scriptLoaded = 0;
        var successed = false;

        // create script
        var re = url.match(/[?&]callback=([^$&]+)/);
        if (re) {
            // callback exist
            script.src = url.replace(/([?&]callback=)[^$&]+/, '$1' + callbackName);
        } else {
            // append url
            script.src = url
                + (url.indexOf('?') === -1 ? '?' : '&')
                + 'callback=' + callbackName;
        }
        script.type = 'text/javascript';
        script.charset = 'UTF-8';

        // jsonp callback
        window[callbackName] = function (data) {
            if (!data.success) {
                fail(data.message);
                successed = true;
                return;
            }
            successed = true;
            // util.setJSONPCache(url, data, 0.5);
            success(data.data);
            window[callbackName] = null;
        };

        // call fail function and clear script
        var callFail = function () {
            if (!successed && fail) {
                 fail('Server or network error.');
            }
            script.onload = script.onreadystatechange = null;
            document.body.removeChild(script);
        };

        // IE/opera support onreadystatechange
        // safari/chrome/opera support onload
        script.onload = script.onreadystatechange = function () {
            // for opera
            if (scriptLoaded) {
                return;
            }

            var readyState = script.readyState;
            if ('undefined' == typeof readyState ||
                readyState == 'loaded' ||
                readyState == 'complete') {

                scriptLoaded = 1;
                callFail();
                clearTimeout(timer);
            }
        };

        // timer
        timer = setTimeout(function () {
            callFail();
            // make it not report error
            // when callback fire too late
            window[callbackName] = function () {};
        }, timeout);

        document.body.appendChild(script);
    },

    /**
     * bind event
     *
     * @param {Element} element .
     * @param {string} event .
     * @param {Function} callback .
     */
    bind: function (element, event, callback) {
        if (element.addEventListener) {
            element.addEventListener(event, callback, false);
        } else {
            element.attachEvent('on' + event, callback);
        }
    },

    /**
     * reset time part of a date.
     *
     * @param {Date} date .
     * @return {Date} date.
     */
    resetTime: function (date) {
        date.setMilliseconds(0);
        date.setMinutes(0);
        date.setHours(0);
        date.setSeconds(0);
        return date;
    },

    /**
     * test same day.
     *
     * @param {Date} d1 date one.
     * @param {Date} d2 date two.
     * @return {boolean} is the same day.
    isSameDay: function (d1, d2) {
        return d1.toDateString() === d2.toDateString();
    },
     */

    /**
     * Get today, time is '00:00:00'
     *
     * @return {Date} today.
     */
    today: function () {
        return util.resetTime(new Date());
    },

    /**
     * next day, time is '00:00:00'
     *
     * @return {Date} next day.
     */
    nextDay: function (cur) {
        return new Date(cur.getTime() + 86400000);
    },

    /**
     * tomorrow, time is '00:00:00'
     *
     * @return {Date} tomorrow.
     */
    tomorrow: function () {
        return util.nextDay(util.today());
    },

    /**
     * time string to date
     *
     * @param {string} str time string.
     * @return {Date} date .
     */
    strToDate: function (str) {
        var r = str.match(dateReg);
        return new Date(r[1], r[2] - 1, r[3], 0, 0, 0, 0);
    },

    /**
     * Get document page height
     *
     * @param {Document} doc document.
     * @return {number} height
     */
    getPageHeight: function (doc) {
        var scrollProp = 'scrollHeight';
        var offsetProp = 'offsetHeight';
        var element = doc.documentElement;
        var body = doc.body;
        return Math.max(
            body[scrollProp],
            body[offsetProp],
            element[scrollProp],
            element[offsetProp]
        );
    },

    /**
     * get ShadowRoot, if not existed then create it.
     *
     * @param {Element} div .
     * @return {Element} shadow root.
     */
    getShadowRoot: function (div) {
        var prefixs = ['', 'webkit', 'moz', 'ms'];
        var root;
        for (var i = 0, l = prefixs.length; i < l; i++) {
            root = this._getShadowRoot(div, prefixs[i]);
            if (root) {
                return root;
            }
        }
    },
    _getShadowRoot: function (div, prefix) {
        var methodName = 'createShadowRoot';
        var rootName = 'shadowRoot';

        if (prefix) {
            methodName = prefix + util.capitalize(methodName);
            rootName = prefix + util.capitalize(rootName);
        }

        if (typeof div[methodName] === 'function') {
            var root = div[rootName];
            if (root) {
                root.innerHTML = '';
                return root;
            }
            root = div[methodName]();
            root.resetStyleInheritance = true;
            return root;
        }
    },

    /**
     * capitalize first letter.
     *
     * @param {string} str input.
     * @return {string} result.
     */
    capitalize: function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },

    /**
     * Get size class by width.
     *
     * @param {Element} hos host element.
     * @param {Element} root root element maybe shadow dom.
     */
    addSizeClass: function (host, root) {
        var width = host.offsetWidth;
        var rules = [0, 240, 480];
        var classMap = {
            '480': 'octocard-max',
            '240': 'octocard-mid',
            '0': 'octocard-min'
        };

        var nextRule;
        var rule;
        for (var i = 0; i < rules.length; i++) {
            rule = rules[i];
            nextRule = rules[i + 1];
            if (width >= rule && ((width < nextRule) || !nextRule)) {
                break;
            }
        }

        if (root.getAttribute('data-rule') == rule) {
            return;
        }

        root.className =
            root.className.replace(/(^| )octocard\-m[^ $]+/, '')
            + ' ' + classMap[rule];
        root.setAttribute('data-rule', rule);
    }
};

/*jshint laxbreak:true */

var LOADER_HTML = ''
    + '<div class="octocard-loading-inner">'
    +     '<div class="octocard-loading-0"></div>'
    +     '<div class="octocard-loading-1"></div>'
    +     '<div class="octocard-loading-2"></div>'
    + '</div>';

/**
 * Loader
 *
 * @constructor
 * @param {Element} element .
 * @param {number} zIndex .
 */
var Loader = function (element, zIndex) {
    this.element = element;

    // create and append loader root
    var loaderRoot = document.createElement('div');
    loaderRoot.style.zIndex = zIndex || 9;
    loaderRoot.className = 'octocard-loading';
    this.element.appendChild(loaderRoot);
    this.root = loaderRoot;

    // init html and css
    loaderRoot.innerHTML = LOADER_HTML;

    this.highlightNum = 2;
    this.start();
};

/**
 * start loading animation.
 */
Loader.prototype.start = function () {
    var nodes = this.root.firstChild.childNodes;
    var that = this;

    this.timer = setInterval(function() {
        var highlightNum = that.highlightNum;
        nodes[highlightNum].className = '' +
            'octocard-loading-' + highlightNum;
        that.highlightNum = highlightNum = (highlightNum + 1) % 3;
        nodes[highlightNum].className = '' +
            'octocard-loading-' + highlightNum +
            ' octocard-loading-cur';
    }, 500);
};

/**
 * stop loading animation.
 */
Loader.prototype.stop = function () {
    clearInterval(this.timer);
};

/**
 * end loading animation.
 */
Loader.prototype.end = function () {
    this.stop();
    if (this.root) {
        this.element.removeChild(this.root);
        delete this.root;
    }
};

var loader = function (element, zIndex) {
    return new Loader(element, zIndex);
};

/*jshint laxbreak:true */

var modules = {
    mods: {},
    /**
     * Get module.
     *
     * @param {string} name module name.
     */
    get: function(name) {
        return this.mods[name];
    },
    /**
     * Add module.
     *
     * @param {string} name .
     * @param {Function} module .
     */
    add: function(name, module) {
        this.mods[name] = module;
    }
};

/*jshint laxbreak:true */

/**
 * Base module.
 *
 * @param {Octocard} card .
 * @param {Function} callback .
 */
var baseModule = function (card, callback) {
    var base = card.data.base;
    if (!base.name || base.name === base.login) {
        // If no name was set or name is login name
        // then only show login name.
        base.name = base.name || base.login;
        base._nameClass = 'octocard-m-base-noname';
    } else {
        base._login = base.login;
    }
    var html = util.format(baseModule.MOD_HTML, card.data.base);
    card.appendModHTML('base', html);
    callback();
};

baseModule.MOD_HTML = ''
    + '<a href="#{html_url}" target="_blank">'
    +     '<img src="#{avatar_url}" width="44" height="44"/>'
    +     '<h1 class="#{_nameClass}">#{name}</h1>'
    +     '<span>#{_login}</span>'
    + '</a>';

modules.add('base', baseModule);

/*jshint laxbreak:true */

/**
 * Details module.
 *
 * @param {Octocard} card .
 * @param {Function} callback .
 */
var detailsModule = function (card, callback) {
    var data = card.data.base;
    if (data.email || data.blog || data.bio || data.location || data.company) {
        var html = ''
            + '<ul>'
            + (data.email ? ('<li>' + data.email + '</li>') : '')
            + (data.blog
                ? ('<li><a href="' + data.blog + '" target="_blank">' + data.blog + '</a></li>')
                : '')
            + (data.bio ? ('<li>' + data.bio + '</li>') : '')
            + (data.location ? ('<li>' + data.location + '</li>') : '')
            + (data.company ? ('<li>' + data.company + '</li>') : '')
            + '</ul>';
        card.appendModHTML('details', html);
    }
    callback();
};

modules.add('details', detailsModule);


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




/*jshint laxbreak:true */

/**
 * private footer module.
 *
 * @param {Octocard} card .
 * @param {Function} callback .
 */
var footerModule = function (card, callback) {
    var noFooter = card.config.noFooter;
    if (noFooter && noFooter !== 'false') {
        callback();
        return;
    }

    var link = document.createElement('a');
    link.href = 'http://octocard.info/';
    link.target = '_blank';
    link.className = 'octocard-footer';
    link.innerHTML = 'Octocard.info';
    card.element.appendChild(link);
    callback();
};

modules.add('footer', footerModule);


/*jshint laxbreak:true */

/**
 * Orgs module.
 *
 * @param {Octocard} card .
 * @param {Function} callback .
 */
var orgsModule = function (card, callback) {
    var data = card.data.orgs;

    // if input user has no Organization,
    // don't show this module
    if (data.length === 0) {
        callback();
        return;
    }

    var orgsNum = parseInt(card.config.orgsNum, 10) || -1;
    if (orgsNum >= 0) {
        data = data.slice(0, orgsNum);
    }

    var liHtml = '';
    for (var i = 0, l = data.length; i < l; i++) {
        liHtml += util.format(orgsModule.MOD_LI_HTML, data[i]);
    }
    card.appendModHTML(
        'orgs',
        util.format(orgsModule.MOD_HTML, liHtml)
    );
    callback();
};

orgsModule.MOD_HTML = ''
    + '<h2>Organizations</h2>'
    + '<ul>'
    +     '#{v}'
    + '</ul>';
orgsModule.MOD_LI_HTML = ''
    + '<li>'
    +     '<a href="https://github.com/#{login}" target="_blank" title="#{login}">'
    +         '<img src="#{avatar_url}" alt="#{login}" height="32" width="32" />'
    +     '</a>'
    + '</li>';

modules.add('orgs', orgsModule);



/*jshint laxbreak:true */

/**
 * Repos module.
 *
 * @param {Octocard} card .
 * @param {Function} callback .
 */
var reposModule = function (card, callback) {
    var i;
    var l;
    data = card.data.repos;

    // if no repos, don't show this module
    if (data.length === 0) {
        callback();
        return;
    }

    // sort data by stars
    data.sort(function (a, b) {
        return b.watchers_count - a.watchers_count;
    });

    // calc ignore rule
    var reposIgnored = card.config.reposIgnored;
    var isIgnored = {};
    if (reposIgnored) {
        reposIgnored = reposIgnored.split(',');
        for (i = 0, l = reposIgnored.length; i < l; i++) {
            isIgnored[reposIgnored[i]] = 1;
        }
    }

    // max reposNum
    var reposNum = parseInt(card.config.reposNum, 10) || 3;
    var usedRepoNum;
    var html = '<ul>';
    for (i = 0, usedRepoNum = 0, l = data.length; i < l; i++) {
        if (usedRepoNum === reposNum) {
            break;
        }
        if (isIgnored[data[i].name]) {
            // ignore this repo
            continue;
        }

        // rend html
        usedRepoNum++;
        html += util.format(reposModule.MOD_LI_HTML, data[i]);
    }
    html += '</ul>';
    card.appendModHTML('repos', html);
    callback();
};

reposModule.MOD_LI_HTML = ''
    + '<li>'
    +     '<a href="#{html_url}" target="_blank">'
    +         '<h2>#{name}</h2>'
    +         '<p>#{description}</p>'
    +         '<span>#{watchers_count}&#10029;</span>'
    +     '</a>'
    + '</li>';

modules.add('repos', reposModule);


/*jshint laxbreak:true */

/**
 * Stats module.
 *
 * @param {Octocard} card .
 * @param {Function} callback .
 */
var statsModule = function (card, callback) {
    var html = util.format(statsModule.MOD_HTML, card.data.base);
    card.appendModHTML('stats', html);
    callback();
};

statsModule.MOD_HTML = ''
    + '<ul>'
    +     '<li>'
    +         '<a target="_blank" href="#{html_url}/followers">'
    +             '<strong>#{followers}</strong>'
    +             '<span>followers</span>'
    +         '</a>'
    +     '</li>'
    +     '<li>'
    +         '<a target="_blank" href="#{html_url}/following">'
    +             '<strong>#{following}</strong>'
    +             '<span>following</span>'
    +         '</a>'
    +     '</li>'
    +     '<li>'
    +         '<a target="_blank" href="#{html_url}?tab=repositories">'
    +             '<strong>#{public_repos}</strong>'
    +             '<span>repos</span>'
    +         '</a>'
    +     '</li>'
    +     '<li>'
    +         '<a target="_blank" href="https://gist.github.com/#{login}">'
    +             '<strong>#{public_gists}</strong>'
    +             '<span>gists</span>'
    +         '</a>'
    +     '</li>'
    + '</ul>';

modules.add('stats', statsModule);

/*jshint laxbreak:true, scripturl:true */

/**
 * Github card
 *
 * @constructor
 * @param {Object=} config
 */
var Octocard = function (config) {
    this.reload(config);
};

/**
 * Reload card.
 *
 * @param {Object=} config
 *          OCTOCARD = {
 *              // [required][string]
 *              // username
 *              name: 'zmmbreeze',
 *              // [optional][string|Element]
 *              // element or elementId, 'octocard' as default
 *              element: 'octocard',
 *              // [optional][string]
 *              // module names, default is
 *              // 'base,details,stats,repos,eventsStatis,orgs'
 *              modules: 'base',
 *              // [optional][number]number of organizations to show
 *              // 'Infinity' as default, show all organizations
 *              orgsNum: -1,
 *              // [optional][number]number of repos to show
 *              // '3' as default
 *              reposNum: 3,
 *              // [optional][number]repos which will not be shown
 *              // '' as default
 *              reposIgnored: 'reponame1,reponame2',
 *              // [optional][string]url of jsonp api
 *              // 'http://octocard.info/api' as default
 *              api: 'http://your-octocard.com/api',
 *              // [optional][boolean]show footer or not
 *              // 'false' as default
 *              noFooter: false,
 *              // [optional][boolean]
 *              // Use `shadowDom/iframe` to create isolate container or not
 *              // 'false' as default
 *              data-noIsolated="true"
 *          }
 */
Octocard.prototype.reload = function (config) {
    if (this.host) {
        // loaded before
        this.host.innerHTML = '';
    }

    config = config || {};
    this.config = config;

    config.api = config.api || 'http://octocard.info/api';

    // setup element & elementId
    this.element = config.element || 'octocard';
    if (typeof this.element === 'string') {
        this.elementId = this.element;
        this.element = document.getElementById(this.element);
        if (!this.element) {
            this.element = document.createElement('div');
            this.element.id = this.elementId;
            lastScript.parentNode.insertBefore(this.element, lastScript);
        }
    } else {
        if (this.element.id) {
            this.elementId = this.element.id;
        } else {
            this.elementId = 'octocard' + new Date().getTime();
            this.element.id = this.elementId;
        }
    }

    this.host = this.element;
    // create isolated container if needed
    if (!config.noIsolated || config.noIsolated === 'false') {
        this._createContainer();
    }

    this._bindSizeClass();

    // setup style
    if (typeof THEME_CSS === 'undefined') {
        throw new Error('Theme css not found!');
    }
    var style = this.createStyle(THEME_CSS);
    this.element.appendChild(style);

    // setup username & type
    this.username = config.name;
    // this.type = config.type || 'user';

    // setup modules
    var moduleNames = config.modules ||
        'base,details,stats,repos,eventsStatis,orgs';
    moduleNames = moduleNames.split(',');
    moduleNames.unshift('footer');
    this.setupModules(moduleNames);
};

/**
 * Show load error message.
 *
 * @param {Array.<string>} moduleNames module names.
 */
Octocard.prototype._showErrorMsg = function (msg, moduleNames) {
    var errorRoot = document.createElement('div');
    errorRoot.className = 'octocard-error';
    errorRoot.innerHTML = msg;
    var reloadLink = document.createElement('a');
    reloadLink.href = 'javascript:void(0)';
    reloadLink.innerHTML = 'Refresh';
    var that = this;
    util.bind(reloadLink, 'click', function () {
        that.element.removeChild(errorRoot);
        that._updateContainer();
        that.setupModules(moduleNames);
    });
    errorRoot.appendChild(reloadLink);
    this.element.appendChild(errorRoot);
    this._updateContainer();
};

/**
 * load module.
 *
 * @param {string} name module name.
 * @param {Function} callback .
 */
Octocard.prototype.loadModule = function (name, callback) {
    var m = modules.get(name);
    if (m) {
        m(this, callback);
    }
};

/**
 * append module html.
 *
 * @param {string} name module name.
 * @param {string} html html string.
 */
Octocard.prototype.appendModHTML = function (name, html) {
    var modRoot = document.createElement('div');
    // make sure className is lowercase, because of safari's bug
    // http://jsbin.com/yafog/3/edit
    modRoot.className = 'octocard-m octocard-m-' + name.toLowerCase();
    modRoot.innerHTML = html;
    this.element.appendChild(modRoot);

    return modRoot;
};

/**
 * create CSS style, and replace '#{id}' to elementId.
 *
 * @param {string} css css text.
 * @return {Element} style element.
 */
Octocard.prototype.createStyle = function (css) {
    return util.createStyle(
        util.format(css, '#root-id', '#' + this.elementId)
    );
};

/**
 * setup modules.
 *
 * @param {Array.<string>} moduleNames .
 * @param {Function} callback .
 */
Octocard.prototype.setupModules = function (moduleNames, callback) {
    var that = this;

    if (that.config.data) {
        load(that.config.data);
        return;
    }

    // loading
    var l = loader(this.element);
    that._updateContainer();

    // load basic info and modules
    util.jsonp(
        this.config.api
            + '?mods=' + moduleNames.join(',')
            + '&login=' + this.username,
        load,
        // error
        function (msg) {
            if (l) {
                l.end();
            }
            that._showErrorMsg(msg, moduleNames);
        }
    );

    // success
    function load(data) {
        that.data = data;

        // start loading modules in turn
        var i = 0;
        var length = moduleNames.length;
        function startLoadModule() {
            that.loadModule(moduleNames[i], function () {
                i++;
                if (i < length) {
                    startLoadModule();
                } else {
                    if (l) {
                        l.end();
                    }
                    that._updateContainer();
                    if (callback) {
                        callback();
                    }
                }
            });
        }
        startLoadModule();
    }
};


/**
 * create isolated container
 */
Octocard.prototype._createContainer = function () {
    var trueRoot = document.createElement('div');
    // if using shadow dom, same id will cause bug on opera 18.0
    this.elementId += new Date().getTime();
    trueRoot.id = this.elementId;

    var shadowRoot = util.getShadowRoot(this.element);
    if (shadowRoot) {
        // support shadow root
        shadowRoot.appendChild(trueRoot);
    } else {
        var iframe = document.createElement('iframe');
        iframe.style.cssText = 'width:100%;height:0;'
            + 'position:relative;top:0;left:0;right:0;bottom:0;'
            + 'display:block;padding:0;margin:0;border:none;';
        iframe.frameBorder = '0';
        this.element.appendChild(iframe);
        var doc = iframe.contentDocument || iframe.contentWindow.document;
        doc.open();
        doc.write('');
        doc.close();

        doc.body.style.cssText = 'overflow:hidden;margin:0;padding:0;';
        doc.body.appendChild(trueRoot);
        this.doc = doc;
        this.iframe = iframe;
    }

    this.isIsolated = true;
    this.element = trueRoot;
};

/**
 * update container height and width
 */
Octocard.prototype._updateContainer = function () {
    if (this.iframe) {
        var ua = navigator.userAgent;
        if((ua.match(/iPhone/i)) || (ua.match(/iPad/i))) {
            // Fixed iphone iframe bug
            // update container width
            var containerWidth = this.iframe.parentNode.offsetWidth;
            this.doc.body.style.width = containerWidth + 'px';
        }
        // update iframe height
        var h = util.getPageHeight(this.doc);
        this.iframe.style.height = h + 'px';
    }
};

/**
 * Bind size class.
 */
Octocard.prototype._bindSizeClass = function () {
    var me = this;
    util.addSizeClass(me.host, me.element);

    if (me._binded) {
        return;
    }
    me._binded = true;

    var timeout;
    util.bind(window, 'resize', function resize() {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(function () {
            util.addSizeClass(me.host, me.element);
        }, 250);
    });
};

/**
 * create octocard instance
 *
 * @param {Object} config .
 */
window.octocard = function (config) {
    return new Octocard(config);
};

// autorun Octocard
var autorunConfig;
if (typeof OCTOCARD === 'object') {
    // use `OCTOCARD`
    autorunConfig = OCTOCARD;
} else {
    // get config from script tag
    // eg:
    //   <script
    //     data-name="zmmbreeze"
    //     data-modules="base,stats,repos,orgs,eventsStatis"
    //     data-reposNum="3"
    //     data-reposIgnored="reponame1,reponame2"
    //     data-orgsNum="2"
    //     data-element="OCTOCARD"
    //     data-api="http://127.0.0.1:8080/api"
    //     data-noIsolated="true"
    //     data-noFooter="false"
    //     src="src/octocard.js"></script>
    var scripts = document.getElementsByTagName('script');
    var lastScript = scripts[scripts.length - 1];
    if (!lastScript) {
        return;
    }
    autorunConfig = {
        name: '',
        modules: '',
        reposNum: '',
        reposIgnored: '',
        orgsNum: '',
        element: '',
        api: '',
        noIsolated: false,
        noFooter: false
    };
    for (var key in autorunConfig) {
        autorunConfig[key] = lastScript.getAttribute('data-' + key);
    }
}

if (autorunConfig.name) {
    // `name` is required as config
    new Octocard(autorunConfig);
}







})();