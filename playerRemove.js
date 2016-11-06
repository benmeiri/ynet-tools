var videoFrame = document.querySelector('.video-container iframe');
if(videoFrame && videoFrame.contentWindow ){

    var readFlowInterval = setInterval(function () {
        if (videoFrame.contentWindow.flowplayer) {
            clearInterval(readFlowInterval);

            // ----------------------------------------------------------
            // This part of the script triggers when page is done loading
            // ----------------------------------------------------------
            var player =  videoFrame.contentWindow.flowplayer('#vastFlowPlayer');
            if(player){
                var readyPlayerState = setInterval(function () {
                    if (!player.loading) {
                        clearInterval(readyPlayerState);

                        // ----------------------------------------------------------
                        // This part of the script triggers when page is done loading
                        // ----------------------------------------------------------
                        player.pause();
                        console.log("Player paused");
                    }
                }, 100);

            }


            console.log("Player JS loaded");
        }
    }, 100);


}