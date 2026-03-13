var fs = require('fs');
var p = 'e:\\shtuka\\shtuka-html\\\u041e\u0441\u043d\u043e\u0432\u043d\u043e\u0439 interior-designer-ufa-v9\\portfolio-block__7__itog (3) LAST.html';
var c = fs.readFileSync(p, 'utf8');
var idx = c.indexOf('currentSlide');
console.log('currentSlide at char: ' + idx);
if (idx > -1) {
  console.log(c.substring(idx - 300, idx + 800));
}
