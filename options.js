// Saves options to chrome.storage
function save_options() {
  var cancel_autoplay = document.getElementById('cancel_autoplay').checked;
  var cancel_refresh = document.getElementById('cancel_refresh').checked;

  chrome.storage.sync.set({
    cancel_autoplay: cancel_autoplay,
    cancel_refresh: cancel_refresh
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    cancel_refresh: true,
    cancel_autoplay: true
  }, function(items) {
    document.getElementById('cancel_refresh').checked = items.cancel_refresh;
    document.getElementById('cancel_autoplay').checked = items.cancel_autoplay;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);