# Validation · 2026-10-01

Tested locally in the Chromium-based Codex browser at 1280 × 900.

| Cabinet | Original boot / attract | Coin and 1P start | Gameplay observed |
| --- | --- | --- | --- |
| Pac-Man | Pass | Pass | Original maze, READY state, pellet score and game over |
| Space Invaders | Pass | Pass | Formation, shields, cannon, lives and original overlay colors |
| Galaga | Pass | Pass | Starfield, enemy formations, diving fighters and game over |
| Donkey Kong | Pass | Pass | Opening sequence, barrel stage, girders, ladders, Pauline and Mario |
| Frogger | Pass | Pass | Road traffic, river logs/turtles, frog movement and timer |
| Centipede | Pass | Pass | Mushroom field, centipede segments, player blaster and fire |
| Dig Dug | Pass | Pass | READY state, original soil layers, Pookas, Fygars and rocks |
| Ms. Pac-Man | Pass | Pass | Original standard-speed maze, ghosts, pellets and score |

The browser console confirmed that Galaga (230,484 bytes), Donkey Kong (14,940 bytes) and Space Invaders (163,649 bytes) sample archives were mounted after repairing EmulatorJS's external asset write. This verifies loading, not a laboratory comparison of audio waveforms against original hardware.

The original ROM bytes were not edited. Parent members were merged where necessary to allow standalone clone ZIP loading. ZIP member CRCs and final SHA-256 hashes are recorded in sources.json. Later levels and intermissions are executed by the original game code, but were not individually played through.

Additional checks: JavaScript syntax; 19 installed asset checksums; ZIP CRC integrity; 26 complete local HTTP asset responses; game selection and restart; help/about dialogs; pixel/scanline toggle; integer scaling and fullscreen entry/exit; responsive layout at 390 × 844. Centipede keyboard movement and fire produced visible movement and a score change. The local WebMCP cabinet selection and power controls also worked.

An original Pac-Man gameplay screenshot is saved at `screenshots/pacman.png`. Browser input is a substitute for original arcade switches and trackball hardware.

Final keyboard-focus check: clicking inside the game frame and tapping 5 produced CREDIT 1; tapping 1 entered the original Pac-Man PLAYER ONE / READY state. The shared keyboard bridge preserves very brief taps for at least two input polling frames and respects configured emulator key bindings.
# Expansion planning validation · 2026-10-01

- The browser-only proposal contains 50 unique set IDs: 8 existing and 42 candidates. Era counts are 1 heritage, 20 from the 1980s, 20 from the 1990s and 9 from the 2000s.
- All 50 set IDs were found with `driver status="good"` in the pinned official FBNeo DAT snapshot. This is upstream metadata evidence, not verification of browser gameplay or of the installed core's exact set requirements.
- The planning page was visually inspected in the browser. Era and genre filters produced the expected three 1980s racers; batch 1 produced its six candidates; searching OutRun produced one row and its correct candidate edition/control description. The 2000s filter produced nine candidates, and the playable filter produced the existing eight.
- Syntax checks passed for the existing arcade scripts, the roadmap scripts, the server and the planning generator. The generator verified unique set IDs, upstream driver status and batch counts of 6, 7, 10, 10 and 9.
- `verify_assets.py` verified 19 installed runtime, ROM and sample archives against the existing asset manifest. No new game assets or native runtimes were added in this planning pass.
- `screenshots/expansion-plan.jpg` is an actual browser capture of the planning page. The playable catalogue remains eight cabinets. Deathsmiles is explicitly marked as a higher-demand browser benchmark.

# 1980s player-testing release · 2026-10-02

The playable catalogue now contains **22 cabinets**. The 14 additions complete the selected 1980s roster, including the requested **1942 (Revision B)**. Later decades remain planned; no 1990s or 2000s sets were added.

| Added cabinet | Browser core | Boot / credit / start | Initial play and original audio |
| --- | --- | --- | --- |
| 1942 | FBNeo | Pass | Fighter movement, fire and loop; original campaign screen |
| Strider | FBNeo | Pass | Opening scene and first stage |
| OutRun | FBNeo | Pass | Music/start sequence, acceleration and racing |
| Super Sprint | MAME 2003 Plus | Pass | Track selection, pedals and three-player racing |
| Super Hang-On | FBNeo | Pass | Course/music selection, acceleration and racing |
| Double Dragon | FBNeo | Pass | First stage, two players and three-button profile |
| Bubble Bobble | FBNeo | Pass | Original opening, first round and two players |
| Defender | MAME 2003 Plus | Pass | Original game screen and five-button profile |
| Robotron: 2084 | FBNeo | Pass | First wave; independent movement and diagonal firing |
| Joust | MAME 2003 Plus | Pass | Original platforms, flap and two simultaneous riders |
| Q*bert | FBNeo | Pass | Four hops, changed cubes, score and mounted knocker sample |
| Gauntlet | FBNeo | Pass | Four independent coin/start slots; all four characters in the dungeon |
| Ghosts’n Goblins | FBNeo | Pass | Original World set 2 graveyard stage, movement and action profile |
| Final Fight | FBNeo | Pass | Character/first-stage sequence, movement and attacks |

These are **player-testing checks**, not completion of the full fidelity admission checklist. The original game software supplies later scenes, but every stage, continue, intermission and ending has not been individually reached. Physical gamepads, long-session pacing, analog steering feel and audio latency still need player testing. The audio check records nonzero original sound buffers; it is not a waveform comparison with original hardware.

## Evidence and regression checks

- `docs/1980s-browser-checks.json` and the per-game `1980s-*-check.json` files record 14 clean browser runs. All external requests were blocked; games loaded from loopback-served local assets. No JavaScript errors were recorded in the final runs. All 14 produced nonzero audio buffers.
- `docs/original-eight-regression.json` records successful ready/coin/start/control checks for all eight existing cabinets with external requests blocked and no JavaScript errors or failed requests.
- `docs/1980s-ui-checks.json` records 22-cabinet search, 1942's loop input from both outer-page and game-frame focus, fullscreen entry/exit, help/CRT controls, a 390 × 844 layout without horizontal overflow, and the roadmap's 51-row / 22-installed filters.
- `docs/1980s-multiplayer-checks.json` and control screenshots record cooperative player slots, three Super Sprint pedals, four Gauntlet characters, independent Robotron firing and Q*bert's diagonal hops.
- `screenshots/1980s/` contains actual browser captures of attract/play screens, cooperative controls and the updated cabinet/roadmap UI. `1942-cabinet.png` shows the requested game inside the arcade.
- `verify_assets.py` verifies **38** installed runtime, ROM and sample assets, including their SHA-256 and ZIP integrity. Original eight ROMs, samples and the FBNeo core remain pinned.

## Compatibility work completed

Super Sprint is newer than the installed FBNeo driver's support window, so it uses the separate MAME browser core. Defender and Joust's clean boot states did not work reliably in this FBNeo build; their original sets pass in MAME 2003 Plus. Robotron's original factory-default acknowledgement is automated only when there is no saved NVRAM; existing saves are preserved.

Double Dragon's original World set 1 is named `ddragon` by the shipped core, whereas its initial source used the MAME clone name `ddragonw`. Gauntlet's first source had a different character-ROM CRC. Both were replaced with matching, unchanged original sets, with URLs and member CRCs recorded in `sources.json`. Gauntlet's Magic button also serves as Start; numeric and cabinet-side Start controls are aliases for that original input.

Both WASM and legacy-WASM core files are bundled locally, preventing a CDN fallback. The optional EmulatorJS update lookup reads the pinned local version file. The existing audio-archive compatibility repair remains in place. Neither repair changes original game code or CPU timing; no forced 60 Hz, overclock, speed hack or console substitution was added.

Ghosts’n Goblins also waits for its original startup sequence before announcing CABINET ON; fresh-session credits and Start were checked after this delay.

Ghosts’n Goblins uses the World set 2 original ROM revision (gnga), bundled with its unchanged parent chips. Its original kidnapping introduction precedes the playable graveyard stage.


# 1990s player-testing release · 2026-10-02

All **20 approved 1990s cabinets** are installed, bringing the arcade to **42 playable games**. Positive player feedback subsequently authorized the final nine 2000s titles documented below. Each addition runs original arcade software in the pinned, locally bundled FBNeo browser core. The local Neo Geo BIOS is the original English MVS Asia/Europe revision; no AES or UniBIOS edition is bundled.

| Added cabinet | Browser boot / native display / original audio | Gameplay and player checks |
| --- | --- | --- |
| Raiden | Pass | Original portrait shooter; red/blue two-player ships, fire and bomb |
| Street Fighter II: The World Warrior | Pass | Original Ryu/Chun-Li versus fight and six-button profile |
| Sunset Riders | Pass | Four bounty hunters in the scrolling first stage; shoot and jump |
| TMNT: Turtles in Time | Pass | Four turtles on the Big Apple rooftop; attack and jump |
| The Simpsons | Pass | Four fixed Simpson characters in live Springfield play |
| X-Men | Pass | Original ROM self-test, character selection and four active heroes; mutant power |
| Mortal Kombat II | Pass | Original factory acknowledgement and two-credit entry; Liu Kang/Reptile fight and five-button profile |
| The Punisher | Pass | Original Frank Castle/Nick Fury two-player combat; attack and jump |
| NBA Jam Tournament Edition | Pass | Initials/birthday/team menus; four human players after original quarter-boundary challenger flow; all actions and P4 numpad directions |
| Puzzle Bobble | Pass | Original Japan B-System version; Japanese mode menu and two live versus boards with both launch buttons |
| Samurai Shodown II | Pass | Original one-player round and two-player challenger fight; four-button profile |
| Windjammers | Pass | Original live two-player court and throw/slide/lob controls |
| Dungeons & Dragons: Shadow over Mystara | Pass | Original introduction, four active heroes with separate health HUDs and all sixteen player action inputs |
| Metal Slug | Pass | Original mission 1 with Marco/Tarma, jump and grenades |
| Neo Drift Out | Pass | Original practice track, digital steering, acceleration and brake/reverse |
| Neo Turf Masters | Pass | Original shot power/height controls; P2 entry, both golfers and course selection; full alternating round remains player testing |
| Marvel vs. Capcom | Pass | Original two-credit entry, human versus teams and all six actions for both players |
| The King of Fighters ’98 | Pass | Original Advanced team fight and human challenger fight; four actions |
| Garou: Mark of the Wolves | Pass | Original Rock Howard/Terry challenger fight; four actions |
| Street Fighter III: 3rd Strike | Pass | Original Japan 990608 NO CD arcade set, Alex/Ryu human versus and six actions for both players |

These checks cover initial gameplay, original menus, credits, player entry, keyboard actions, nonzero sound buffers and local loading. Every later stage, continue, intermission and ending has not been played through. Physical gamepad models, expert combo timing, full alternating golf rounds and long-session frame/audio pacing remain player testing. Nonzero audio proves the emulated sound path is active; it is not a waveform comparison against physical boards.

## Browser evidence

The release index is [docs/1990s-browser-checks.json](docs/1990s-browser-checks.json), which records 20 additions, 42 playable cabinets, nine paused candidates and links the primary, UI, multiplayer, regression, asset and syntax checks.

- `docs/1990s-capcom-taito-checks.json`, `docs/1990s-konami-midway-checks.json` and `docs/1990s-neogeo-checks.json` contain 20 successful boots, native framebuffer dimensions and nonzero original audio. Their final runs recorded no JavaScript errors, failed local HTTP responses or external asset requests. Raiden’s core framebuffer is 256 × 224 before its original portrait rotation; the arcade presents 224 × 256.
- `docs/1990s-konami-midway-checks.json` and `screenshots/1990s/` show all four characters active in The Simpsons, Turtles in Time, Sunset Riders and X-Men. NBA Jam TE’s `nbajamte-four-player-live.png` shows four Turbo HUDs and the original colored player 1–4 markers after a quarter transition. All configured actions and fourth-player numpad directions were delivered.
- `docs/1990s-cps-versus-checks.json` records genuine human versus matches in Marvel vs. Capcom and 3rd Strike, all twelve named punch/kick inputs per game, matching input-down/input-up events and individual action screenshots. The installed Capcom action order is light/medium/heavy punch followed by light/medium/heavy kick. Mortal Kombat II retains its separate high-punch/block/high-kick/low-punch/low-kick order.
- `docs/1990s-pbobble-versus-checks.json` records the original Japanese menu’s lower versus choice, two independent boards and both launch keys. The original default upper choice is solo; Down then Ctrl selects versus.
- `docs/1990s-neogeo-controls-checks.json` and `docs/1990s-neogeo-fighting-controls-checks.json` record MVS mode, Neo Drift Out’s digital pedals and steering, Windjammers controls, golf’s P2 newcomer and golfer/course selection, plus both-player fighting controls. The golf report explicitly leaves full two-player rounds unverified.
- `docs/original-eight-regression.json` was rerun after the shared controls expansion: all eight original cabinets reached readiness, accepted credits/start and received control checks with no JavaScript errors or failed requests.
- `docs/1990s-ui-checks.json` passed the 42-cabinet library, search, full six-action labels, sixth actions for both players with outer-page and game-frame focus, fullscreen, CRT controls and a 390 × 844 layout without horizontal overflow. The 51-row roadmap returned 42 installed cabinets and all 20 1990s titles. The expanded profiles had no duplicate keys. With Num Lock off, physical Numpad 0/decimal/2/4 produced raw Insert (45), Delete (46), Down (40) and Left (37) events and delivered only the correct P4 attack/jump/down/left inputs from both outer-page and game-frame focus. Custom remaps were respected: the old physical numpad binding stayed inactive and each replacement key delivered its action. Unmatched numpad navigation did not fall through to P1 arrows or numeric Start; ordinary Digit 2 retained Turtles in Time’s original Attack/start alias. No JavaScript errors were recorded.

## Original settings and compatibility

Mortal Kombat II and NBA Jam TE wait for their original power-on factory-default message before accepting credits. The arcade acknowledges that message only when no saved NVRAM exists; existing saves retain their settings. Their original factory entry takes two credits. Marvel vs. Capcom’s original counter also requires two coins to start, and both original coin inputs work. X-Men waits through its original ROM self-test before CABINET ON is shown.

Shadow over Mystara’s factory cabinet configuration is two-player. Its bundled **128-byte EEPROM default** was generated by selecting **4 PLAYERS 4 CHUTES MULTI** in the original Europe 960619 operator menu and exporting the resulting device bytes. The manifest records SHA-256 `691da7b5905f28eda4c497e150048e4c6212e3dc8c9517b7504ec996259fdaec`. Initialization occurs after saved files load and only when the game’s native `.nv` file is absent. `docs/1990s-capcom-taito-ddsom-four-players-checks.json` confirms the original device reads the seeded native path, an existing save remains unchanged on a second boot and reseeding is skipped. `screenshots/1990s/ddsom-4p-active-play.png` confirms all four original health HUDs and four active heroes fighting a goblin: P1/P2 fighters and P3/P4 clerics. The final report passed all sixteen action inputs with both down/up events, every coin/start slot and no missing inputs. P4 attack and jump also have dedicated live screenshots with Num Lock off. Starting from attract mode requires allowing the original title transition after the first coin, and extra players were joined after the original introduction finished.

The original Japan 990608 NO CD version of 3rd Strike includes its unchanged parent SIMM chips in the local ZIP. The latest 30-second benchmark in `docs/1990s-capcom-taito-checks.json` recorded **1,801 frontend loop ticks in 30.0119 seconds (60.0095 ticks/s)** with **30.0176 seconds of generated audio**. The wrapper calls `get_current_frame_count`, which the official [EmulatorJS RetroArch source](https://github.com/EmulatorJS/RetroArch/blob/v1.22.2/retroarch.c) defines as the frontend main-loop counter; this does not directly measure native board frames or establish exact physical-board refresh. This is a local browser observation, not a guarantee on every device. No CPU overclock, forced 60 Hz, ROM patch or console substitution was used.

Final `tools/verify_assets.py` verification passed for **60 runtime, ROM, BIOS, sampled-effect and cabinet-default assets**, including their SHA-256 hashes and archive integrity. The original eight ROMs, sample archives and FBNeo core remain pinned. The final expanded UI checks and all six release JavaScript syntax checks passed.


# 2000s player-testing release · 2026-10-02

All **nine approved 2000s original arcade titles** are installed, completing the **51-cabinet** roster after the requested 1942 addition. The user reported positive player testing of the 1990s room before authorizing this expansion. All nine new games have clean local browser boots, nonzero original audio, original menu entry and genuine two-player gameplay evidence. Individual action inputs were pressed and released for both players.

| Added cabinet | Exact installed edition | Browser and player checks |
| --- | --- | --- |
| Metal Slug 3 | NGM-2560 original MVS | Original mission and both player HUDs; fire/knife, jump and grenade |
| Progear | USA 010117 CPS-2 | Original two-credit pricing, both pilots/gunners, live combat, shot/gunner mode, bomb and auto shot |
| Puzz Loop 2 | Europe 010302 CPS-2 | Original Stage/Panic/Power/VS carousel; two human VS boards; independent P1/P2 rotary directions and launches |
| DoDonPachi III | World 2002.05.15 Master Ver | Original ship/Element Doll selection; two live ships; shot/laser, bomb and auto shot |
| Demon Front | World V105, M105XX 08/05/02 PGM | Original boot/character menus; two live heroes/pets; fire/charge, jump/glide and both shields |
| The King of Fighters 2002 | NGM-2650 original MVS | Original three-fighter selection/order and genuine challenger fight; all four actions per player |
| Ketsui: Kizuna Jigoku Tachi | 2003/01/01 Master Ver | Original helicopter selection and two live helicopters; shot/lock-on, bomb and auto shot |
| Samurai Shodown V Special | NGM-2720 original MVS | Original challenger fight; both players' slash, kick and meditate/evade inputs |
| Deathsmiles | 2007/10/09 Master Ver CV1000-B | Original Windia/Casper selection, stage menus and both live HUDs; both shot directions and bombs |

## Evidence and original dependencies

`docs/2000s-capcom-checks.json`, `docs/2000s-neo-pgm-checks.json` and `docs/2000s-cave-checks.json` contain the nine successful original-set runs, native framebuffer dimensions, original sound buffers and screenshots. Final primary runs recorded no JavaScript errors, failed local HTTP responses or external asset requests. `docs/2000s-neo-pgm-controls-checks.json` records both-player animations and matching action-down/action-up events. `docs/2000s-progear-pricing-checks.json` checks each original coin slot independently: one coin leaves INSERT 1 MORE COIN, and two starts that player's pilot selection. Continue pricing is not claimed. `docs/2000s-progear-p2-controls-checks.json` additionally confirms P2-only Bolt play and its original bomb reducing the HUD stock from three to two. `screenshots/2000s/` holds the actual menu, gameplay and individual-control captures.

The three Neo Geo additions retain the original MVS Europe/Asia BIOS. Demon Front mounts the local original six-chip `pgm.zip` at `/system/fbneo/pgm.zip`. `docs/2000s-pgm-bios-source.json` records original PGM tile/sample ROMs, older/newer BIOS revisions, the unchanged custom board BIOS chips, CRCs and installed hash; no modified no-intro BIOS is included. Its selected World V105 game, ARM program/protection and original BIOS dependencies match the pinned driver. DoDonPachi III and Ketsui package their required unchanged original board BIOS chips inside their standalone ZIPs. Undumped ARM protection is simulated by the normal FBNeo driver where required. The protected Neo Geo releases use the original driver/device emulation and unchanged cartridge chips.

Puzz Loop 2 required independent rotary mappings for the original dials. P1 Left/Right and P2 J/L feed their respective negative/positive analog channels; Ctrl/A launch. The original menus and VS rounds were reached through ordinary cabinet inputs. The original How to Play screen completes before the round starts. Progear's USA edition requires two coins per player. Deathsmiles completes roughly 35 seconds of original startup before accepting coins, so its cabinet announces readiness after 42 seconds. Existing game ROM/core assets remain pinned; the 2000s expansion adds original sets and their required dependencies.

## Playback timing: what the measurements establish

The browser wrapper's `getFrameNum()` calls `get_current_frame_count()`, which returns `emscripten_frame_count`. The official [EmulatorJS RetroArch source](https://github.com/EmulatorJS/RetroArch/blob/v1.22.2/retroarch.c) increments this counter once per frontend main-loop iteration before core runloop logic. It is a **frontend loop counter**, and measurements around 60 ticks/s do not establish exact native rendered-frame or physical-board timing. The earlier 3rd Strike result above is interpreted on this basis. Native board/framebuffer metadata and driver refresh references are recorded separately.

Generated original PCM duration was also measured against wall time. Original-audio intervals covered roughly 50 seconds for each Cave game, 46 seconds for Demon Front, 15 seconds for each Neo Geo addition and 10 seconds for each Capcom game. Those intervals support healthy local playback and active original sound; they are not complete-campaign or hardware waveform comparisons.

| Game | Measured wall seconds | Generated audio seconds | Measured frontend ticks/s |
| --- | --- | --- | --- |
| Metal Slug 3 | 15.268 | 15.267 | 59.993 |
| The King of Fighters 2002 | 15.286 | 15.302 | 60.053 |
| Samurai Shodown V Special | 15.284 | 15.285 | 59.997 |
| Demon Front | 45.865 | 45.865 | 60.002 |
| Progear | 10.005 | 10.002 | 59.969 |
| Puzz Loop 2 | 10.015 | 10.002 | 59.908 |
| DoDonPachi III | 49.900 | 49.900 | 59.960 |
| Ketsui | 49.870 | 49.871 | 59.996 |
| Deathsmiles | 49.926 | 49.935 | 60.008 |

`docs/2000s-neo-pgm-timing-checks.json` and the primary/focused reports record the measurements. The official PGM driver selects 59.185606 Hz; the CV1000 driver uses a 60 Hz reference. The wrapper does not directly expose exact native rendered-frame counts, so those references are not equated with frontend ticks.

The new sets keep CPU speed at 100%, forced 60 Hz disabled and frame skipping disabled. Original ROM bytes, normal driver timing and default driver optimizations remain unchanged. Default CV1000 Speed Hacks is On; it is the core's ordinary optimization, with no custom overclock or extra speed hack introduced by the arcade.

## Deathsmiles' active blitter timing model

The installed core reports **Blitter Timing = Accurate (Buffis)**, **Blitter Delay = Off**, CPU 100% plus .0 tenth-percent adjustment, Busy Sleep On, Clip Margin 32, Thread Blitter On and Thread Sync Before Draw. `docs/2000s-cave-blitter-evidence.json` records these actual options and their source analysis.

The Off delay slider belongs to the legacy Antiquity method. In the selected accurate method, the official [EPIC12 implementation](https://github.com/libretro/FBNeo/blob/c8c70ba4858458c44b7200b88a29ebbb48c9bb23/src/burn/devices/epic12.cpp) calculates SRAM/VRAM operation delays and horizontal-line fetch contention, sets the blitter busy and schedules the SH3 delay timer from the calculated duration. The active accurate busy-delay model remains enabled with that legacy slider Off. No arbitrary CPU or delay tuning was used to guess at a physical PCB match. Matching every intentional slowdown, expert dodge/combination timing and audio latency against a physical board remains unverified.

## Final integration status

The nine primary game/player/audio checks passed. `docs/2000s-ui-checks.json` passed the 51-cabinet library, all nine new era rows, search, mobile layout and independent Puzz Loop 2 rotary/launch inputs with both outer-page and game-frame focus. There were no stale digital aliases, key collisions, JavaScript errors, failed HTTP responses or external requests.

`tools/verify_assets.py` passed all **70 installed runtime, ROM, BIOS, sample and cabinet-default assets** with SHA-256 and ZIP integrity checks. Seven release JavaScript syntax checks passed. `docs/2000s-baseline-checks.json` confirms all 42 existing ROM hashes, catalogue entries and runtime records remain unchanged. `docs/2000s-existing-regression.json` passed final Pac-Man and existing Metal Slug readiness, Coin/Start and control checks with no errors. Metal Slug retained the same original 68,232-byte MVS BIOS at its existing virtual path. The completed release index is [docs/2000s-browser-checks.json](docs/2000s-browser-checks.json): nine additions, 51 playable cabinets, all nine genuine two-human game modes and all final integration gates passed.

Full campaigns, branching paths, loops, late bosses, all continue/ending scenes, physical gamepads and long sessions remain for player testing. Original software supplies those scenes; this release does not claim they have all been individually reached or that every physical hardware behavior has been certified.
