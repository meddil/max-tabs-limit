chrome.tabs.onCreated.addListener(function(tab) {
  chrome.tabs.remove(tab.id);
});