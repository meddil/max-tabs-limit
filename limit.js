/*chrome.tabs.onCreated.addListener(function(tab) {
  chrome.tabs.remove(tab.id);
});

chrome.tabs.query({}, function(tabs) {
  console.log(`Total number of open tabs in all windows: ${tabs.length}`);
});

chrome.tabs.query({}, function(tabs) {
  alert(`Total number of open tabs in all windows: ${tabs.length}`);
});
*/
chrome.tabs.onCreated.addListener(function(newTab) {
  chrome.tabs.query({}, function(tabs) {
    if (tabs.length > 10) {
      // Closes the last added tab if the total number of tabs exceeds 10
      chrome.tabs.remove(newTab.id);
    }
  });
});