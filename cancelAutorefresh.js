(function(){
    if (window.pageRefreshDisable) {
        window.pageRefreshDisable();
        console.log('refresh disabled');
    } else {
        console.log('no disable function');
    }
})();