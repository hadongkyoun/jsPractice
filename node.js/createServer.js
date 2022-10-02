const http = require('http');

http.createServer((req, res)=>{
	//어떻게 응답하는 가에 대한 코드
	res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
	res.write('<h1>Hello Node!</h1>');
	res.end('<p>Hello Server!</p>');
})
	.listen(8080, ()=>{
		console.log('8080번 포트에서 서버 대기 중..');
	});
