
var app = app || {};

(function () {
    'use strict';

    console.log('controller');
    console.log(app);

    app.Main = function (groups) {
        this.lastScrollY = 0;
        this.ticking = false;
        this.groups = groups;

        var i = 0;
        for (; i < this.groups.length; i++) {
            var group = this.groups[i];
            group.main = this;
        }
    };

    app.Main.prototype = {

        doScroll: function () {
            this.lastScrollY = window.scrollY;
            this.requestTick();
            
        },

        /**
         * This will limit the calculation of the background position to
         * 60fps as well as blocking it from running multiple times at once
         */
        requestTick: function () {
            var self = this;
            if (!this.ticking) {
                window.requestAnimationFrame(function () {
                    self.update();
                });
                this.ticking = true;
            }
        },

        update: function () {
            var i = 0;
            for (; i < this.groups.length; i++) {
                var group = this.groups[i];
                group.update();
            }
            this.ticking = false;
        },

        start: function () {
            var self = this;
            window.onscroll = function () {
                self.doScroll();
            };
        }
    };
    

}());