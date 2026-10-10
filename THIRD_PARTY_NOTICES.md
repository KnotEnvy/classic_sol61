# Licensing and third-party notices

The root MIT license covers the project's original arcade interface, controls,
configuration, deployment code and original documentation. It does not relicense
third-party software, fonts, game ROMs, BIOS images or sampled game audio.

## Game assets

The project owner confirmed on October 9, 2026 that they hold redistribution
licenses for the games being hosted, and expressly confirmed coverage for the additional twelve cabinets (including Shinobi and Qix) on the same date. This publication relies on that confirmation;
it is not an independent audit of the owner's license agreements. Those agreements
are not published here. The original games, BIOS images, graphics and sounds remain
copyright their respective holders. Inclusion does not grant downstream MIT rights
to those assets. Asset identities and hashes are recorded in `sources.json`.

## EmulatorJS 4.2.3

GPL-3.0: `licenses/EmulatorJS-GPL-3.0.txt`.
Editable matching release source, including this project's two runtime repairs,
is in `third_party/EmulatorJS/`. Original source:
https://github.com/EmulatorJS/EmulatorJS/tree/v4.2.3

The fixes normalize externally loaded ArrayBuffers to Uint8Arrays and use the
locally pinned version file. `tools/patch_emulator.py` records the distributed
runtime transformations. The modified runtime and upstream source retain GPL terms.

## Browser emulator cores

FinalBurn Neo: `licenses/FinalBurn-Neo.txt`.
Source: https://github.com/libretro/FBNeo
Its noncommercial and other restrictions remain applicable; an MIT label on our
interface does not override them.

MAME 2003 Plus: `licenses/MAME-2003-Plus-LICENSE.md`.
Source: https://github.com/libretro/mame2003-plus-libretro

RetroArch browser wrapper/build sources:
https://github.com/EmulatorJS/RetroArch
https://github.com/EmulatorJS/build

Core build reports are included under `dist/emulator/cores/reports/`. The binary
builds are pinned by SHA-256 in `sources.json`; source/licensing terms remain those
of the respective upstream projects and their components.

## Fonts

Barlow Condensed, DM Sans and Space Mono are under SIL Open Font License 1.1.
See their complete notices in `licenses/`.
