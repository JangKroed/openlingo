import { createServer } from 'node:http';
const html='<!doctype html><html lang="en"><meta charset="utf-8"><title>OpenLingo</title><body style="font:18px system-ui;max-width:660px;margin:10vh auto"><h1>OpenLingo</h1><p>Local-first language tutor.</p><p><strong>Development scaffold only.</strong> Subscription auth and tutoring not implemented. See prompts/START_HERE.md.</p></body></html>';
const port=Number(process.env.WEB_PORT??3000);
createServer((_q,r)=>{r.writeHead(200,{'content-type':'text/html; charset=utf-8'});r.end(html)}).listen(port,'127.0.0.1',()=>console.log('WEB http://127.0.0.1:'+port));
