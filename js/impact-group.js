var app = app || {};

(function () {
    'use strict';

    app.ImpactGroup = function (elementId) {
        app.BaseGroup.call(this, elementId);
        this.goggles = document.querySelectorAll('.goggles');
        this.bg = document.querySelector('#impact-bg');
        this.createFrames(this.goggles.length);
    };

    app.ImpactGroup.prototype = Object.create(app.BaseGroup.prototype);

    app.ImpactGroup.prototype.update = function () {
        var inPlay = this.isGroupOnScreen();
        //if (inPlay) {
            var n = this.getFrame();
            this.swapImage(n);
        //}
    };

    app.ImpactGroup.prototype.createFrames = function (n) {

        var frames = [],
            frameHeight = this.el.getBoundingClientRect().height / n,
            start = 0;

        for(var i = 0; i < n; i++) {
            var frame = {};
            frame.id = i + 1;
            frame.top = start === 0 ? start : start + 1;
            frame.bottom = start + frameHeight;
            frames.push(frame);
            start = frame.bottom;
        }

        this.frames = frames;
    };

    app.ImpactGroup.prototype.getFrame = function () {
        var vp = this.getViewport(),
            needle = (vp.top - window.innerHeight);
    
        for(var i = 0; i < this.frames.length; i++) {
            var frame = this.frames[i];
            if(needle >= frame.top && needle <= frame.bottom) {
                return frame.id;
            }
        }

        return false;
    };

    app.ImpactGroup.prototype.swapImage = function (n) {
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
