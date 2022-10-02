const http = require('http');

const server = http.createServer((req, res)=>{ 
	//어떻게 응답하는 가에 대한 코드
	res.writeHead(200, {'Content-type': 'text/html; charset=utf-8'});
	res.write('<h1>Hello Node!</h1>');
	res.end('<p>Hello Server!</p>');
})

// 8080번 포트에서 대기
server.listen(8080);

server.on('listening', ()=>{
	console.log('8080번 포트에서 대기 중,,');
});
server.on('error', (error)=>{
	console.error(error);
});