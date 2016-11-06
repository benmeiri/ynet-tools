function createButton(text,id,storage,classList){
     var player = $(id);
     sessionStorage[storage]  = player.html();
     player.html('<div class="live-ynet-extention-tv"><div class="ynet-extension-button" onclick="replaceHtmlYnet(\'' + id + '\',\''+ storage +'\')">' + text+ '</div></div>');
     if (classList){
        player.addClass(classList);
     }
}

 
$(document).ready(function() {
 // executes when HTML-Document is loaded and DOM is ready
   
 /*   var player = $('#yntfpcontainer1');
    var playerIframe = $('#article_live_tv-1'); 
 
    
    sessionStorage['yntfpcontainer1_html']  = player.html();
    sessionStorage['vPlayerDiv1_html']  = playerIframe.html();*/

//ynet search 
var searchType = jQuery('#mainSearchSelectType');
if (searchType){
  searchType.val('ynet');
  jQuery('#mainSearchSelectText').text(jQuery('#mainSearchSelectType option[value=ynet]').text());
}

//ץראה

//
chrome.storage.sync.get({
    cancel_refresh: true,
    cancel_autoplay: true
  }, function(items) {
    debugger;
    if(items.cancel_refresh){

           var elt = document.createElement("script");
           elt.innerHTML = "if (window.pageRefreshDisable){ window.pageRefreshDisable(); console.log('refresh disabled');}else{console.log('no disable function');}";
           document.head.appendChild(elt);


    }
    if(items.cancel_autoplay){

    var yourCustomJavaScriptCode = 'document.replaceHtmlYnet = function replaceHtmlYnet(id,storageLocation){jQuery(id).html(sessionStorage[storageLocation]);}'
        var script = document.createElement('script');
        var code = document.createTextNode('(function() {' + yourCustomJavaScriptCode + '})();');
    script.appendChild(code);
    (document.body || document.head).appendChild(script);

    createButton('וידאו אוטומטי<br>לחץ על מנת לנגן','#yntfpcontainer1', 'yntfpcontainer1_html');
    createButton('שידור חי אוטומטי<br>לחץ על מנת לנגן','#article_live_tv-1', 'PlayerDiv1_html','live-tv-height');
    }
  });
  

    
});
/*
  chrome.storage.onChanged.addListener(function (changes,areaName) {
    debugger;
        console.log("New item in storage",changes.visitedPages.newValue);
    })

*/
