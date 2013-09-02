function enableOrDisableEditonTabClick(e) {
  var choice = e.target.id;
  if (choice == 'enable') { 
    chrome.tabs.executeScript(null,
      {code:"document.body.contentEditable='true'; document.designMode='on'; void 0"});
  } else {  
    chrome.tabs.executeScript(null,
      {code:"document.body.contentEditable='false'; document.designMode='off'; void 0"});
  }
}


document.addEventListener('DOMContentLoaded', function () {
  var divs = document.querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) { 
    divs[i].addEventListener('click', enableOrDisableEditonTabClick);
  }
});