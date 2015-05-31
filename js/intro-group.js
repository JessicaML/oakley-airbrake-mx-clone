var app = app || {};

(function () {
    'use strict';

    app.IntroGroup = function (elementId) {
        app.BaseGroup.call(this, elementId);
        this.dirt1 = document.querySelector('#dirt1'),
        this.dirt2 = document.querySelector('#dirt2'),
        this.dirt3 = document.querySelector('#dirt3'),
        this.rock1 = document.querySelector('#rock1');
    };

    app.IntroGroup.prototype = Object.create(app.BaseGroup.prototype);

    app.IntroGroup.prototype.update = function () {

        if (this.isGroupOnScreen()) {
            // A little workaround for the chrome background-attachment/position relative bug
            this.el.style.visibility = 'visible';
            this.letItFly();
        } else {
            this.el.style.visibility = 'hidden';
        }
    };

    app.IntroGroup.prototype.letItFly = function () {
        var lastScrollY = this.main.lastScrollY;
        var y1 = lastScrollY / 1.5,
            y2 = lastScrollY / 2,
            y3 = lastScrollY / 3,
            y4 = -lastScrollY / 3,
            x4 = -lastScrollY / 2;

        this.translate(this.dirt1, 0, y1);
        this.translate(this.dirt2, 0, y2);
        this.translate(this.dirt3, 0, y3);

        // TODO scale()
        var r = lastScrollY / 4;  // lastScrollY % 360
        this.translateAndRotate(this.rock1, x4, y4, r);
    };

}());
