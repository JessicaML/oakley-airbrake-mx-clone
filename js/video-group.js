var app = app || {};

(function () {
    'use strict';

    app.VideoGroup = function (elementId) {
        app.BaseGroup.call(this, elementId);
    };

    app.VideoGroup.prototype = Object.create(app.BaseGroup.prototype);

    app.VideoGroup.prototype.update = function () {};


}());
