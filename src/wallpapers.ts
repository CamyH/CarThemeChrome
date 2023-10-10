const img = document.createElement('img');
  img.src = chrome.runtime.getURL('images/wallpapers/k_gti.jpeg')
  document.getElementsByTagName("body")[0].appendChild(img)