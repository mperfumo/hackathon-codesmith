// background.js

let color = '#3aa757';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  console.log("in here");
  if (changeInfo.status == 'complete') {
    console.log("testest")

    // do your things

  }
})





//get html for current tab
//queryselctorall the code tag
//for all those instances, replace innertext to image/video etc.
