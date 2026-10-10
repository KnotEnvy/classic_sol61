import {readFile, writeFile} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const roster = JSON.parse(await readFile(path.join(root,'docs/expansion-roster.json'),'utf8'));
const evidence = JSON.parse(await readFile(path.join(root,'docs/browser-roster-evidence.json'),'utf8'));
const context={window:{}};
vm.runInNewContext(await readFile(path.join(root,'dist/catalogue.js'),'utf8'),context);
const cabinetById=new Map(context.window.ARCADE_GAMES.map(g=>[g.id,g]));
const ids = new Set(roster.games.map(g=>g.id));
if(ids.size!==roster.target || roster.games.length!==roster.target) throw new Error('Roster count must match its unique sets.');
const playable=roster.games.filter(g=>g.installed||g.batch===0).length;
const planned=roster.games.length-playable;
const finalDecade=roster.games.filter(g=>g.installed&&g.year>=2000&&g.year<2010).length;
const releaseNote=planned?`${planned} titles still require browser admission.`:'The complete approved collection is available for player testing.';
if(roster.games.filter(g=>g.batch===0).length!==8) throw new Error('The existing arcade has eight playable cabinets.');
const phases = [
 {batch:0,name:'Original eight',count:8,total:8,detail:'The original eight cabinets remain the regression baseline.'},
 {batch:1,name:'Driving + landscape pilot',count:7,total:15,detail:'1942, Strider, OutRun, Super Sprint, Super Hang-On, Double Dragon and Bubble Bobble. Prove landscape scaling, different steering types, multiple buttons and local co-op.'},
 {batch:2,name:'Complete the 1980s room',count:7,total:22,detail:'Defender, Robotron, Joust, Q*bert, Gauntlet, Ghosts\'n Goblins and Final Fight. Prove twin-stick input, diagonal movement, samples and four player slots.'},
 {batch:3,name:'1990s essentials',count:10,total:32,detail:'Street Fighter II, Mortal Kombat II, NBA Jam TE, The Simpsons, Turtles in Time, Sunset Riders, X-Men, Metal Slug, Puzzle Bobble and Raiden.'},
 {batch:4,name:'1990s depth',count:10,total:42,detail:'The remaining ten 1990s choices. Stress-test CPS-3 with 3rd Strike; finish Neo Geo, CPS-2, rally, golf and disc-sports coverage.'},
 {batch:6,name:'Requested racers and missing essentials',count:12,total:63,detail:'Chase H.Q., APB, Golden Axe, R-Type, Gradius, Arkanoid, Marble Madness, Tetris, Shinobi, Street Fighter Alpha 2, Alien vs. Predator and Qix.'},
 {batch:5,name:'2000s arcade craft',count:9,total:51,detail:'Nine original 2D arcade releases. Benchmark PGM/Cave and the higher-demand 2007 Deathsmiles pilot; preserve intentional slowdown and verify regional revisions.'}
];
phases.sort((a,b)=>a.batch-b.batch);
const games = roster.games.map(g=>{
  const e=evidence.sets[g.id];
  if(!e?.found || e.driver.status!=='good') throw new Error(`Missing playable upstream driver: ${g.id}`);
  const cabinet=cabinetById.get(g.installedId||g.id);
  return {...g,era:g.year<1980?'Heritage':`${Math.floor(g.year/10)*10}s`,edition:cabinet?`${cabinet.version} · ${cabinet.rom.replace(/\.zip$/,'')}`:e.description,
    driverSource:`https://github.com/libretro/FBNeo/blob/${evidence.commit}/src/burn/drv/${e.attributes.sourcefile}`,
    status:(g.installed||g.batch===0)?'Player testing':g.benchmark?'Browser benchmark':'Browser candidate',
    note:g.note||'Confirm exact revision, complete controls, original audio and state transitions in the browser before release.'};
});
for(const phase of phases) if(games.filter(g=>g.batch===phase.batch).length!==phase.count) throw new Error(`Incorrect batch count: ${phase.batch}`);
const data = {...roster,games,phases,evidence:{commit:evidence.commit,source:evidence.source,retrieved:evidence.retrieved_utc}};
await writeFile(path.join(root,'dist/roadmap-data.js'),`/* Planning data; never used as the playable cabinet catalogue. */\nwindow.ARCADE_ROADMAP = ${JSON.stringify(data,null,2)};\n`);

const text = `# Classic Arcade: browser-only expansion plan

Updated: ${roster.date}. **${playable} cabinets are available for player testing**, including all 21 selected 1980s titles, ${roster.games.filter(g=>g.installed&&g.year>=1990&&g.year<2000).length} selected 1990s titles, ${finalDecade} selected 2000s titles and Space Invaders. Adding 1942 to the approved 50-game proposal gives **${roster.target} planned total titles**, with **${planned} future additions**. ${releaseNote}

## The decision

Every admitted game must execute its original arcade software inside a browser tab. Emulator code and game assets load as website resources. Players will not install native emulators, a companion application or a browser extension. No remote gameplay streaming or console-port substitution is planned. A title that cannot pass the browser fidelity checks stays out; a smaller finished library is acceptable.

Use our current EmulatorJS/FBNeo path for the initial additions. [EmulatorJS lists FBNeo as its default arcade core](https://emulatorjs.org/docs/systems/arcade/) and also offers [MAME 2003 and MAME 2003-Plus browser cores](https://emulatorjs.org/docs4devs/cores/). A second browser core is a possible per-title fallback after comparison; it is not automatically more faithful.

The official FBNeo DAT snapshot at commit [${evidence.commit.slice(0,12)}](${evidence.source}) contains all ${roster.target} roster sets with driver status good. The raw extracted evidence and metadata SHA-256 are saved in browser-roster-evidence.json. **Upstream driver status does not prove compatibility with the installed June 14, 2025 WASM core, full-speed browser performance or correct input.** First match and validate sets against the exact core we ship. The existing eight remain pinned while we test additions in isolation.

## Curating the three decades

The proposal keeps **21 games from the 1980s, 20 from the 1990s, nine from the 2000s**, plus Space Invaders as a 1978 heritage cabinet. The playable sidebar provides cabinet search; the roadmap provides era, genre and status filters. Year, developer and exact arcade edition remain visible; chronology should use arcade release dates rather than dates of console ports.

The 1980s cover the maze, shooter, platform, co-op and racing foundations. The 1990s add fighters, four-player cabinets, basketball, golf and rally. The 2000s selection deliberately focuses on the period's 2D arcade releases, where the established browser emulator path is strongest. Deathsmiles (2007) adds late-decade coverage as a higher-demand browser benchmark, rather than a guaranteed admission. It does not represent the entire 3D arcade scene of that decade. Roster choices reflect breadth and likely browser viability, not a sales or popularity ranking.

The motorcycle priority is **Super Hang-On (1987)**. Sega records its [April 1987 arcade release and OutRun-board hardware](https://www.sega.jp/history/arcade/product/15675/). Manx TT is an era-correct option, but stays on the research list under the browser-only requirement. The later Raw Thrills [MotoGP (2015)](https://rawthrills.com/games/motogp/) is outside the chosen period.

## Recommended roster

Installed rows are available for player testing. Future rows remain browser candidates. Editions below are upstream research references; sources.json and the playable catalogue define the exact installed revision. Driver links point to the pinned official source files. Before implementation, choose a supported original regional revision and record it in the asset manifest. Never silently replace an original set with an enhanced, speed-up, bootleg or arrange version.

${['Heritage','1980s','1990s','2000s'].map(era=>`### ${era} (${games.filter(g=>g.era===era).length})

| Game | Year | Genre | Status / batch | Candidate set / source |
| --- | --- | --- | --- | --- |
${games.filter(g=>g.era===era).map(g=>`| ${g.name} | ${g.year} | ${g.genre} | ${(g.installed||g.batch===0)?'Player testing':g.benchmark?`Benchmark · ${g.batch}`:`Planned · ${g.batch}`} | [${g.id}](${g.driverSource}) · ${g.edition} |`).join('\n')}`).join('\n\n')}

Dates can differ from the year stored in emulator metadata. In particular, the current DAT lists older copyright years for Defender, Centipede and Ms. Pac-Man; the proposal retains their arcade release years. Cave dates [Ketsui to January 2003](https://www.cave.co.jp/business/ケツイ-～絆地獄たち～/), although the DAT has 2002. Its [Dai-Ou-Jou release page](https://www.cave.co.jp/business/怒首領蜂大往生/) records April 2002; the candidate World set has the international title DoDonPachi III and requires an explicit edition choice. [Deathsmiles was released in October 2007](https://www.cave.co.jp/business/デススマイルズ/).

## Implementation order

First prepare the library and controls, then add games in reviewable batches. Totals below are targets only; every failed admission reduces the actual total until fixed or replaced with another proven browser title.

| Stage | Additions | Target total | Purpose |
| --- | --- | --- | --- |
| Foundation | 0 | 8 | Keep the existing eight pinned; add era/genre/status/core metadata, landscape and portrait sizing, per-title controls and four local player profiles. |
${phases.filter(p=>p.batch>0).map(p=>`| ${p.batch}. ${p.name} | ${p.count} | ${p.total} | ${p.detail} |`).join('\n')}

Start with **Strider, OutRun and Super Sprint** as representative pilots, then complete the first seven, including 1942. Strider exercises landscape CPS-1 and two action buttons. OutRun requires absolute steering, pedals and a gear change; preserve its original music choice, route branches and goal scenes. Super Sprint requires relative movement from a continuous wheel plus accelerator and up to three independent players. One generic left/right steering implementation will not accurately serve both racers. Super Hang-On adds throttle, brake and turbo. Both keyboard and standard browser gamepad input must have usable mappings without requiring special hardware.

The catalogue needs separate native pixel dimensions and display aspect ratio. CPS games often use non-square CRT geometry: expose sharp native pixels and a faithful display-aspect option. Preserve the emulator's reported refresh rate and native slowdown; do not impose 60 Hz, overclock the board or enable speed hacks to make a benchmark pass. Multi-button games need visible action names and remapping. Four-player sets require individual coin/start mappings and independent gamepads; cabinet linking and online multiplayer are outside this initial plan.

Preserve source URL, region, revision, ROM member CRCs, installed SHA-256, parent dependencies, BIOS and samples for every added title. Use the original arcade BIOS mode for Neo Geo rather than AES/console mode. [FBNeo documents set matching, BIOS/sample placement and input mappings](https://docs.libretro.com/library/fbneo/). Neo Geo and PGM dependencies should be loaded by the site, not requested as a player installation step. Defer any change of the shared core until its representative pilots and the eight existing cabinets pass a regression check.

## Admission checks for every cabinet

1. **Identity and boot:** validate the original set, regional revision, dependencies and hashes against the shipped core. Inspect the power-on test, title, attract sequence and demo audio against original-board footage or the original operator manual.
2. **Controls:** credit and start every supported local player; verify every action and pause/resume/focus behavior. Test keyboard and browser gamepad. Check dial, relative wheel, absolute steering and twin-stick profiles separately.
3. **Gameplay and sound:** verify multiple stages, boss/round transitions, speech and effects. Compare timing at the board's own rate and preserve intentional slowdown. Complete a sustained gameplay session to expose audio crackle, pacing problems, memory growth or stuck input; extend testing when it reveals a concern.
4. **State coverage:** inspect death, life loss, continue, game over, initials/high scores, intermissions and endings where present. A successful boot is not sufficient. Use separate QA save states to reach late states without changing default player gameplay.
5. **Presentation and usability:** verify orientation, native matrix, display aspect, fullscreen, readable controls, loading progress and a useful failure message. Check a clean browser profile; no extension, external executable or installation prompt may be part of playing a game.
6. **Release:** only then move the title from candidate to playable and publish its validation record. If sustained performance or fidelity cannot be achieved in the browser, remove it from the launch count. Do not conceal the failure by switching to a console edition, streaming service or native launcher.

## Games held for browser research

${roster.researchOnly.join(', ')}.

These remain desirable rather than being declared impossible. We currently have no validated browser route for their original arcade editions. A standalone emulator's compatibility list is not evidence for a browser port. Sega identifies [Manx TT as Model 2](https://www.sega.jp/history/arcade/product/16013/) and [Initial D Ver.3 as NAOMI 2](https://www.sega.jp/history/arcade/product/8063/), so neither belongs in our current FBNeo batch.

A [third-party Flycast WASM project](https://github.com/nasomers/flycast-wasm) now documents a Dreamcast browser build and its required hosting headers. Its Dreamcast performance claims do not establish original NAOMI/NAOMI 2 arcade compatibility in our frontend. It is worth a bounded technical pilot later for Crazy Taxi or Ikaruga, using the original arcade edition and measuring actual play. It does not justify a console-port replacement or a promise about Model 2, Chihiro, System 256 or dance-cabinet titles.

## Alternative browser candidates

${roster.browserReserves.join(', ')}. These are potential nostalgia-driven swaps, not extra launch commitments; check their exact drivers and browser behavior before using them. This proposal can remain below 50 while quality catches up. The browser-only requirement and original arcade behavior take precedence over the number.

## Deliverables from this research pass

- expansion-roster.json: curated ${roster.target}-title roster, batch order, controls and per-title concerns.
- browser-roster-evidence.json: official DAT evidence, retrieval time, pinned source commit and metadata hash.
- ../dist/roadmap.html: searchable planning page, linked to the ${playable}-cabinet playable catalogue.
- ../tools/research_browser_roster.py: reproducible metadata-only research; downloads no games or emulator binaries.
- ../tools/build_roadmap.mjs: validates counts and regenerates this document and planning data.

The 1980s implementation adds 14 original sets, Q*bert’s knocker sample, and per-title MAME 2003 Plus browser cores for Defender, Joust and Super Sprint. The original eight ROM hashes and FBNeo core remain unchanged. Legacy WASM compatibility files are bundled locally to avoid CDN fallback. Browser smoke checks cover boot, credits, start and actions; player testing still needs longer sessions, physical gamepads, stage transitions and endings. The 1990s expansion adds the approved 20 games, including six-button fighters, original Neo Geo arcade BIOS, four-player Konami games and the CPS-3 3rd Strike performance pilot. The final-decade expansion adds ${finalDecade} validated cabinets, the original PGM BIOS and independent rotary controls for Puzz Loop 2. See PLAYER_TESTING.md for controls and VALIDATION.md for the measured browser behavior and its limits.
`;
await writeFile(path.join(root,'docs/EXPANSION_PLAN.md'),text);
await writeFile(path.join(root,'dist/expansion-plan.md'),text);
console.log(JSON.stringify({total:games.length,playable,planned,eras:Object.fromEntries(['Heritage','1980s','1990s','2000s'].map(e=>[e,games.filter(g=>g.era===e).length])),batches:phases.map(p=>({batch:p.batch,count:p.count,total:p.total}))}));
