//Change the "service_worker" in manifest 
chrome.tabs.query({}, function(tabs) {
    var totalTabs = tabs.length;

    if (totalTabs = 4){
        chrome.tabs.onCreated.addListener(function(tab) {
            chrome.tabs.remove(tab.id);
          });
    }
});


// Step 1: Add an event listener to the button
document.getElementById('tLimit').addEventListener('click', function() {
    // Step 2: Get the value from the input field
    var tabLimitValue = document.getElementById('tabLimit').value;
    
    // Ensure the value is a number and greater than 0
    if (!isNaN(tabLimitValue) && tabLimitValue > 0) {
      // Step 3: Store the value
      // Example: Storing the value in localStorage
      localStorage.setItem('tabLimit', tabLimitValue);
      
      // Optionally, log the value to the console or proceed with other logic
      console.log('Tab limit set to:', tabLimitValue);
    } else {
      alert('Please enter a valid number greater than 0');
    }
  });