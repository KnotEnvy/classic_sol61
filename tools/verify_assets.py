"""Check installed runtime/ROM/sample integrity against the recorded manifest."""
from pathlib import Path
import json,hashlib,zipfile
root=Path(__file__).resolve().parents[1]
manifest=json.loads((root/'sources.json').read_text())
checks=[]
patch=manifest.get('runtime_patch',{})
for item in manifest['runtime']:
    expected=patch['sha256'] if item['file']==patch.get('file') else item['sha256']
    checks.append((item['file'],expected))
for item in manifest['games']:
    checks.append((item['game']['file'],item['installed_sha256']))
for item in manifest.get('samples',[]):
    checks.append((item['file'],item['installed_sha256']))
for item in manifest.get('bios',[]):
    checks.append((item['game']['file'],item['installed_sha256']))
for item in manifest.get('cabinetDefaults',[]):
    checks.append((item['file'],item['sha256']))
for relative,expected in checks:
    path=root/'dist'/relative
    actual=hashlib.sha256(path.read_bytes()).hexdigest()
    if actual!=expected:raise RuntimeError('Asset checksum mismatch: '+relative)
    if path.suffix=='.zip':
        with zipfile.ZipFile(path) as archive:
            bad=archive.testzip()
            if bad:raise RuntimeError('Damaged archive member: '+bad)
print(f'{len(checks)} installed runtime, ROM, BIOS, sample and cabinet-default assets verified.')
