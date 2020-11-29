'use strict';
const LIMIT = 143859; <!--All Unicode characters-->

var out = "";

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

for(let i = 0; i < LIMIT; i++){
  out += String.fromCharCode(i);
  out += '\n';
}

download("unicode.txt", out)
