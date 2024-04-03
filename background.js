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
  chrome.storage.sync.get(['tabLimitinput'], function(data) {
      var tabLimitinput = parseInt(data.tabLimitinput);
      if (!isNaN(tabLimitinput)) {
          chrome.tabs.query({}, function(tabs) {
              if (tabs.length > tabLimitinput) {
                  chrome.tabs.remove(newTab.id);
              }
          });
      }
  });
});