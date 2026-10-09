"""Read official FBNeo metadata. Downloads no games or emulator binaries."""
import hashlib
import json
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timezone
from pathlib import Path

ROSTER_PATH = Path(__file__).resolve().parents[1] / "docs" / "expansion-roster.json"
SETS = [game["id"] for game in json.loads(ROSTER_PATH.read_text(encoding="utf-8"))["games"]]
API = "https://api.github.com/repos/libretro/FBNeo/commits?per_page=1"
DAT_PATH = "dats/FinalBurn%20Neo%20(ClrMame%20Pro%20XML,%20Arcade%20only).dat"

def fetch(url):
    request = urllib.request.Request(url, headers={"User-Agent": "classic-sol61-research"})
    with urllib.request.urlopen(request, timeout=60) as response:
        return response.read()

commit = json.loads(fetch(API))[0]["sha"]
url = f"https://raw.githubusercontent.com/libretro/FBNeo/{commit}/{DAT_PATH}"
data = fetch(url)
root = ET.fromstring(data)
games = {g.attrib["name"]: g for g in root.findall("game")}
records = {}
for name in SETS:
    game = games.get(name)
    if game is None:
        records[name] = {"found": False}
        continue
    records[name] = {
        "found": True,
        "description": game.findtext("description"),
        "year": game.findtext("year"),
        "manufacturer": game.findtext("manufacturer"),
        "attributes": game.attrib,
        "driver": game.find("driver").attrib if game.find("driver") is not None else {},
        "video": game.find("video").attrib if game.find("video") is not None else {},
        "rom_bytes": sum(int(r.attrib.get("size", 0)) for r in game.findall("rom")),
        "declared_biosset_tags": sorted({r.attrib["name"] for r in game.findall("biosset")}),
    }
output = {
    "retrieved_utc": datetime.now(timezone.utc).isoformat(),
    "commit": commit,
    "source": url,
    "source_sha256": hashlib.sha256(data).hexdigest(),
    "scope": "Upstream driver/set metadata only; not proof of browser play or compatibility with the installed June 2025 core.",
    "sets": records,
}
target = Path(__file__).resolve().parents[1] / "docs" / "browser-roster-evidence.json"
target.parent.mkdir(exist_ok=True)
target.write_text(json.dumps(output, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
print(json.dumps({"commit": commit, "found": sum(r["found"] for r in records.values()), "total": len(SETS), "missing": [n for n, r in records.items() if not r["found"]], "output": str(target)}))
