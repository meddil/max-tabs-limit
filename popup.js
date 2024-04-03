document.getElementById('tabLimitbtn').addEventListener('click', function() {
  var tabLimitinput = document.getElementById('tabLimitinput').value;
  chrome.storage.sync.set({tabLimitinput: tabLimitinput}, function() {
      console.log('Max tabs set to ' + tabLimitinput);
      document.getElementById('currentLimit').textContent = 'Current limit: ' + tabLimitinput;
  });
});

//Update the current limit when changed
function updateLimit() {
  chrome.storage.sync.get(['tabLimitinput'], function(data) {
      var currentLimit = document.getElementById('currentLimit');
      if (data.tabLimitinput) {
          currentLimit.textContent = 'Current limit: ' + data.tabLimitinput;
      } else {
          currentLimit.textContent = 'Current limit: Not set';
      }
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateLimit(); // To show current limit when opening extension

  document.getElementById('tabLimitbtn').addEventListener('click', function() {
      var tabLimitinput = document.getElementById('tabLimitinput').value;
      chrome.storage.sync.set({tabLimitinput: tabLimitinput}, function() {
          console.log('Max tabs set to ' + tabLimitinput);
          //Update current limit after seting new one
          updateLimit();
      });
  });
});
