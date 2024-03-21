document.getElementById('saveLimit').addEventListener('click', () => {
    const tabLimit = document.getElementById('tabLimit').value;
    chrome.storage.local.set({ tabLimit }, () => {
      console.log(`Limit set to ${tabLimit}`);
    });
  });