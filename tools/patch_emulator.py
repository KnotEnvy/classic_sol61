"""Normalize external download bytes for Emscripten FS in EmulatorJS 4.2.3."""
from pathlib import Path
import hashlib,json
root=Path(__file__).resolve().parents[1]
path=root/'dist/emulator/emulator.min.js'
old='this.writeFile(n,i.data)'
new='this.writeFile(n,new Uint8Array(i.data))'
code=path.read_text(encoding='utf8')
if old in code:
    if code.count(old)!=1:raise RuntimeError('Unexpected runtime revision')
    path.write_text(code.replace(old,new),encoding='utf8')
elif new not in code:raise RuntimeError('External-file loading code was not found')
code=path.read_text(encoding='utf8')
code=code.replace('fetch("https://cdn.emulatorjs.org/stable/data/version.json")','fetch((window.EJS_pathtodata||"data/")+"version.json")')
path.write_text(code,encoding='utf8')
manifest=json.loads((root/'sources.json').read_text())
manifest['runtime_patch']={'file':'emulator/emulator.min.js','reason':'Normalize external asset ArrayBuffer to Uint8Array before FS.writeFile; otherwise sample ZIPs are written empty in 4.2.3. Read the pinned local version.json instead of the optional CDN update check, allowing offline play.','sha256':hashlib.sha256(path.read_bytes()).hexdigest()}
(root/'sources.json').write_text(json.dumps(manifest,indent=2))
print('External audio archive loading repaired.')
