/*
chrome.tabs.onCreated.addListener(function(newTab) {
  chrome.tabs.query({}, function(tabs) {
    if (tabs.length > 10) {
      // Closes the last added tab if the total number of tabs exceeds 10
      chrome.tabs.remove(newTab.id);
    }
  });
}); 
*/

chrome.tabs.onCreated.addListener(function(newTab) {
  chrome.storage.sync.get(['maxTabs'], function(data) {
      var maxTabs = parseInt(data.maxTabs);
      if (!isNaN(maxTabs)) {
          chrome.tabs.query({}, function(tabs) {
              if (tabs.length > maxTabs) {
                  chrome.tabs.remove(newTab.id);
              }
          });
      }
  });
});