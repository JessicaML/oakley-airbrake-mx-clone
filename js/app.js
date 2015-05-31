

(function() {
    var loaded = 0;
    var bootstrap = function() {
        if (loaded) return;
            loaded = 1;

        var main = new app.Main([
            new app.IntroGroup('intro-group'), 
            new app.VideoGroup('video-group'), 
            new app.ImpactGroup('impact-group')]);
        main.start();
    };

    if ( document.readyState === 'complete' ) {
        setTimeout( bootstrap );
    } else {
        document.addEventListener( 'DOMContentLoaded', bootstrap, false );
        window.addEventListener( 'load', bootstrap, false );
    }
})();