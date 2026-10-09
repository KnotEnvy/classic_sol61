import {readFile,writeFile,mkdir,rm,copyFile,readdir,stat} from 'node:fs/promises';
import {createHash} from 'node:crypto';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const output=path.join(root,'_site');
const manifest=JSON.parse(await readFile(path.join(root,'sources.json'),'utf8'));
const context={window:{}};vm.runInNewContext(await readFile(path.join(root,'dist/catalogue.js'),'utf8'),context);
const games=context.window.ARCADE_GAMES;
if(games.length!==51||new Set(games.map(g=>g.id)).size!==51)throw Error('Expected51unique cabinets');
await rm(output,{recursive:true,force:true});await mkdir(output,{recursive:true});
let total=0,count=0;
async function copy(source,relative,expected){
 if(relative.includes('..')||path.isAbsolute(relative))throw Error('Invalid publication path');
 const bytes=await readFile(source);
 if(bytes.length>=100*1024*1024)throw Error('GitHub file size limit: '+relative);
 if(expected&&createHash('sha256').update(bytes).digest('hex')!==expected)throw Error('Checksum mismatch: '+relative);
 const destination=path.join(output,relative);await mkdir(path.dirname(destination),{recursive:true});await writeFile(destination,bytes);total+=bytes.length;count++;
}
for(const file of await readdir(path.join(root,'dist'))){if(/\.(html|css|js|md)$/.test(file))await copy(path.join(root,'dist',file),file);}
for(const file of await readdir(path.join(root,'dist/fonts')))await copy(path.join(root,'dist/fonts',file),'fonts/'+file);
const assets=new Map();
for(const r of manifest.runtime){assets.set(r.file,r.file===manifest.runtime_patch?.file?manifest.runtime_patch.sha256:r.sha256);}
for(const r of manifest.games)assets.set(r.game.file,r.installed_sha256);
for(const r of manifest.bios||[])assets.set(r.game.file,r.installed_sha256);
for(const r of manifest.samples||[])assets.set(r.file,r.installed_sha256);
for(const r of manifest.cabinetDefaults||[])assets.set(r.file,r.sha256);
for(const g of games)if(!assets.has('roms/'+g.rom))throw Error('Missing original game asset: '+g.id);
for(const[relative,sha]of assets)await copy(path.join(root,'dist',relative),relative,sha);
for(const file of await readdir(path.join(root,'licenses')))await copy(path.join(root,'licenses',file),'licenses/'+file);
for(const file of ['LICENSE','THIRD_PARTY_NOTICES.md'])await copy(path.join(root,file),file);
if(total>=1024*1024*1024)throw Error('GitHub Pages1GiB site limit exceeded');
await writeFile(path.join(output,'.nojekyll'),'');
await writeFile(path.join(output,'release.json'),JSON.stringify({cabinets:games.length,pinnedAssets:assets.size,files:count,bytes:total},null,2)+'\n');
console.log(JSON.stringify({output:'_site',cabinets:games.length,pinnedAssets:assets.size,files:count,bytes:total,MiB:(total/1024/1024).toFixed(1)}));
