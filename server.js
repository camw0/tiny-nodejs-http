require('fs').readFile('./i.html', function (h) { require('http').createServer((rq, r) => { r.write(h); r.end() }).listen(8080)) };
