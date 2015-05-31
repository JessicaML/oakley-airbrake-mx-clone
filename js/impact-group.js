var app = app || {};

(function () {
    'use strict';

    app.ImpactGroup = function (elementId) {
        app.BaseGroup.call(this, elementId);
        this.goggles = document.querySelectorAll('.goggles');
        this.bg = document.querySelector('#impact-bg');
        this.createStarts();
    };

    app.ImpactGroup.prototype = Object.create(app.BaseGroup.prototype);

    app.ImpactGroup.prototype.update = function () {
        if (this.isGroupOnScreen()) {
            // A little workaround for the chrome background-attachment/position relative bug
            this.el.style.visibility = 'visible';
            this.swapImage();
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

}());
