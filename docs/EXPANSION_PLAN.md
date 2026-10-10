# Classic Arcade: browser-only expansion plan

Updated: 2026-10-09. **63 cabinets are available for player testing**, including all 21 selected 1980s titles, 22 selected 1990s titles, 9 selected 2000s titles and Space Invaders. Adding 1942 to the approved 50-game proposal gives **63 planned total titles**, with **0 future additions**. The complete approved collection is available for player testing.

## The decision

Every admitted game must execute its original arcade software inside a browser tab. Emulator code and game assets load as website resources. Players will not install native emulators, a companion application or a browser extension. No remote gameplay streaming or console-port substitution is planned. A title that cannot pass the browser fidelity checks stays out; a smaller finished library is acceptable.

Use our current EmulatorJS/FBNeo path for the initial additions. [EmulatorJS lists FBNeo as its default arcade core](https://emulatorjs.org/docs/systems/arcade/) and also offers [MAME 2003 and MAME 2003-Plus browser cores](https://emulatorjs.org/docs4devs/cores/). A second browser core is a possible per-title fallback after comparison; it is not automatically more faithful.

The official FBNeo DAT snapshot at commit [a4012b161e48](https://raw.githubusercontent.com/libretro/FBNeo/a4012b161e48b33b94940f07987323574c237448/dats/FinalBurn%20Neo%20(ClrMame%20Pro%20XML,%20Arcade%20only).dat) contains all 63 roster sets with driver status good. The raw extracted evidence and metadata SHA-256 are saved in browser-roster-evidence.json. **Upstream driver status does not prove compatibility with the installed June 14, 2025 WASM core, full-speed browser performance or correct input.** First match and validate sets against the exact core we ship. The existing eight remain pinned while we test additions in isolation.

## Curating the three decades

The proposal keeps **21 games from the 1980s, 20 from the 1990s, nine from the 2000s**, plus Space Invaders as a 1978 heritage cabinet. The playable sidebar provides cabinet search; the roadmap provides era, genre and status filters. Year, developer and exact arcade edition remain visible; chronology should use arcade release dates rather than dates of console ports.

The 1980s cover the maze, shooter, platform, co-op and racing foundations. The 1990s add fighters, four-player cabinets, basketball, golf and rally. The 2000s selection deliberately focuses on the period's 2D arcade releases, where the established browser emulator path is strongest. Deathsmiles (2007) adds late-decade coverage as a higher-demand browser benchmark, rather than a guaranteed admission. It does not represent the entire 3D arcade scene of that decade. Roster choices reflect breadth and likely browser viability, not a sales or popularity ranking.

The motorcycle priority is **Super Hang-On (1987)**. Sega records its [April 1987 arcade release and OutRun-board hardware](https://www.sega.jp/history/arcade/product/15675/). Manx TT is an era-correct option, but stays on the research list under the browser-only requirement. The later Raw Thrills [MotoGP (2015)](https://rawthrills.com/games/motogp/) is outside the chosen period.

## Recommended roster

Installed rows are available for player testing. Future rows remain browser candidates. Editions below are upstream research references; sources.json and the playable catalogue define the exact installed revision. Driver links point to the pinned official source files. Before implementation, choose a supported original regional revision and record it in the asset manifest. Never silently replace an original set with an enhanced, speed-up, bootleg or arrange version.

### Heritage (1)

| Game | Year | Genre | Status / batch | Candidate set / source |
| --- | --- | --- | --- | --- |
| Space Invaders | 1978 | Shooter | Player testing | [invaders](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_invaders.cpp) · Original · Midway · invaders |

### 1980s (31)

| Game | Year | Genre | Status / batch | Candidate set / source |
| --- | --- | --- | --- | --- |
| Pac-Man | 1980 | Maze | Player testing | [pacman](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_pacman.cpp) · Midway · US · pacman |
| Galaga | 1981 | Shooter | Player testing | [galagao](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_galaga.cpp) · Namco · original · galagao |
| Donkey Kong | 1981 | Platformer | Player testing | [dkong](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_dkong.cpp) · US · set 1 · dkong |
| Frogger | 1981 | Action | Player testing | [frogger](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/galaxian/d_galaxian.cpp) · Original · Sega · frogger |
| Centipede | 1981 | Shooter | Player testing | [centiped](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_millipede.cpp) · Revision 4 · centiped |
| Dig Dug | 1982 | Maze | Player testing | [digdug](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_galaga.cpp) · Revision 2 · digdug |
| Ms. Pac-Man | 1982 | Maze | Player testing | [mspacman](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_pacman.cpp) · Original · standard speed · mspacman |
| 1942 | 1984 | Shooter | Player testing | [1942](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_1942.cpp) · Revision B · 1942 |
| Defender | 1981 | Shooter | Player testing | [defender](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_williams.cpp) · Red label · defender |
| Robotron: 2084 | 1982 | Shooter | Player testing | [robotron](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_williams.cpp) · Blue label · robotron |
| Joust | 1982 | Action | Player testing | [joust](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_williams.cpp) · Green label · joust |
| Q*bert | 1982 | Puzzle / action | Player testing | [qbert](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_qbert.cpp) · US · set 1 · qbert |
| Gauntlet | 1985 | Maze / co-op | Player testing | [gauntlet](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/atari/d_gauntlet.cpp) · Revision 14 · gauntlet |
| Ghosts'n Goblins | 1985 | Platformer | Player testing | [gng](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_gng.cpp) · World · set 2 · gnga |
| Bubble Bobble | 1986 | Platformer | Player testing | [bublbobl](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/taito/d_bublbobl.cpp) · Japan · version 0.1 · bublbobl |
| Super Sprint | 1986 | Racing | Player testing | [ssprint](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/atari/d_atarisy2.cpp) · Revision 4 · MAME 2003 Plus · ssprint |
| OutRun | 1986 | Racing | Player testing | [outrun](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/sega/d_outrun.cpp) · Sitdown/upright · revision B · outrun |
| Double Dragon | 1987 | Beat 'em up | Player testing | [ddragon](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_ddragon.cpp) · World · set 1 · ddragon |
| Super Hang-On | 1987 | Racing | Player testing | [shangon](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/sega/d_outrun.cpp) · Sitdown/upright · unprotected · shangon |
| Strider | 1989 | Platformer | Player testing | [strider](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps1.cpp) · US · set 1 · strider |
| Final Fight | 1989 | Beat 'em up | Player testing | [ffight](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps1.cpp) · World · set 1 · ffight |
| Chase H.Q. | 1988 | Racing | Player testing | [chasehq](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/taito/d_taitoz.cpp) · World · chasehq |
| APB: All Points Bulletin | 1987 | Driving / action | Player testing | [apb](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/atari/d_atarisy2.cpp) · Revision 7 · apb |
| Golden Axe | 1989 | Beat em up | Player testing | [goldnaxe](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/sega/d_sys16b.cpp) · US · set 6 · goldnaxe |
| R-Type | 1987 | Shooter | Player testing | [rtype](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/irem/d_m72.cpp) · World · rtype |
| Gradius | 1985 | Shooter | Player testing | [gradius](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/konami/d_nemesis.cpp) · Japan · ROM board · gradius |
| Arkanoid | 1986 | Puzzle / action | Player testing | [arkanoid](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/taito/d_arkanoid.cpp) · World · older · arkanoid |
| Marble Madness | 1984 | Skill / racing | Player testing | [marble](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/atari/d_atarisy1.cpp) · Set 1 · marble |
| Tetris | 1988 | Puzzle | Player testing | [atetris](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pre90s/d_atetris.cpp) · Atari arcade · set 1 · atetris |
| Shinobi | 1987 | Platformer | Player testing | [shinobi](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/sega/d_sys16a.cpp) · Set 6 · original System 16A · shinobi |
| Qix | 1981 | Puzzle / action | Player testing | [qix](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/taito/d_qix.cpp) · Revision 2 · qix |

### 1990s (22)

| Game | Year | Genre | Status / batch | Candidate set / source |
| --- | --- | --- | --- | --- |
| Raiden | 1990 | Shooter | Player testing | [raiden](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pst90s/d_raiden.cpp) · World · set 1 · raiden |
| Street Fighter II: The World Warrior | 1991 | Fighting | Player testing | [sf2](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps1.cpp) · World · 910522 · sf2 |
| The Simpsons | 1991 | Beat 'em up | Player testing | [simpsons](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/konami/d_simpsons.cpp) · 4 Players · World set 1 · simpsons |
| TMNT: Turtles in Time | 1991 | Beat 'em up | Player testing | [tmnt2](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/konami/d_tmnt.cpp) · 4 Players · UAA · tmnt2 |
| Sunset Riders | 1991 | Run and gun | Player testing | [ssriders](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/konami/d_tmnt.cpp) · 4 Players · EAC · ssriders |
| X-Men | 1992 | Beat 'em up | Player testing | [xmen](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/konami/d_xmen.cpp) · 4 Players · EBA · xmen |
| Mortal Kombat II | 1993 | Fighting | Player testing | [mk2](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/midway/d_tunit.cpp) · Revision L3.1 · mk2 |
| The Punisher | 1993 | Beat 'em up | Player testing | [punisher](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps1.cpp) · World · 930422 · punisher |
| NBA Jam Tournament Edition | 1994 | Sports | Player testing | [nbajamte](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/midway/d_tunit.cpp) · Revision 4.0 · 3/23/94 · nbajamte |
| Puzzle Bobble | 1994 | Puzzle | Player testing | [pbobble](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/taito/d_taitob.cpp) · Japan · original B-System · pbobble |
| Samurai Shodown II | 1994 | Fighting | Player testing | [samsho2](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · NGM-063 · original MVS · samsho2 |
| Windjammers | 1994 | Sports | Player testing | [wjammers](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · Original · MVS · wjammers |
| Metal Slug | 1996 | Run and gun | Player testing | [mslug](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · NGM-201 · original MVS · mslug |
| Dungeons & Dragons: Shadow over Mystara | 1996 | Beat 'em up | Player testing | [ddsom](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps2.cpp) · Europe · 960619 · ddsom |
| Neo Drift Out | 1996 | Racing | Player testing | [neodrift](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · New Technology · MVS · neodrift |
| Neo Turf Masters | 1996 | Sports | Player testing | [turfmast](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · Big Tournament Golf · MVS · turfmast |
| The King of Fighters '98 | 1998 | Fighting | Player testing | [kof98](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · NGM-2420 · original MVS · kof98 |
| Marvel vs. Capcom: Clash of Super Heroes | 1998 | Fighting | Player testing | [mvsc](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps2.cpp) · Europe · 980123 · mvsc |
| Street Fighter III: 3rd Strike | 1999 | Fighting | Player testing | [sfiii3](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/cps3/d_cps3.cpp) · Japan · 990608 · original NO CD · sfiii3n |
| Garou: Mark of the Wolves | 1999 | Fighting | Player testing | [garou](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · NGM-2530 · original MVS · garou |
| Street Fighter Alpha 2 | 1996 | Fighting | Player testing | [sfa2](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps2.cpp) · Europe · 960229 · sfa2 |
| Alien vs. Predator | 1994 | Beat em up | Player testing | [avsp](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps2.cpp) · Europe · 940520 · avsp |

### 2000s (9)

| Game | Year | Genre | Status / batch | Candidate set / source |
| --- | --- | --- | --- | --- |
| Metal Slug 3 | 2000 | Run and gun | Player testing | [mslug3](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · NGM-2560 · original MVS · mslug3 |
| Progear | 2001 | Shooter | Player testing | [progear](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps2.cpp) · USA · 010117 · progear |
| Puzz Loop 2 | 2001 | Puzzle | Player testing | [pzloop2](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/capcom/d_cps2.cpp) · Europe · 010302 · pzloop2 |
| The King of Fighters 2002 | 2002 | Fighting | Player testing | [kof2002](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · NGM-2650 · original MVS · kof2002 |
| DoDonPachi Dai-Ou-Jou / III | 2002 | Shooter | Player testing | [ddp3](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pgm/d_pgm.cpp) · World · 2002.05.15 Master Ver · ddp3 |
| Demon Front | 2002 | Run and gun | Player testing | [dmnfrnt](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pgm/d_pgm.cpp) · V105 · World · original PGM · dmnfrnt |
| Ketsui: Kizuna Jigoku Tachi | 2003 | Shooter | Player testing | [ket](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/pgm/d_pgm.cpp) · 2003/01/01 Master Ver · ket |
| Samurai Shodown V Special | 2004 | Fighting | Player testing | [samsh5sp](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/neogeo/d_neogeo.cpp) · NGM-2720 · original MVS · samsh5sp |
| Deathsmiles | 2007 | Shooter | Player testing | [deathsml](https://github.com/libretro/FBNeo/blob/a4012b161e48b33b94940f07987323574c237448/src/burn/drv/cave/d_cv1k.cpp) · 2007/10/09 Master Ver · original CV1000-B · deathsml |

Dates can differ from the year stored in emulator metadata. In particular, the current DAT lists older copyright years for Defender, Centipede and Ms. Pac-Man; the proposal retains their arcade release years. Cave dates [Ketsui to January 2003](https://www.cave.co.jp/business/ケツイ-～絆地獄たち～/), although the DAT has 2002. Its [Dai-Ou-Jou release page](https://www.cave.co.jp/business/怒首領蜂大往生/) records April 2002; the candidate World set has the international title DoDonPachi III and requires an explicit edition choice. [Deathsmiles was released in October 2007](https://www.cave.co.jp/business/デススマイルズ/).

## Implementation order

First prepare the library and controls, then add games in reviewable batches. Totals below are targets only; every failed admission reduces the actual total until fixed or replaced with another proven browser title.

| Stage | Additions | Target total | Purpose |
| --- | --- | --- | --- |
| Foundation | 0 | 8 | Keep the existing eight pinned; add era/genre/status/core metadata, landscape and portrait sizing, per-title controls and four local player profiles. |
| 1. Driving + landscape pilot | 7 | 15 | 1942, Strider, OutRun, Super Sprint, Super Hang-On, Double Dragon and Bubble Bobble. Prove landscape scaling, different steering types, multiple buttons and local co-op. |
| 2. Complete the 1980s room | 7 | 22 | Defender, Robotron, Joust, Q*bert, Gauntlet, Ghosts'n Goblins and Final Fight. Prove twin-stick input, diagonal movement, samples and four player slots. |
| 3. 1990s essentials | 10 | 32 | Street Fighter II, Mortal Kombat II, NBA Jam TE, The Simpsons, Turtles in Time, Sunset Riders, X-Men, Metal Slug, Puzzle Bobble and Raiden. |
| 4. 1990s depth | 10 | 42 | The remaining ten 1990s choices. Stress-test CPS-3 with 3rd Strike; finish Neo Geo, CPS-2, rally, golf and disc-sports coverage. |
| 5. 2000s arcade craft | 9 | 51 | Nine original 2D arcade releases. Benchmark PGM/Cave and the higher-demand 2007 Deathsmiles pilot; preserve intentional slowdown and verify regional revisions. |
| 6. Requested racers and missing essentials | 12 | 63 | Chase H.Q., APB, Golden Axe, R-Type, Gradius, Arkanoid, Marble Madness, Tetris, Shinobi, Street Fighter Alpha 2, Alien vs. Predator and Qix. |

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

Daytona USA, Sega Rally Championship, Manx TT Super Bike, Crazy Taxi, Ikaruga, Initial D Arcade Stage Ver.3, OutRun 2, The House of the Dead, Tekken 3, Tekken 5.1, Dance Dance Revolution Extreme.

These remain desirable rather than being declared impossible. We currently have no validated browser route for their original arcade editions. A standalone emulator's compatibility list is not evidence for a browser port. Sega identifies [Manx TT as Model 2](https://www.sega.jp/history/arcade/product/16013/) and [Initial D Ver.3 as NAOMI 2](https://www.sega.jp/history/arcade/product/8063/), so neither belongs in our current FBNeo batch.

A [third-party Flycast WASM project](https://github.com/nasomers/flycast-wasm) now documents a Dreamcast browser build and its required hosting headers. Its Dreamcast performance claims do not establish original NAOMI/NAOMI 2 arcade compatibility in our frontend. It is worth a bounded technical pilot later for Crazy Taxi or Ikaruga, using the original arcade edition and measuring actual play. It does not justify a console-port replacement or a promise about Model 2, Chihiro, System 256 or dance-cabinet titles.

## Alternative browser candidates

R-Type, Gradius, Arkanoid, Golden Axe, Teenage Mutant Ninja Turtles (1989), Street Fighter Alpha 2, DonPachi, Espgaluda. These are potential nostalgia-driven swaps, not extra launch commitments; check their exact drivers and browser behavior before using them. This proposal can remain below 50 while quality catches up. The browser-only requirement and original arcade behavior take precedence over the number.

## Deliverables from this research pass

- expansion-roster.json: curated 63-title roster, batch order, controls and per-title concerns.
- browser-roster-evidence.json: official DAT evidence, retrieval time, pinned source commit and metadata hash.
- ../dist/roadmap.html: searchable planning page, linked to the 63-cabinet playable catalogue.
- ../tools/research_browser_roster.py: reproducible metadata-only research; downloads no games or emulator binaries.
- ../tools/build_roadmap.mjs: validates counts and regenerates this document and planning data.

The 1980s implementation adds 14 original sets, Q*bert’s knocker sample, and per-title MAME 2003 Plus browser cores for Defender, Joust and Super Sprint. The original eight ROM hashes and FBNeo core remain unchanged. Legacy WASM compatibility files are bundled locally to avoid CDN fallback. Browser smoke checks cover boot, credits, start and actions; player testing still needs longer sessions, physical gamepads, stage transitions and endings. The 1990s expansion adds the approved 20 games, including six-button fighters, original Neo Geo arcade BIOS, four-player Konami games and the CPS-3 3rd Strike performance pilot. The final-decade expansion adds 9 validated cabinets, the original PGM BIOS and independent rotary controls for Puzz Loop 2. See PLAYER_TESTING.md for controls and VALIDATION.md for the measured browser behavior and its limits.
