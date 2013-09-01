function toggleOn(e) {
  var toggle = false;
  alert("enters");
  chrome.tabs.executeScript(null,
      {code:"document.body.contentEditable='true'; document.designMode='on'; void 0"});
  window.close();
  alert("reaches here");
  return toggle;
}

function toggleOff(e) {
  var toggle = true;
  alert("enters2");
  chrome.tabs.executeScript(null,
      {code:"document.body.contentEditable='false'; document.designMode='off'; void 0"});
  window.close();
  return toggle;
}
  
document.addEventListener('DOMContentLoaded', function () {
  var bool = toggleOn();
  console.log("boolean is ", bool);
  toggleOff();
});