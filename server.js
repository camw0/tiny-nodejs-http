require('fs').readFile('./index.html', function (err, html) { if (err) throw err; require('http').createServer((req, res) => { res.write(html); res.end() }).listen(8080) });
