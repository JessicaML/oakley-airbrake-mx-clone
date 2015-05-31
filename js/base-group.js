var app = app || {};

(function () {
    'use strict';

    app.BaseGroup = function (elementId) {
        this.el = document.querySelector('#' + elementId);
        // TODO these will change if screen changes so get them at runtime
        this.top = this.el.getBoundingClientRect().top + window.scrollY;
        this.bottom = this.top + this.el.getBoundingClientRect().height;
    };

    app.BaseGroup.prototype = {
        /**
         * abstract placeholder method
         * TODO mock up an interface instead
         */
        update: function () {console.log('abstract update');},

        translate: function (el, x, y) {
            el.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0px)';
        },

        translateAndRotate: function (el, x, y , r) {
            el.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0px) rotate(' + r + 'deg)';
        },

        isGroupOnScreen: function () {
            var vp = this.getViewport();
            
            // if((this.top >= vp.top && this.top <= vp.bottom) || (this.bottom >= vp.top && this.bottom <= vp.bottom)) {
            //     return true;
            // }

            if((vp.top >= this.top && vp.top <= this.bottom) || (vp.bottom >= this.top && vp.bottom <= this.bottom)) {
                return true;
            }

            return false;
        },

        getViewport: function () {
            return {
                top: window.scrollY,
                bottom: window.scrollY + window.innerHeight
            };
        }
    };

}());
