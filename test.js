//Change the "service_worker" in manifest 
chrome.tabs.query({}, function(tabs) {
    var totalTabs = tabs.length;

    if (totalTabs = 4){
        chrome.tabs.onCreated.addListener(function(tab) {
            chrome.tabs.remove(tab.id);
          });
    }
});