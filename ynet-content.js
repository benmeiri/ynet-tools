function injectScript(filename){
    var s = document.createElement('script');
    s.src = chrome.extension.getURL(filename);
    (document.head||document.documentElement).appendChild(s);
    s.onload = function() {
        s.parentNode.removeChild(s);
    };

}


var readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
        clearInterval(readyStateCheckInterval);

        // ----------------------------------------------------------
        // This part of the script triggers when page is done loading
        // ----------------------------------------------------------


        // var searchType = jQuery('#mainSearchSelectType');
        // if (searchType) {
        //     searchType.val('ynet');
        //     jQuery('#mainSearchSelectText').text(jQuery('#mainSearchSelectType option[value=ynet]').text());
        // }

        chrome.storage.sync.get({
            cancel_refresh: true,
            cancel_autoplay: true
        }, function (items) {

            if (items.cancel_refresh) {

                injectScript('cancelAutorefresh.js');



            }
            if (items.cancel_autoplay) {
                injectScript('playerRemove.js');

            }
        });

        console.log("Ynet tools loaded");
    }
}, 10);


