chrome.tabs.onCreated.addListener(() => {
    chrome.storage.local.get(['tabLimit'], (data) => {
      if (data.tabLimit) {
        chrome.tabs.query({}, (tabs) => {
          const numberOfOpenTabs = tabs.length;
          if (numberOfOpenTabs >= data.tabLimit) {
            alert(`You have reached your tab limit of ${data.tabLimit}!`);
            chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
              chrome.tabs.remove(tabs[0].id);
            });
          }
        });
      }
    });
  });