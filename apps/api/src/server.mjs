import { createServer } from 'node:http';
const port=Number(process.env.API_PORT??3001);
createServer((req,res)=>{const ok=req.url==='/health'&&req.method==='GET';res.writeHead(ok?200:404,{'content-type':'application/json'});res.end(JSON.stringify(ok?{status:'ok',phase:'scaffold'}:{error:'not_found'}));}).listen(port,'127.0.0.1',()=>console.log('API http://127.0.0.1:'+port));
