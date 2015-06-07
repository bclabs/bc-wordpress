var appConfig = {
    domain: "//wp.dev",
    dir: "/wp-content/themes/wpdev",
    version: "1.1"
};

var App = (function() {
    'use strict';

    var self = {
        el: {
            body: $('body')
        },
        modules: []
    };

    init();
    function init() {
        // Feature detection
        self.isTouch = 'ontouchstart' in window;
        self.hasHistory = 'history' in window;
        self.iPhone = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i))) ? true : false;

        // Load FastClick
        if (self.isTouch) {
            window.addEventListener('load', function () {
                FastClick.attach(document.body);
            }, false); 
        }

        // Load History API Script
        if ( self.hasHistory ) {
            asyncScript(appConfig.dir + "/assets/modules/App.History.js?ver=" + appConfig.version);
        }

        bindEvents();
    }

    function bindEvents() {
        
    }

    return self;
})();