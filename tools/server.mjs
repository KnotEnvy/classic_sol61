import http from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../dist');
const port = Number(process.env.CLASSIC_ARCADE_PORT || 8610);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.wasm':'application/wasm','.png':'image/png','.svg':'image/svg+xml','.woff2':'font/woff2','.zip':'application/zip','.data':'application/octet-stream'};
const server = http.createServer(async (request,response) => {
  try {
    if (!['GET','HEAD'].includes(request.method)) {response.writeHead(405).end();return;}
    let relative = decodeURIComponent(new URL(request.url,'http://localhost').pathname);
    if (relative === '/') relative = '/index.html';
    const file = path.resolve(root, '.' + relative);
    if (!file.startsWith(root + path.sep)) {response.writeHead(403).end();return;}
    const info = await stat(file);
    if (!info.isFile()) throw new Error('Not a file');
    response.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream','Content-Length':info.size,'Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    if (request.method === 'HEAD') response.end(); else createReadStream(file).pipe(response);
  } catch {response.writeHead(404,{'Content-Type':'text/plain'}).end('Not found');}
});
const url=`http://127.0.0.1:${port}`;
function openBrowser(){
  if(!process.argv.includes('--open'))return;
  if(process.platform==='win32')spawn('cmd',['/c','start','',url],{stdio:'ignore',windowsHide:true}).unref();
  else if(process.platform==='darwin')spawn('open',[url],{stdio:'ignore'}).unref();
  else spawn('xdg-open',[url],{stdio:'ignore'}).unref();
}
server.listen(port,'127.0.0.1',()=>{console.log(`Classic Arcade ready at ${url}`);openBrowser();});
server.on('error',error=>{
  if(error.code==='EADDRINUSE'){console.log(`An arcade server is already running at ${url}.`);openBrowser();return;}
  console.error('Could not open the arcade:',error.message);process.exitCode=1;
});
