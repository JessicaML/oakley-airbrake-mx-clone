var app = app || {};

(function () {
    'use strict';

    app.ImpactGroup = function (elementId) {
        app.BaseGroup.call(this, elementId);
        this.goggles = document.querySelectorAll('.goggles');
        this.rock = this.el.querySelector('.group3__impact-rock');
        this.impactData = this.el.querySelector('.group3__impact-data');

        this.bg = document.querySelector('#impact-bg');
        this.createStarts();
    };

    app.ImpactGroup.prototype = Object.create(app.BaseGroup.prototype);

    app.ImpactGroup.prototype.update = function () {
        if (this.isGroupOnScreen()) {
            // A little workaround for the chrome background-attachment/position relative bug
            this.el.style.visibility = 'visible';
            this.swapImage();
            this.pushRock();
        } else {
            this.el.style.visibility = 'hidden';
        }
    };

    app.ImpactGroup.prototype.createStarts = function () {
        var start = 0;

        for (var i = 0; i < this.goggles.length; i++) {
            var goggle = this.goggles[i];
            goggle.dataset.top = start;
            start = parseInt(goggle.dataset.bottom, 10) + 1;
        }
    };

    app.ImpactGroup.prototype.swapImage = function () {
        for(var i = 0; i < this.goggles.length; i++) {
            var goggle = this.goggles[i],
                vp = this.getViewport(),
                needle = (vp.top - window.innerHeight);
            
            if(needle >= goggle.dataset.top && needle <= goggle.dataset.bottom) {
                goggle.style.display = 'block';
            } else {
                goggle.style.display = 'none';
            }      
        }
    };

    /**
     * Complete mess, fix it!
     */
    app.ImpactGroup.prototype.pushRock = function () {
        var vp = this.getViewport(),
            needle = (vp.top - window.innerHeight);
        //console.log(needle);
        if (needle > 600 && needle < 800) {
            var left = (needle - 600) / 2;
            var opacity = (needle - 600) / 100;
            this.translate(this.rock, left, 0);
            this.rock.style.opacity = opacity;
        }

        if(needle > 700 && needle < 800) {
            var opacity = (needle - 700) / 100;
            console.log('op', opacity);
            this.impactData.style.opacity = opacity;
        }

        if(needle >= 900) {
            this.impactData.style.opacity = 0;
            this.rock.style.opacity = 0;
        }
    };

}());
