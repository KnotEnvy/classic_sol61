/* Original arcade sets. No speed hacks or console ports. */
window.ARCADE_GAMES = [
 {id:'pacman',name:'Pac-Man',year:1980,maker:'NAMCO / MIDWAY',developer:'Namco',version:'Midway · US',rom:'pacman.zip',parent:'puckman.zip',token:'PM',color:'#f4d34d',size:[224,288],move:'Move through<br>the maze',objective:'Eat every dot. Turn the tables on the ghosts with a power pellet, collect the fruit, and keep moving.',notes:'Blinky, Pinky, Inky, and Clyde each have their original behaviors. The three animated intermissions play at their original level milestones.'},
 {id:'invaders',name:'Space Invaders',year:1978,maker:'TAITO / MIDWAY',developer:'Taito',version:'Original · Midway',rom:'invaders.zip',token:'SI',color:'#a9d28f',size:[224,256],move:'Move the<br>laser cannon',action:'Fire',objective:'Stop the invasion before it reaches the ground. Use your shields, watch for the mystery ship, and clear the formation.',notes:'The original monochrome cabinet. The formation speeds up as invaders are destroyed. The cannon has one shot on screen at a time.'},
 {id:'galaga',name:'Galaga',year:1981,maker:'NAMCO',developer:'Namco',version:'Namco · original',rom:'galagao.zip',parent:'galaga.zip',token:'GA',color:'#aab5ff',size:[224,288],move:'Move the<br>fighter',action:'Fire',objective:'Defend against diving formations. Rescue a captured fighter for double firepower, then take on the challenging stages.',notes:'Original boss tractor beams, captured fighters, double-fighter rescue, and challenging stages. Two player mode alternates turns.'},
 {id:'dkong',name:'Donkey Kong',year:1981,maker:'NINTENDO',developer:'Nintendo',version:'US · set 1',rom:'dkong.zip',token:'DK',color:'#f19975',size:[224,256],move:'Walk and<br>climb ladders',action:'Jump',objective:'Climb to Pauline. Jump rolling barrels, time the elevators, cross the conveyor belts, and remove the rivets.',notes:'The original US arcade level order is preserved. All four stage types, opening animation, hammer power-ups, bonus timer, and ending are supplied by the original game.'},
 {id:'frogger',name:'Frogger',year:1981,maker:'KONAMI / SEGA',developer:'Konami',version:'Original · Sega',rom:'frogger.zip',token:'FG',color:'#8cd7aa',size:[224,256],move:'Hop in<br>four directions',objective:'Cross the road and the river. Ride the logs and turtles, dodge traffic, and guide a frog into each of the five homes.',notes:'Original traffic and river patterns, submerging turtles, time bonus, and home bonuses. The game uses a four-way joystick and no action button.'},
 {id:'centiped',name:'Centipede',year:1981,maker:'ATARI',developer:'Atari',version:'Revision 4',rom:'centiped.zip',token:'CE',color:'#e799e1',size:[240,256],move:'Move the<br>bug blaster',action:'Fire',mouse:true,objective:'Shoot the centipede before it reaches you. Clear mushrooms and stay alert for spiders, fleas, and scorpions.',notes:'Use the mouse as a trackball, or the arrow keys. Destroyed segments become mushrooms and split the centipede. Each new wave uses the original palette changes.'},
 {id:'digdug',name:'Dig Dug',year:1982,maker:'NAMCO',developer:'Namco',version:'Revision 2',rom:'digdug.zip',token:'DD',color:'#91cbe8',size:[224,288],move:'Dig in<br>four directions',action:'Pump',objective:'Dig tunnels, pump up Pookas and Fygars, and drop rocks on your enemies. Clear the underground to reach the next round.',notes:'Original enemy ghosting, Fygar flames, rock falls, depth-based scores, and vegetable bonuses. The walking tune stops when you stop digging.'},
 {id:'mspacman',name:'Ms. Pac-Man',year:1982,maker:'MIDWAY / GCC',developer:'GCC / Midway',version:'Original · standard speed',rom:'mspacman.zip',token:'MS',color:'#f5a6ba',size:[224,288],move:'Move through<br>the maze',objective:'Clear four changing mazes, chase the bouncing fruit, and outwit the ghosts. Power pellets still make the hunter the hunted.',notes:'The unmodified standard-speed arcade game. All four mazes and the three story intermissions—They Meet, The Chase, and Junior—remain in the original software.'}
];

// Approved 1980s expansion, with original cabinet revisions.
window.ARCADE_GAMES.push(...[
  {
    "id": "1942",
    "name": "1942",
    "year": 1984,
    "maker": "CAPCOM",
    "developer": "Capcom",
    "version": "Revision B",
    "rom": "1942.zip",
    "token": "42",
    "color": "#f3ca77",
    "size": [
      224,
      256
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Fire",
      "Loop"
    ],
    "action": "Fire",
    "objective": "Fly through the Pacific campaign. Clear the formations, collect power-ups, and use a limited loop to dodge danger.",
    "notes": "Original 32-stage arcade campaign. Ctrl fires; Z performs a loop.",
    "players": 2,
    "coop": false,
    "bootDelay": 4000
  },
  {
    "id": "strider",
    "name": "Strider",
    "year": 1989,
    "maker": "CAPCOM",
    "developer": "Capcom",
    "version": "US · set 1",
    "rom": "strider.zip",
    "token": "S",
    "color": "#98bcea",
    "size": [
      384,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Attack",
      "Jump"
    ],
    "action": "Attack",
    "objective": "Scale walls, leap across rooftops, and cut through enemies with Hiryu’s plasma sword.",
    "notes": "Original CPS-1 arcade release, with its five stages and cinematic sequences.",
    "players": 2,
    "coop": false,
    "bootDelay": 4000
  },
  {
    "id": "outrun",
    "name": "OutRun",
    "year": 1986,
    "maker": "SEGA",
    "developer": "Sega",
    "version": "Sitdown/upright · revision B",
    "rom": "outrun.zip",
    "token": "O",
    "color": "#ee998f",
    "size": [
      320,
      224
    ],
    "move": "Steer left<br>and right",
    "actions": [
      "Accelerate",
      "Brake",
      "Gear"
    ],
    "action": "Accelerate",
    "objective": "Choose your music and race through branching roads to one of five destinations.",
    "notes": "Left/right steer. Ctrl accelerates, Z brakes, X changes low/high gear. Original steering is analog; keyboard steering is a substitute.",
    "players": 1,
    "coop": false,
    "bootDelay": 4000
  },
  {
    "id": "ssprint",
    "name": "Super Sprint",
    "year": 1986,
    "maker": "ATARI",
    "developer": "Atari",
    "version": "Revision 4 · MAME 2003 Plus",
    "rom": "ssprint.zip",
    "token": "SS",
    "color": "#b6d882",
    "size": [
      512,
      384
    ],
    "move": "Steer left<br>and right",
    "actions": [
      "Accelerate"
    ],
    "action": "Accelerate",
    "objective": "Race around eight tracks, collect wrenches, and upgrade your car.",
    "notes": "Free-spinning wheel cabinet: hold left/right to turn, Ctrl to accelerate. Three simultaneous player slots. Runs in a separate browser MAME core.",
    "players": 3,
    "coop": true,
    "bootDelay": 4000,
    "core": "mame2003_plus"
  },
  {
    "id": "shangon",
    "name": "Super Hang-On",
    "year": 1987,
    "maker": "SEGA",
    "developer": "Sega",
    "version": "Sitdown/upright · unprotected",
    "rom": "shangon.zip",
    "token": "SH",
    "color": "#9ccebf",
    "size": [
      320,
      224
    ],
    "move": "Steer left<br>and right",
    "actions": [
      "Accelerate",
      "Brake",
      "Turbo"
    ],
    "action": "Accelerate",
    "objective": "Choose a continent and music track, lean into the corners, and beat the checkpoints.",
    "notes": "Original unprotected arcade revision. Left/right lean, Ctrl accelerates, Z brakes; hold X for turbo above the original speed threshold.",
    "players": 1,
    "coop": false,
    "bootDelay": 4000
  },
  {
    "id": "ddragon",
    "name": "Double Dragon",
    "year": 1987,
    "maker": "TECHNOS",
    "developer": "Technos",
    "version": "World · set 1",
    "rom": "ddragon.zip",
    "token": "DD",
    "color": "#dcb290",
    "size": [
      256,
      240
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Punch",
      "Kick",
      "Jump"
    ],
    "action": "Punch",
    "objective": "Fight through the city together as Billy and Jimmy Lee, rescuing Marian.",
    "notes": "Original three-button Technos arcade edition, with two-player cooperative play.",
    "players": 2,
    "coop": true,
    "bootDelay": 4000
  },
  {
    "id": "bublbobl",
    "name": "Bubble Bobble",
    "year": 1986,
    "maker": "TAITO",
    "developer": "Taito",
    "version": "Japan · version 0.1",
    "rom": "bublbobl.zip",
    "token": "BB",
    "color": "#98c69f",
    "size": [
      256,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Bubble",
      "Jump"
    ],
    "action": "Bubble",
    "objective": "Trap enemies in bubbles and pop them. Collect fruit and work together through the cave.",
    "notes": "Original 100-round arcade game. Cooperative play and its original ending conditions are preserved.",
    "players": 2,
    "coop": true,
    "bootDelay": 4000
  },
  {
    "id": "defender",
    "name": "Defender",
    "year": 1981,
    "maker": "WILLIAMS",
    "developer": "Williams",
    "version": "Red label",
    "rom": "defender.zip",
    "token": "D",
    "color": "#ce9fb4",
    "size": [
      292,
      240
    ],
    "move": "Move up<br>and down",
    "actions": [
      "Fire",
      "Smart bomb",
      "Hyperspace",
      "Thrust",
      "Reverse"
    ],
    "action": "Fire",
    "objective": "Rescue the humanoids and defend your planet against the alien waves.",
    "notes": "Up/down move vertically. Ctrl fires, Z uses a smart bomb, X hyperspace, C thrust, V reverse. Use C for thrust and V to reverse direction. Uses the locally bundled MAME 2003 Plus browser core.",
    "players": 2,
    "coop": false,
    "bootDelay": 20000,
    "core": "mame2003_plus"
  },
  {
    "id": "robotron",
    "name": "Robotron: 2084",
    "year": 1982,
    "maker": "WILLIAMS",
    "developer": "Williams",
    "version": "Blue label",
    "rom": "robotron.zip",
    "token": "R2",
    "color": "#c0c4f0",
    "size": [
      292,
      240
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Fire up",
      "Fire down",
      "Fire left",
      "Fire right"
    ],
    "action": "Fire up",
    "objective": "Save the last human family while destroying waves of robots.",
    "notes": "Two independent sticks: arrows move; I/J/K/L fire up/left/down/right. Hold two firing directions for diagonals. Alternating two-player cabinet.",
    "players": 2,
    "coop": false,
    "bootDelay": 12000
  },
  {
    "id": "joust",
    "name": "Joust",
    "year": 1982,
    "maker": "WILLIAMS",
    "developer": "Williams",
    "version": "Green label",
    "rom": "joust.zip",
    "token": "J",
    "color": "#ebc286",
    "size": [
      292,
      240
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Flap"
    ],
    "action": "Flap",
    "objective": "Flap to gain height and strike rival riders from above. Collect the eggs before they hatch.",
    "notes": "Two simultaneous riders. Player 2 uses J/L to move and A to flap. Uses the locally bundled MAME 2003 Plus browser core.",
    "players": 2,
    "coop": true,
    "bootDelay": 20000,
    "core": "mame2003_plus"
  },
  {
    "id": "qbert",
    "name": "Q*bert",
    "year": 1982,
    "maker": "GOTTLIEB",
    "developer": "Gottlieb",
    "version": "US · set 1",
    "rom": "qbert.zip",
    "token": "Q",
    "color": "#e4aa75",
    "size": [
      240,
      256
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [],
    "action": null,
    "objective": "Hop across the pyramid to change every cube to its target color. Escape Coily with the flying discs.",
    "notes": "Diagonal joystick: up hops up-right, right down-right, down down-left, left up-left. Original speech is synthesized; the knocker uses its original sample.",
    "players": 2,
    "coop": false,
    "bootDelay": 4000
  },
  {
    "id": "gauntlet",
    "name": "Gauntlet",
    "year": 1985,
    "maker": "ATARI",
    "developer": "Atari",
    "version": "Revision 14",
    "rom": "gauntlet.zip",
    "token": "G",
    "color": "#abcfb0",
    "size": [
      336,
      240
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Fire",
      "Magic"
    ],
    "action": "Fire",
    "objective": "Explore the dungeons as Warrior, Valkyrie, Wizard, or Elf. Share treasure, food, and keys.",
    "notes": "Four simultaneous players. Coins add health to each slot; press that player’s Start to join. Each slot uses the original fixed character. See multiplayer controls below.",
    "players": 4,
    "coop": true,
    "bootDelay": 12000
  },
  {
    "id": "gng",
    "name": "Ghosts’n Goblins",
    "year": 1985,
    "maker": "CAPCOM",
    "developer": "Capcom",
    "version": "World · set 2",
    "rom": "gnga.zip",
    "token": "GG",
    "color": "#b5b7e1",
    "size": [
      256,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Attack",
      "Jump"
    ],
    "action": "Attack",
    "objective": "Guide Arthur through the graveyard and demon realms to rescue the princess.",
    "notes": "Original arcade challenge, including the second journey required for the true ending.",
    "players": 2,
    "coop": false,
    "bootDelay": 20000
  },
  {
    "id": "ffight",
    "name": "Final Fight",
    "year": 1989,
    "maker": "CAPCOM",
    "developer": "Capcom",
    "version": "World · set 1",
    "rom": "ffight.zip",
    "token": "FF",
    "color": "#edaa91",
    "size": [
      384,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Attack",
      "Jump"
    ],
    "action": "Attack",
    "objective": "Choose Haggar, Cody, or Guy and take back Metro City from the Mad Gear gang.",
    "notes": "Original CPS-1 cooperative arcade release. Press attack and jump together for the special move, at the original health cost.",
    "players": 2,
    "coop": true,
    "bootDelay": 4000
  }
]);

/* 1990s arcade cabinets */
window.ARCADE_GAMES.push(...[
  {
    "id": "raiden",
    "name": "Raiden",
    "year": 1990,
    "maker": "SEIBU KAIHATSU",
    "developer": "Seibu Kaihatsu",
    "version": "World · set 1",
    "rom": "raiden.zip",
    "token": "RD",
    "color": "#97b9f0",
    "size": [
      224,
      256
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Fire",
      "Bomb"
    ],
    "action": "Fire",
    "players": 2,
    "coop": true,
    "objective": "Fly the original red or blue fighter, collect shot upgrades, and clear eight enemy-filled stages.",
    "notes": "Two simultaneous players. Ctrl fires; Z releases a limited bomb. For two-player play, insert two credits and press 2 at the title screen.",
    "bootDelay": 8000
  },
  {
    "id": "sf2",
    "name": "Street Fighter II: The World Warrior",
    "year": 1991,
    "maker": "CAPCOM",
    "developer": "Capcom",
    "version": "World · 910522",
    "rom": "sf2.zip",
    "token": "SF",
    "color": "#e5be85",
    "size": [
      384,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Light punch",
      "Medium punch",
      "Heavy punch",
      "Light kick",
      "Medium kick",
      "Heavy kick"
    ],
    "action": "Light punch",
    "players": 2,
    "coop": false,
    "objective": "Choose one of eight fighters and challenge the original World Warrior tournament.",
    "notes": "Original World Warrior arcade edition. Six buttons: Ctrl/Z/X punch; C/V/B kick. Player 2 joins with a separate coin and Start. On the original selection screen, confirm fighters with a punch; wait for the first player selection before pressing the other Start to join.",
    "bootDelay": 8000,
    "actionInputs": [
      1,
      9,
      10,
      0,
      8,
      11
    ]
  },
  {
    "id": "ssriders",
    "name": "Sunset Riders",
    "year": 1991,
    "maker": "KONAMI",
    "developer": "Konami",
    "version": "4 Players · EAC",
    "rom": "ssriders.zip",
    "token": "SR",
    "color": "#e9b98b",
    "size": [
      288,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Shoot",
      "Jump"
    ],
    "action": "Shoot",
    "objective": "Ride out as Steve, Billy, Bob, and Cormano to collect the outlaws’ bounties.",
    "notes": "Original four-player arcade revision. Coin plus Shoot joins each fixed character; Start performs that same join action. Down plus Jump slides.",
    "players": 4,
    "coop": true,
    "bootDelay": 8000,
    "startButton": 0
  },
  {
    "id": "tmnt2",
    "name": "TMNT: Turtles in Time",
    "year": 1991,
    "maker": "KONAMI",
    "developer": "Konami",
    "version": "4 Players · UAA",
    "rom": "tmnt2.zip",
    "token": "TT",
    "color": "#8ed19b",
    "size": [
      288,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Attack",
      "Jump"
    ],
    "action": "Attack",
    "objective": "Battle through New York and the time portals as Leonardo, Michelangelo, Donatello, and Raphael.",
    "notes": "Original four-player arcade edition. Each coin slot joins its fixed turtle; press Attack after inserting a coin. The Start buttons perform that original join action.",
    "players": 4,
    "coop": true,
    "bootDelay": 8000,
    "startButton": 0
  },
  {
    "id": "simpsons",
    "name": "The Simpsons",
    "year": 1991,
    "maker": "KONAMI",
    "developer": "Konami",
    "version": "4 Players · World set 1",
    "rom": "simpsons.zip",
    "token": "TS",
    "color": "#f3d765",
    "size": [
      288,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Attack",
      "Jump"
    ],
    "action": "Attack",
    "objective": "Join Homer, Marge, Bart, and Lisa in the fight to rescue Maggie from Smithers and Mr. Burns.",
    "notes": "Original four-player GX072 arcade release. Player slots are Marge, Homer, Bart, and Lisa; each uses its own coin and Start.",
    "players": 4,
    "coop": true,
    "bootDelay": 8000
  },
  {
    "id": "xmen",
    "name": "X-Men",
    "year": 1992,
    "maker": "KONAMI",
    "developer": "Konami",
    "version": "4 Players · EBA",
    "rom": "xmen.zip",
    "token": "XM",
    "color": "#aab4e9",
    "size": [
      288,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Attack",
      "Jump",
      "Mutant power"
    ],
    "action": "Attack",
    "objective": "Choose an X-Man and fight Magneto’s Sentinel army alongside three friends.",
    "notes": "Original single-screen four-player cabinet, with all six selectable heroes. Mutant power retains the original health cost and stock rules.",
    "players": 4,
    "coop": true,
    "bootDelay": 30000
  },
  {
    "id": "mk2",
    "name": "Mortal Kombat II",
    "year": 1993,
    "maker": "MIDWAY",
    "developer": "Midway",
    "version": "Revision L3.1",
    "rom": "mk2.zip",
    "token": "MK",
    "color": "#de9893",
    "size": [
      400,
      254
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "High punch",
      "Block",
      "High kick",
      "Low punch",
      "Low kick"
    ],
    "action": "High punch",
    "objective": "Choose a fighter and battle through the original tournament to challenge Kintaro and Shao Kahn.",
    "notes": "Original five-button Midway T-Unit arcade release. Ctrl high punch, Z block, X high kick, C low punch, V low kick; original special moves and finishers. Factory coinage requires two credits to start or continue.",
    "players": 2,
    "coop": false,
    "bootDelay": 17000,
    "firstBootButton": 3,
    "firstBootWait": 6000,
    "actionInputs": [
      1,
      10,
      9,
      0,
      8
    ],
    "creditsToStart": 2
  },
  {
    "id": "punisher",
    "name": "The Punisher",
    "year": 1993,
    "maker": "CAPCOM",
    "developer": "Capcom",
    "version": "World · 930422",
    "rom": "punisher.zip",
    "token": "PN",
    "color": "#9dc39a",
    "size": [
      384,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Attack",
      "Jump"
    ],
    "action": "Attack",
    "players": 2,
    "coop": true,
    "objective": "Fight through the Kingpin’s criminal army as Frank Castle and Nick Fury.",
    "notes": "Original CPS-1 QSound cabinet, with two simultaneous players and its original arcade story sequences.",
    "bootDelay": 8000
  },
  {
    "id": "nbajamte",
    "name": "NBA Jam Tournament Edition",
    "year": 1994,
    "maker": "MIDWAY",
    "developer": "Midway",
    "version": "Revision 4.0 · 3/23/94",
    "rom": "nbajamte.zip",
    "token": "NJ",
    "color": "#edb76f",
    "size": [
      400,
      254
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Turbo",
      "Shoot / Block",
      "Pass / Steal"
    ],
    "action": "Turbo",
    "objective": "Choose your NBA team and compete in two-on-two basketball with up to four simultaneous players.",
    "notes": "Original Tournament Edition T-Unit arcade release, with the original rosters, substitutions, initials, commentary, and tournament rules. Ctrl turbo, Z shoot/block, X pass/steal. Factory coinage requires two credits to start or continue.",
    "players": 4,
    "coop": true,
    "bootDelay": 17000,
    "firstBootButton": 3,
    "firstBootWait": 6000,
    "creditsToStart": 2
  },
  {
    "id": "pbobble",
    "name": "Puzzle Bobble",
    "year": 1994,
    "maker": "TAITO",
    "developer": "Taito",
    "version": "Japan · original B-System",
    "rom": "pbobble.zip",
    "token": "PB",
    "color": "#a9d795",
    "size": [
      320,
      224
    ],
    "move": "Aim left<br>and right",
    "actions": [
      "Launch"
    ],
    "action": "Launch",
    "players": 2,
    "coop": false,
    "objective": "Aim the bubble launcher and match colors to clear the original puzzles.",
    "notes": "Original 1994 Japanese Taito B-System edition. Add credits and press Start, then choose the lower two-player option with Down and confirm with Ctrl for versus. The upper option is solo play. Left/right aim; Ctrl and P2 A launch on independent boards.",
    "bootDelay": 8000
  },
  {
    "id": "samsho2",
    "name": "Samurai Shodown II",
    "year": 1994,
    "maker": "SNK",
    "developer": "SNK",
    "version": "NGM-063 · original MVS",
    "token": "SS2",
    "color": "#ecc491",
    "size": [
      320,
      224
    ],
    "move": "Move, jump<br>and crouch",
    "actions": [
      "Light slash",
      "Medium slash",
      "Light kick",
      "Medium kick"
    ],
    "objective": "Choose your warrior and fight through the original weapon-based arcade tournament.",
    "notes": "Original four-button cabinet: A/B are slashes, C/D are kicks; A+B produces a heavy slash and C+D a heavy kick.",
    "players": 2,
    "coop": true,
    "rom": "samsho2.zip",
    "bios": "neogeo",
    "core": "fbneo",
    "action": "Light slash",
    "bootDelay": 8000,
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    }
  },
  {
    "id": "wjammers",
    "name": "Windjammers",
    "year": 1994,
    "maker": "DATA EAST",
    "developer": "Data East",
    "version": "Original · MVS",
    "token": "WJ",
    "color": "#d8cf75",
    "size": [
      304,
      224
    ],
    "move": "Move around<br>the court",
    "actions": [
      "Throw / slide",
      "Lob"
    ],
    "objective": "Throw the flying disc into your opponent’s goal, aiming for the higher-scoring zones.",
    "notes": "Original two-button disc sport, with simultaneous two-player matches.",
    "players": 2,
    "coop": true,
    "rom": "wjammers.zip",
    "bios": "neogeo",
    "core": "fbneo",
    "action": "Throw / slide",
    "bootDelay": 8000,
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    }
  },
  {
    "id": "ddsom",
    "name": "Dungeons & Dragons: Shadow over Mystara",
    "year": 1996,
    "maker": "CAPCOM",
    "developer": "Capcom",
    "version": "Europe · 960619",
    "rom": "ddsom.zip",
    "token": "D&D",
    "color": "#baa4dc",
    "size": [
      384,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Attack",
      "Jump",
      "Use item",
      "Select item"
    ],
    "action": "Attack",
    "players": 4,
    "coop": true,
    "objective": "Gather a party of up to four heroes, choose your path, and defeat Synn.",
    "notes": "Original CPS-2 arcade campaign, configured through its original operator menu for 4 players and 4 independent coin chutes. Ctrl attacks, Z jumps, X uses the selected item, C selects an item. Every player has an independent coin and Start.",
    "bootDelay": 8000,
    "nvramSeed": {
      "file": "nvram/ddsom-4p.nv",
      "target": "/data/saves/FinalBurn Neo/fbneo/ddsom.nv"
    }
  },
  {
    "id": "mslug",
    "name": "Metal Slug",
    "year": 1996,
    "maker": "NAZCA / SNK",
    "developer": "Nazca",
    "version": "NGM-201 · original MVS",
    "token": "MS1",
    "color": "#b4c18d",
    "size": [
      304,
      224
    ],
    "move": "Run, jump<br>and crouch",
    "actions": [
      "Fire",
      "Jump",
      "Grenade"
    ],
    "objective": "Rescue prisoners, commandeer the Metal Slug tank, and fight through the six original missions together.",
    "notes": "Original three-button cooperative arcade release. Fire also uses the knife when an enemy is close.",
    "players": 2,
    "coop": true,
    "rom": "mslug.zip",
    "bios": "neogeo",
    "core": "fbneo",
    "action": "Fire",
    "bootDelay": 8000,
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    }
  },
  {
    "id": "neodrift",
    "name": "Neo Drift Out",
    "year": 1996,
    "maker": "VISCO",
    "developer": "Visco",
    "version": "New Technology · MVS",
    "token": "NDO",
    "color": "#a9d1dd",
    "size": [
      304,
      224
    ],
    "move": "Steer left<br>and right",
    "actions": [
      "Accelerate",
      "Brake / reverse"
    ],
    "objective": "Choose a rally car and race the clock through the original isometric courses.",
    "notes": "The original MVS controls are a left/right joystick with digital accelerator and brake buttons. Ctrl accelerates; Z brakes and reverses at a stop.",
    "players": 1,
    "coop": false,
    "rom": "neodrift.zip",
    "bios": "neogeo",
    "core": "fbneo",
    "action": "Accelerate",
    "bootDelay": 8000,
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    }
  },
  {
    "id": "turfmast",
    "name": "Neo Turf Masters",
    "year": 1996,
    "maker": "NAZCA / SNK",
    "developer": "Nazca",
    "version": "Big Tournament Golf · MVS",
    "token": "NTM",
    "color": "#b9d4a4",
    "size": [
      304,
      224
    ],
    "move": "Aim and<br>choose a club",
    "actions": [
      "Shot / power / height",
      "Hook",
      "Slice"
    ],
    "objective": "Choose a golfer and course, set your shot power and height, and compete for the lowest score.",
    "notes": "Original three-button arcade golf: left/right aim, up/down choose a club. A sets power then height; B adds hook and C adds slice. Two players take turns. Finish the current shot before P2 joins; each player confirms a golfer.",
    "players": 2,
    "coop": false,
    "rom": "turfmast.zip",
    "bios": "neogeo",
    "core": "fbneo",
    "action": "Shot / power / height",
    "bootDelay": 8000,
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    }
  },
  {
    "id": "mvsc",
    "name": "Marvel vs. Capcom: Clash of Super Heroes",
    "year": 1998,
    "maker": "CAPCOM",
    "developer": "Capcom",
    "version": "Europe · 980123",
    "rom": "mvsc.zip",
    "token": "MVC",
    "color": "#89c9e1",
    "size": [
      384,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Light punch",
      "Medium punch",
      "Heavy punch",
      "Light kick",
      "Medium kick",
      "Heavy kick"
    ],
    "action": "Light punch",
    "players": 2,
    "coop": false,
    "objective": "Build your tag team from the original Marvel and Capcom roster and challenge Onslaught.",
    "notes": "Original CPS-2 arcade edition, including tag partners, guest assists, and six action buttons. Insert two coins for each player to start under the original pricing. On the original selection screen, confirm fighters with a punch; wait for the first player selection before pressing the other Start to join.",
    "bootDelay": 8000,
    "actionInputs": [
      1,
      9,
      10,
      0,
      8,
      11
    ],
    "creditsToStart": 2
  },
  {
    "id": "kof98",
    "name": "The King of Fighters ’98",
    "year": 1998,
    "maker": "SNK",
    "developer": "SNK",
    "version": "NGM-2420 · original MVS",
    "token": "K98",
    "color": "#cda4dd",
    "size": [
      304,
      224
    ],
    "move": "Move, jump<br>and crouch",
    "actions": [
      "Light punch",
      "Light kick",
      "Heavy punch",
      "Heavy kick"
    ],
    "objective": "Choose a three-fighter team, select Advanced or Extra mode, and take on the original arcade opponents.",
    "notes": "Original four-button MVS fighting game; two players can challenge one another.",
    "players": 2,
    "coop": true,
    "rom": "kof98.zip",
    "bios": "neogeo",
    "core": "fbneo",
    "action": "Light punch",
    "bootDelay": 8000,
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    }
  },
  {
    "id": "garou",
    "name": "Garou: Mark of the Wolves",
    "year": 1999,
    "maker": "SNK",
    "developer": "SNK",
    "version": "NGM-2530 · original MVS",
    "token": "GM",
    "color": "#adbadf",
    "size": [
      320,
      224
    ],
    "move": "Move, jump<br>and crouch",
    "actions": [
      "Light punch",
      "Light kick",
      "Heavy punch",
      "Heavy kick"
    ],
    "objective": "Choose a fighter and T.O.P. zone, master Just Defend, and compete in the original arcade tournament.",
    "notes": "Original protected MVS cartridge emulation with the four-button control layout and simultaneous versus play.",
    "players": 2,
    "coop": true,
    "rom": "garou.zip",
    "bios": "neogeo",
    "core": "fbneo",
    "action": "Light punch",
    "bootDelay": 8000,
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    }
  },
  {
    "id": "sfiii3",
    "name": "Street Fighter III: 3rd Strike",
    "year": 1999,
    "maker": "CAPCOM",
    "developer": "Capcom",
    "version": "Japan · 990608 · original NO CD",
    "rom": "sfiii3n.zip",
    "token": "III",
    "color": "#e19686",
    "size": [
      384,
      224
    ],
    "move": "Move with<br>the arrow keys",
    "actions": [
      "Light punch",
      "Medium punch",
      "Heavy punch",
      "Light kick",
      "Medium kick",
      "Heavy kick"
    ],
    "action": "Light punch",
    "players": 2,
    "coop": false,
    "objective": "Choose a fighter and Super Art, then test your timing with the original parry system.",
    "notes": "Original CPS-3 Japan 990608 NO CD hardware revision; no console port or ROM hack. Six arcade action buttons. On the original selection screen, confirm fighters with a punch; wait for the first player selection before pressing the other Start to join.",
    "bootDelay": 8000,
    "actionInputs": [
      1,
      9,
      10,
      0,
      8,
      11
    ]
  }
]);

/* 2000s arcade cabinets */
window.ARCADE_GAMES.push(...[
  {
    "id": "mslug3",
    "name": "Metal Slug 3",
    "year": 2000,
    "maker": "SNK",
    "developer": "SNK",
    "version": "NGM-2560 · original MVS",
    "token": "MS3",
    "color": "#dfb373",
    "size": [
      304,
      224
    ],
    "move": "Run, jump<br>and crouch",
    "actions": [
      "Fire",
      "Jump",
      "Grenade"
    ],
    "objective": "Rescue prisoners and explore the original branching missions with a second player.",
    "notes": "Original protected three-button MVS arcade release. Fire uses a knife at close range; jump enters an available Slug vehicle.",
    "bios": "neogeo",
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    },
    "players": 2,
    "coop": true,
    "core": "fbneo",
    "bootDelay": 8000,
    "rom": "mslug3.zip",
    "action": "Fire"
  },
  {
    "id": "progear",
    "name": "Progear",
    "year": 2001,
    "maker": "CAVE / CAPCOM",
    "developer": "Cave",
    "version": "USA · 010117",
    "rom": "progear.zip",
    "token": "PG",
    "color": "#d8b993",
    "size": [
      384,
      224
    ],
    "move": "Fly with<br>the arrow keys",
    "actions": [
      "Shot / gunner",
      "Bomb",
      "Auto shot"
    ],
    "action": "Shot / gunner",
    "players": 2,
    "coop": true,
    "objective": "Choose a pilot and gunner, collect rings and gems, and fly through the original five-stage CPS-2 campaign.",
    "notes": "Original USA CPS-2 arcade edition. Insert two coins per player under the original pricing. Ctrl fires; hold it for gunner mode. Z drops a limited bomb; X is the cabinet’s original auto-shot button. For two-player play, press both Start buttons at pilot selection, then confirm each pilot and gunner.",
    "bootDelay": 20000,
    "creditsToStart": 2
  },
  {
    "id": "pzloop2",
    "name": "Puzz Loop 2",
    "year": 2001,
    "maker": "MITCHELL / CAPCOM",
    "developer": "Mitchell",
    "version": "Europe · 010302",
    "rom": "pzloop2.zip",
    "token": "PL2",
    "color": "#aa9acb",
    "size": [
      384,
      224
    ],
    "move": "Turn the dial<br>with left / right",
    "actions": [
      "Launch"
    ],
    "action": "Launch",
    "players": 2,
    "coop": false,
    "objective": "Aim the original rotary launcher and match colored balls before the spiral reaches its goal.",
    "notes": "Original European CPS-2 arcade edition. Left/right turn P1’s original rotary launcher; J/L turn P2’s. Ctrl and P2 A launch. Add credits, press Start, turn the original carousel until VS is highlighted, then confirm with Ctrl for two-player battle. Stage, Panic, and Power are original solo modes. Let the original How to Play sequence finish before the round begins.",
    "bootDelay": 20000
  },
  {
    "id": "dmnfrnt",
    "name": "Demon Front",
    "year": 2002,
    "maker": "IGS",
    "developer": "IGS",
    "version": "V105 · World · original PGM",
    "token": "DF",
    "color": "#8fb9b1",
    "size": [
      448,
      224
    ],
    "move": "Run, crouch<br>and aim",
    "actions": [
      "Fire / charge pet",
      "Jump / glide",
      "Pet shield"
    ],
    "objective": "Choose a hero and pet, then battle through the original fantasy arcade missions together.",
    "notes": "Original PGM V105 arcade release with two-player cooperative play. Hold fire to charge the pet attack; hold jump to glide; the third button toggles the pet shield.",
    "bios": "pgm",
    "players": 2,
    "coop": true,
    "core": "fbneo",
    "bootDelay": 22000,
    "rom": "dmnfrnt.zip",
    "action": "Fire / charge pet",
    "options": {
      "fbneo-dipswitch-dmnfrnt-Region_(Fake)": "World",
      "fbneo-dipswitch-dmnfrnt-Bios_select_(Fake)": "Newer"
    }
  },
  {
    "id": "ddp3",
    "name": "DoDonPachi III",
    "year": 2002,
    "maker": "Cave",
    "developer": "Cave",
    "version": "World · 2002.05.15 Master Ver",
    "token": "DDP3",
    "color": "#eda657",
    "size": [
      224,
      448
    ],
    "move": "Move your ship",
    "actions": [
      "Shot / laser",
      "Bomb",
      "Auto shot"
    ],
    "objective": "Survive the original arcade stages, enemy waves and bosses.",
    "notes": "Original World DoDonPachi III master PCB. Tap Shot for wide fire or hold for the slower laser; choose your ship and Element Doll on the original selection screens.",
    "players": 2,
    "coop": true,
    "rom": "ddp3.zip",
    "core": "fbneo",
    "action": "Shot / laser",
    "bootDelay": 14000
  },
  {
    "id": "kof2002",
    "name": "The King of Fighters 2002",
    "year": 2002,
    "maker": "EOLITH / PLAYMORE",
    "developer": "Eolith",
    "version": "NGM-2650 · original MVS",
    "token": "K02",
    "color": "#a6c4dc",
    "size": [
      304,
      224
    ],
    "move": "Move, jump<br>and crouch",
    "actions": [
      "Light punch",
      "Light kick",
      "Heavy punch",
      "Heavy kick"
    ],
    "objective": "Choose a three-fighter team and compete in the original 2002 arcade tournament.",
    "notes": "Original four-button MVS release with three-on-three team battles and simultaneous two-player challenges.",
    "bios": "neogeo",
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    },
    "players": 2,
    "coop": false,
    "core": "fbneo",
    "bootDelay": 8000,
    "rom": "kof2002.zip",
    "action": "Light punch"
  },
  {
    "id": "ket",
    "name": "Ketsui: Kizuna Jigoku Tachi",
    "year": 2003,
    "maker": "Cave",
    "developer": "Cave",
    "version": "2003/01/01 Master Ver",
    "token": "KET",
    "color": "#74c6a4",
    "size": [
      224,
      448
    ],
    "move": "Move your ship",
    "actions": [
      "Shot / lock-on",
      "Bomb",
      "Auto shot"
    ],
    "objective": "Survive the original arcade stages, enemy waves and bosses.",
    "notes": "Original ordinary master PCB, without an Arrange or Black Label conversion. Hold Shot to lock on and slow movement; collect close-range scoring chips.",
    "players": 2,
    "coop": true,
    "rom": "ket.zip",
    "core": "fbneo",
    "action": "Shot / lock-on",
    "bootDelay": 14000
  },
  {
    "id": "samsh5sp",
    "name": "Samurai Shodown V Special",
    "year": 2004,
    "maker": "SNK PLAYMORE",
    "developer": "Yuki Enterprise",
    "version": "NGM-2720 · original MVS",
    "token": "SS5",
    "color": "#d5acbe",
    "size": [
      304,
      224
    ],
    "move": "Move, jump<br>and crouch",
    "actions": [
      "Light slash",
      "Medium slash",
      "Kick",
      "Meditate / evade"
    ],
    "objective": "Choose a warrior and master the original sword, rage and defensive systems.",
    "notes": "Original arcade MVS cartridge. A+B gives a heavy slash; D meditates and combines with directions for evasive movement.",
    "bios": "neogeo",
    "options": {
      "fbneo-neogeo-mode": "MVS_EUR"
    },
    "players": 2,
    "coop": false,
    "core": "fbneo",
    "bootDelay": 8000,
    "rom": "samsh5sp.zip",
    "action": "Light slash"
  },
  {
    "id": "deathsml",
    "name": "Deathsmiles",
    "year": 2007,
    "maker": "Cave",
    "developer": "Cave",
    "version": "2007/10/09 Master Ver · original CV1000-B",
    "token": "DS",
    "color": "#ce8ac6",
    "size": [
      320,
      240
    ],
    "move": "Fly with<br>the arrow keys",
    "actions": [
      "Shoot left",
      "Shoot right",
      "Bomb"
    ],
    "objective": "Survive the original arcade stages, enemy waves and bosses.",
    "notes": "The original CV1000-B board takes about 35 seconds to complete its startup before accepting coins. Hold either shot button for laser fire; hold both to lock on. Choose your familiar, stage and rank in the original menus.",
    "players": 2,
    "coop": true,
    "rom": "deathsml.zip",
    "core": "fbneo",
    "action": "Shoot left",
    "bootDelay": 42000
  }
]);
