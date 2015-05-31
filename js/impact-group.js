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
        if (this.isGroupOnScreen()) {
            // A little workaround for the chrome background-attachment/position relative bug
            this.el.style.visibility = 'visible';
            //var n = this.getFrame();
            this.swapImage();
        } else {
            this.el.style.visibility = 'hidden';
        }


        // var inPlay = this.isGroupOnScreen();
        // //if (inPlay) {
        //     var n = this.getFrame();
        //     this.swapImage(n);
        // //}
    };

    app.ImpactGroup.prototype.createFrames = function (n) {
        var start = 0;
            //frames = [];

        for (var i = 0; i < this.goggles.length; i++) {
            var goggle = this.goggles[i];
            //var frame = {};
            goggle.dataset.top = start;
            //frame.top = start;
            //frame.bottom = goggle.dataset.bottom;
            start = parseInt(goggle.dataset.bottom, 10) + 1;
            //frames.push(frame);
            //goggle.dataset.top = frame.top;
            //console.log(frame);
        }
        //console.log(frames);
        //this.frames = frames;
    };

    app.ImpactGroup.prototype.createFramesx = function (n) {

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

    // app.ImpactGroup.prototype.getFrame = function () {
    //     var vp = this.getViewport(),
    //         needle = (vp.top - window.innerHeight);
    
    //     for(var i = 0; i < this.frames.length; i++) {
    //         var frame = this.frames[i];
    //         if(needle >= frame.top && needle <= frame.bottom) {
    //             return frame.id;
    //         }
    //     }

    //     return false;
    // };

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
