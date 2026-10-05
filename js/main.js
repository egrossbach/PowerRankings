const teamsData = [
  { id: 1, headshot: "ethanHeadshotImage", manager: "Ethan", name: "Mac and Movies", ovr: 86, desc: "Basically Oliver's team but worse. Turns out that having two picks close together is superior. Sadly I missed on Etienne which left a sizeable hole, luckily I'm a genius and got Belsky's \"handcuff\" (30 carries btw). Strib was supposed to be my joker card. At least Odunze is alive. Feels like I can consistently crack 100 but am hard pressed to explode beyond that until Pickens emerges from hibernation." },
  { id: 2, headshot: "deutschHeadImage", manager: "Deutsch", name: "HammerTime", ovr: 91, desc: "My Commish. Holy hell. It ain't the prettiest but this might be the most voluminous team I've ever seen. Kyler doesn't exactly juice me up on jettas but it's jettas. These RBs get shoved carries up their ah. I faded Zay bc I thought Zay was Zay atp but my bad, the breakout is here so long as the hammy holds up. McMillan my guy, he will be mine next year. Watson a late round hit, we are rolling in the Hammer Timezone." },
  { id: 3, headshot: "belskyHeadImage", manager: "Belsky", name: "Hogwash", ovr: 79, desc: "Belsky and Dale fighting for worst WR room in the league. Nabers is that dude when 100% but the rest is awful. Happens when u draft a domestic abuser in round 4. Idk if Bowers can play more than 10 games but at least he'll be nice for the 10. I don't see a path to sustained success here unless Jacobs comes back good, even then it's dependent on 30 bombs from CMC. Emanuel Wilson can save our season?" },
  { id: 4, headshot: "vanHeadImage", manager: "Vanemele", name: "Eyes Wide Shut", ovr: 77, desc: "Floor floor floor floor. Vanemele got the dub here for the all-boring team. Eagles bruh. Everybody good player irl but so mid in fantasy. Except for Henry. Oliver second mention outside his own rank but man, I get it's a bit but it's a bad look bro. I guess every WR here can score 10 pts. Will be tough tho when Belsky refuses anything except all 5 in exchange for Jacobs. Starting 0-4 probably sunk this squad."},
  { id: 5, headshot: "alexHeadImage", manager: "Alex", name: "Hoes Mad", ovr: 90, desc: "Not much to say about this team. It's solid. Bijan is a weekly nuke and Alex just needs 1 or 2 other guys to do the same and he cruises to 120. And that looks a pretty easy feat considering how upside everybody here is. Scoobadoo, Lamb, Brown, Waddle, all can pop for 20+ any given Sunday. Bench is disgusting tho so as long as no injuries, easy top 5 finish loading for Mr. Washed, welcome back." },
  { id: 6, headshot: "chrisHeadImage", manager: "Chris", name: "Killer Whales", ovr: 85, desc: "Looks better on paper than it prob really is. Still Chris just willing to draft sensibly. QB1. Ok. Jeanty might actually be good (maybe). Kyren perennial sleep FOCK it pisses me tf off damn. Really tho this is about DJ Moore and Jamo. Chris threw his pick at Allen and Loveland, then nabbed those 2 and they look volatile. Gotta squeeze every drip of juice from those guys, then this team can make a run." },
  { id: 7, headshot: "daleHeadImage", manager: "Dale", name: "SaxWillRuinTheLeague", ovr: 88, desc: "Simple formula here of taking the 1.01 and then sleepwalking thru the rest of the draft. Yeah we want the duckfoot tight end who plays for the Browns. Hideous WR room but best RB room in the league and it's not close. Since Dale myguy'd his way to Hubbard and that ended up hitting, he has easy path to flipping a RB for a real receiver and falling into the playoffs again. How he keeps doing this I really don't know." },
  { id: 8, headshot: "benHeadImage", manager: "Ben", name: "GaveRuinedTheLeague", ovr: 83, desc: "Ben somehow flipped his dogshit team into some cohesion. McBride and Puka hooray. Otherwise lmao. Hampton so overdrafted for being so unproven. Somebody had to. Rice did his training camp in jail. Somebody had to. Kyle Pitts. NOBODY HAD TO BRUH. Thank god u fixed. Higgins and Warren are ok, maybe better than we think. Imagine tho if bro didn't draft from Pluto." },
  { id: 9, headshot: "gabeHeadImage", manager: "Gabe", name: "RememberingAchane", ovr: 81, desc: "Meh. This team is actually ok, once again a decent recovery from it starting ass. Highkey happy to start somebody other than Achane. Seems to me tho that everybody can score max 15 pts aside from Nico and JT. Dunno if that is a winning formula against the top dogs where everybody can pop. Bench finds are pretty remarkable aside from MHJ who u can just drop Gabe. Vikings D lowkey the best player here." },
  { id: 10, headshot: "oliverHeadImage", manager: "Oliver", name: "DHhate", ovr: 93, desc: "Oliver must have hacked my computer and seen my draft board that's the only explanation for his genius strategy. Thank god bro did not pass on JSN. Walker my guy looks like the hulk. Now here is the key. Oliver entire team hinges on RB2. Monty was smoke but he shipped injured Eagles player for another of my guys Bucky, we are in business. Every single other player on my DO draft list, what a response by the rookie from 10th." }
];

// --- SPLASH SCREEN ---
class SplashScene extends Phaser.Scene {
  constructor() { super('SplashScene'); }

  preload() {
    this.load.image('eImage', 'assets/eLogo.png');
    this.load.image('thanImage', 'assets/thanLogo.png');
    this.load.image('eaLogoImage', 'assets/eaLogoPix.png');
    this.load.audio('splashAudio', 'assets/splashA.m4a');
  }

  create() {
      this.cameras.main.setBackgroundColor('#000000');
      
      const textStyle = { fontSize: '24px', fontFamily: 'Eurostile', color: '#ffffff' };
      
      const t1 = this.add.image(this.cameras.main.width/2, 250, 'eImage').setOrigin(0.5).setAlpha(0);
      const t2 = this.add.image(this.cameras.main.width/2, 250, 'thanImage').setOrigin(0.5).setAlpha(0);
      const t3 = this.add.image(this.cameras.main.width/2, 250, 'eaLogoImage').setOrigin(0.5).setAlpha(0);
      const t4 = this.add.text(this.cameras.main.width/2, 350, "It's in the game.", textStyle).setOrigin(0.5).setAlpha(0);
      
      const t5 = this.add.text(this.cameras.main.width/2, 450, "Press Anywhere to Continue", textStyle).setOrigin(0.5);
      const zone = this.add.zone(0, 0, this.scale.width, this.scale.height).setOrigin(0).setInteractive();

      zone.once('pointerdown', () => {
        t5.setVisible(false);
        this.sound.add('splashAudio').play();

        // Modern Phaser 3.60+ Chain Tweens
        this.tweens.chain({
            targets: [t1, t2, t3, t4],
            tweens: [
                {
                    targets: t1,
                    alpha: 1,
                    duration: 800
                },
                {
                    targets: t2,
                    alpha: 1,
                    duration: 800
                },
                {
                    targets: t3,
                    alpha: 1,
                    duration: 800
                },
                {
                    targets: t4,
                    alpha: 1,
                    duration: 1000,
                    onComplete: () => {
                        this.time.delayedCall(2000, () => {
                            this.scene.start('MainMenuScene');
                        });
                    }
                }
            ]
        });
    });
  }
}

// --- MAIN MENU ---
class MainMenuScene extends Phaser.Scene {
  constructor() { super('MainMenuScene'); }

  preload() {
    this.load.image('playButtonImage', 'assets/playnowbutton.jpg');
    this.load.image('teamsButtonImage', 'assets/teamsbutton.jpg');
    this.load.image('tutorialButtonImage', 'assets/tutorialButton.jpg');
    this.load.image('parkBGImage', 'assets/brookdalepark.jpg');
    this.load.image('nflLogoImage', 'assets/nfllogo.png');
    this.load.image('backButtonImage', 'assets/backbutton.jpg');
    this.load.image('daleImage', 'assets/dale_50.png');
    this.load.image('blankButtonImage', 'assets/emptybutton.jpg');
    this.load.image('clipboardImage', 'assets/clipboard.png');
    this.load.image('ethanHeadshotImage', 'assets/EthanS.png');
    this.load.image('arrowImage', 'assets/arrow.png');
    this.load.image('controllerImage', 'assets/controller.png');
    this.load.image('startButtonImage', 'assets/startButton.jpg');
    this.load.image('chrisHeadImage', 'assets/ChrisS.png');
    this.load.image('alexHeadImage', 'assets/AlexS.png');
    this.load.image('daleHeadImage', 'assets/DaleHead.png');
    this.load.image('deutschHeadImage', 'assets/DeutschS.png');
    this.load.image('gabeHeadImage', 'assets/GabeS.png');
    this.load.image('oliverHeadImage', 'assets/OliverS.png');
    this.load.image('vanHeadImage', 'assets/VanS.png');
    this.load.image('benHeadImage', 'assets/BenS.png');
    this.load.image('belskyHeadImage', 'assets/BelskyS.png');
    this.load.image('fieldImage', 'assets/gamefield.png');
    this.load.image('scoreboardImage', 'assets/scoreboard.png');
    this.load.image('refImage', 'assets/refShort.png');
    this.load.image('refTDImage', 'assets/refTD.png');
    this.load.image('eaLogoImage', 'assets/eaLogoPix.png');

    this.load.audio('nflAudio', 'assets/nflSong.mp3');
    this.load.audio('selectAudio', 'assets/select.mp3');
    this.load.audio('whistleAudio', 'assets/whistle.mp3');
  }

  create() {
      if (!this.sound.get('nflAudio')) {
          this.sound.add('nflAudio', {loop: true, volume: 0.25}).play();
      }
      const selSound = this.sound.add('selectAudio', {volume: 1});

      this.add.image(0, 0, 'parkBGImage').setOrigin(0).setScale(3);
      this.add.image(580, 390, 'daleImage').setScale(2);
      this.add.image(600, 45, 'nflLogoImage').setOrigin(0).setScale(1.2);
      //this.add.rectangle(410, 510, 550, 25, 0x000000, 0.5);
      this.add.image(105, 520, 'eaLogoImage').setScale(1);
      this.add.text(60, 50, 'BROOKDALE LEAGUE       26', { fontSize: '48px', fontFamily: 'Eurostile', fontStyle: 'bold', stroke: '#000000', strokeThickness: 4 }).setOrigin(0);

      const createButton = (x, y, image, targetScene) => {
          const btn = this.add.image(x, y, image)
              .setScale(1.5)
              .setInteractive({ useHandCursor: true })
              .on('pointerover', () => btn.setTint(0xcccccc))
              .on('pointerout', () => btn.clearTint())
              .on('pointerdown', () => {this.scene.start(targetScene); selSound.play();});
      };

      createButton(270, 170, 'playButtonImage', 'TeamSelectScene');
      createButton(270, 240, 'teamsButtonImage', 'TeamsScene');
      createButton(270, 310, 'tutorialButtonImage', 'TutorialScene');

  }
}

// --- TUTORIAL SCREEN ---
class TutorialScene extends Phaser.Scene {
  constructor() { super('TutorialScene'); }
  
  create() {

      this.add.image(0, 0, 'parkBGImage').setOrigin(0).setScale(3);
      this.cameras.main.setBackgroundColor('#222222');
      this.add.text(400, 300, 'Figure it out bro', { fontSize: '48px', fontFamily: 'Eurostile', fontStyle: 'bold', stroke: '#000000', strokeThickness: 4  }).setOrigin(0.5);
      
      const selSound = this.sound.add('selectAudio', {volume: 1});

      const createButton = (x, y, image, targetScene) => {
          const btn = this.add.image(x, y, image)
              .setScale(1.5)
              .setInteractive({ useHandCursor: true })
              .on('pointerover', () => btn.setTint(0xcccccc))
              .on('pointerout', () => btn.clearTint())
              .on('pointerdown', () => {this.scene.start(targetScene); selSound.play();});
      };

      createButton(75, 40, 'backButtonImage', 'MainMenuScene');
  }
}

// --- TEAMS SCREEN ---
class TeamsScene extends Phaser.Scene {
  constructor() { super('TeamsScene'); }

  create() {
      this.add.image(0, 0, 'parkBGImage').setOrigin(0).setScale(3);
      this.add.image(450, 30, 'clipboardImage').setOrigin(0).setScale(1.5);

      const selSound = this.sound.add('selectAudio', {volume: 1});

      const sortedTeams = [...teamsData].sort((a, b) => b.ovr - a.ovr);
      const descBox = this.add.text(500, 155, 'Select a team to see description.', { fontSize: '20px', fontFamily: 'Eurostile', wordWrap: { width: 260 }, color: '#3a3a3a' });

      let startY = 100;
      let selectedButton = null;
      sortedTeams.forEach((team, index) => {
          const yPos = startY + (index * 50);

          const btn = this.add.image(7, yPos - 7, 'blankButtonImage')
              .setScale(1.5)
              .setOrigin(0)
              .setInteractive({ useHandCursor: true });

          btn.on('pointerover', () => {
              if (selectedButton !== btn) {
                  btn.setTint(0xcccccc);
                }
            });

          btn.on('pointerout', () => {
              if (selectedButton !== btn) {
                  btn.clearTint();
                }
            });

          btn.on('pointerdown', () => {
              if (selectedButton && selectedButton !== btn) {
                  selectedButton.clearTint();
                }
              selSound.play();
              selectedButton = btn;
              btn.setTint(0xfaa170);
              descBox.setText(team.desc);
            });

          this.add.text(20, yPos, `${team.name} - OVR: ${team.ovr}`, {
              fontSize: '26px',
              fontFamily: 'Eurostile',
              fontStyle: 'bold',
              color: '#3a3a3a'
            });
        });


      const createButton = (x, y, image, targetScene) => {
          const btn = this.add.image(x, y, image)
              .setScale(1.5)
              .setInteractive({ useHandCursor: true })
              .on('pointerover', () => btn.setTint(0xcccccc))
              .on('pointerout', () => btn.clearTint())
              .on('pointerdown', () => btn.setScale(0.9))
              .on('pointerdown', () => {this.scene.start(targetScene); selSound.play();});
      };

      createButton(75, 40, 'backButtonImage', 'MainMenuScene');
    }
}

// --- TEAM SELECT SCREEN ---
class TeamSelectScene extends Phaser.Scene {
  constructor() { super('TeamSelectScene'); }

  init() {
      this.leftIndex = 0;
      this.rightIndex = 1;
      this.userSide = null; // 'left' or 'right'
  }

  create() {
      this.add.image(0, 0, 'parkBGImage').setOrigin(0).setScale(3);

      const selSound = this.sound.add('selectAudio', {volume: 1});
      
      const createButton = (x, y, image, targetScene) => {
          const btn = this.add.image(x, y, image)
              .setScale(1.5)
              .setInteractive({ useHandCursor: true })
              .on('pointerover', () => btn.setTint(0xcccccc))
              .on('pointerout', () => btn.clearTint())
              .on('pointerdown', () => {this.scene.start(targetScene); selSound.play();});
      };

      createButton(75, 40, 'backButtonImage', 'MainMenuScene');

      this.add.text(400, 250, 'VS', { fontSize: '48px', fontFamily: 'Eurostile', fontStyle: 'bold', color: '#faa170', stroke: '#000000', strokeThickness: 4 }).setOrigin(0.5);
      this.add.image(200, 550, 'controllerImage').setOrigin(0.5).setScale(0.2);

      // UI References
      this.leftHeadshot = this.add.image(200, 240, 'ethanHeadshotImage').setOrigin(0.5).setScale(1.25);
      this.leftName = this.add.text(200, 340, '', { fontSize: '36px', fontFamily: 'Eurostile', fontStyle: 'bold', stroke: '#000000', strokeThickness: 4  }).setOrigin(0.5);
      this.leftOvr = this.add.text(200, 390, '', { fontSize: '32px', fontFamily: 'Eurostile', fontStyle: 'bold', stroke: '#000000', strokeThickness: 4   }).setOrigin(0.5);
      
      this.rightHeadshot = this.add.image(600, 240, 'deutschHeadImage').setOrigin(0.5).setScale(1.25);
      this.rightName = this.add.text(600, 340, '', { fontSize: '36px', fontFamily: 'Eurostile', fontStyle: 'bold', stroke: '#000000', strokeThickness: 4   }).setOrigin(0.5);
      this.rightOvr = this.add.text(600, 390, '', { fontSize: '32px', fontFamily: 'Eurostile', fontStyle: 'bold', stroke: '#000000', strokeThickness: 4   }).setOrigin(0.5);

      this.updateTeamDisplays();

      // Up/Down Arrows for Left Team
      this.upArrowL = this.add.image(200, 120, 'arrowImage').setRotation(-Math.PI/2).setScale(0.75).setOrigin(0.5).setInteractive().on('pointerover', () => this.upArrowL.setTint(0xcccccc)).on('pointerout', () => this.upArrowL.clearTint()).on('pointerdown', () => {this.changeTeam('left', -1); selSound.play();});
      this.downArrowL = this.add.image(200, 450, 'arrowImage').setRotation(Math.PI/2).setScale(0.75).setOrigin(0.5).setInteractive().on('pointerover', () => this.downArrowL.setTint(0xcccccc)).on('pointerout', () => this.downArrowL.clearTint()).on('pointerdown', () => {this.changeTeam('left', 1); selSound.play();});

      // Up/Down Arrows for Right Team
      this.upArrowR = this.add.image(600, 120, 'arrowImage').setRotation(-Math.PI/2).setScale(0.75).setOrigin(0.5).setInteractive().on('pointerover', () => this.upArrowR.setTint(0xcccccc)).on('pointerout', () => this.upArrowR.clearTint()).on('pointerdown', () => {this.changeTeam('right', -1); selSound.play();});
      this.downArrowR = this.add.image(600, 450, 'arrowImage').setRotation(Math.PI/2).setScale(0.75).setOrigin(0.5).setInteractive().on('pointerover', () => this.downArrowR.setTint(0xcccccc)).on('pointerout', () => this.downArrowR.clearTint()).on('pointerdown', () => {this.changeTeam('right', 1); selSound.play();});

      // Start Button
      this.startBtn = this.add.image(400, 550, 'startButtonImage')
          .setScale(1.5)
          .setOrigin(0.5)
          .setInteractive({ useHandCursor: true })
          .on('pointerover', () => this.startBtn.setTint(0xcccccc))
          .on('pointerout', () => this.startBtn.clearTint())
          .on('pointerdown', () => {
                  selSound.play();
                  const userTeam = teamsData[this.leftIndex];
                  const oppTeam = teamsData[this.rightIndex];
                  this.scene.start('GameScene', { userTeam, oppTeam });
          });
  }

  updateTeamDisplays() {
      this.leftHeadshot.setTexture(teamsData[this.leftIndex].headshot);
      this.leftName.setText(teamsData[this.leftIndex].name);
      this.leftOvr.setText(`OVR: ${teamsData[this.leftIndex].ovr}`);
      this.rightHeadshot.setTexture(teamsData[this.rightIndex].headshot);
      this.rightName.setText(teamsData[this.rightIndex].name);
      this.rightOvr.setText(`OVR: ${teamsData[this.rightIndex].ovr}`);
  }

  changeTeam(side, direction) {
      if (side === 'left') {
          this.leftIndex = (this.leftIndex + direction + teamsData.length) % teamsData.length;
      } else {
          this.rightIndex = (this.rightIndex + direction + teamsData.length) % teamsData.length;
      }
      this.updateTeamDisplays();
  }
}

// --- GAME SCREEN ---
class GameScene extends Phaser.Scene {
  constructor() { super('GameScene'); }

  init(data) {
      this.userTeam = data.userTeam;
      this.oppTeam = data.oppTeam;
      this.userScore = 0;
      this.oppScore = 0;
      this.isJuking = false;
      this.jukeCooldown = 0;
      this.isLunging = false;
      this.lungeCooldown = Phaser.Math.Between(2500, 4000);
  }

  create() {
      this.input.addPointer(1);
      
      // Field background
      this.add.image(375, 470, 'fieldImage').setOrigin(0.5).setScale(2.5);
      this.add.rectangle(380, 48, 550, 80, 0x4169E1, 0.5).setOrigin(0.5); // Endzone
      this.add.image(730, 75, 'scoreboardImage').setOrigin(0.5).setScale(0.75);     

      this.selSound = this.sound.add('selectAudio', {volume: 1});
      this.whistleSound = this.sound.add('whistleAudio', {volume: 1});

      // UI & Scoreboard
      this.scoreText = this.add.text(730, 95, '', { fontSize: '24px', fontStyle: 'bold', fontFamily: 'Eurostile', wordWrap: { width: 150 }, color: '#fabe70'  }).setOrigin(0.5).setRotation(-0.15);
      this.updateScoreboard();

      // Physics Sprites (Placeholders for images)
      this.player = this.add.image(379, 500, this.userTeam.headshot).setScale(0.6);
      this.physics.add.existing(this.player);
      this.player.body.setCollideWorldBounds(true).setSize(80, 80, true);

      this.opponent = this.add.image(379, 150, this.oppTeam.headshot).setScale(0.6);
      this.physics.add.existing(this.opponent);
      this.opponent.body.setCollideWorldBounds(true).setSize(80, 80, true);

      // Input
      this.cursors = this.input.keyboard.createCursorKeys();

      // Mobile Controls (Visual only in this setup, tied to flags)
      this.createMobileControls();

      // Collisions
      this.physics.add.overlap(this.player, this.opponent, this.handleTackle, null, this);

      this.lBound = this.add.rectangle(108, 310, 5, 600, 0xffffff, 1);
      this.rBound = this.add.rectangle(651, 310, 5, 600, 0xffffff, 1);
      this.physics.add.existing(this.lBound);
      this.physics.add.existing(this.rBound);
      this.physics.add.overlap(this.player, this.lBound, this.handleTackle, null, this);
      this.physics.add.overlap(this.player, this.rBound, this.handleTackle, null, this);

      const createButton = (x, y, image, targetScene) => {
          const btn = this.add.image(x, y, image)
              .setScale(1.5)
              .setInteractive({ useHandCursor: true })
              .on('pointerover', () => btn.setTint(0xcccccc))
              .on('pointerout', () => btn.clearTint())
              .on('pointerdown', () => {this.scene.start(targetScene); this.selSound.play();});
      };

      createButton(75, 40, 'backButtonImage', 'TeamSelectScene');

      this.refImage = this.add.image(50, 300, 'refImage').setOrigin(0.5).setScale(0.5).setVisible(false);

      // Begin Lunges
      this.time.delayedCall(this.lungeCooldown, () => this.doLunge());
  }

    createMobileControls() {
      // Juke button (Bottom left)
      const jukeBtn = this.add.circle(670, 490, 80, 0x555555).setInteractive().setAlpha(0.5);
      this.jukeTxt = this.add.text(670, 490, 'JUKE', { fontSize: '32px', fontStyle: 'bold', color: '#0508e4' }).setOrigin(0.5);
      jukeBtn.on('pointerdown', () => this.doJuke());

      // Virtual joystick (Bottom left, where D-pad used to be)
      this.joyStick = this.plugins.get('rexVirtualJoystick').add(this, {
          x: 140,
          y: 490,
          radius: 90,
          base: this.add.circle(0, 0, 90, 0x888888, 0.5),
          thumb: this.add.circle(0, 0, 60, 0xcccccc, 0.8),
      });

      this.joystickCursors = this.joyStick.createCursorKeys();
  }

    update(time, delta) {
      if (this.isResetting) return;
      if (this.userScore >= 7 || this.oppScore >= 7) return;

      const speed = this.isJuking ? 300 : this.userTeam.ovr * 1.1;
      this.player.body.setVelocity(0);

      // Player Movement (keyboard + joystick)
      if (this.cursors.left.isDown || this.joystickCursors.left.isDown) this.player.body.setVelocityX(-speed);
      if (this.cursors.right.isDown || this.joystickCursors.right.isDown) this.player.body.setVelocityX(speed);
      if (this.cursors.up.isDown || this.joystickCursors.up.isDown) this.player.body.setVelocityY(-speed);
      if (this.cursors.down.isDown || this.joystickCursors.down.isDown) this.player.body.setVelocityY(speed);

      this.player.body.velocity.normalize().scale(speed);

      // Juke Mechanic
      if (Phaser.Input.Keyboard.JustDown(this.cursors.space) && time > this.jukeCooldown) {
          this.doJuke(time);
      }

      // Opponent AI (Speed scales with OVR. e.g., OVR 50 = speed 50, OVR 99 = speed ~110)
      if (!this.isJuking) {
          const oppSpeed = this.isLunging ? 200 : this.oppTeam.ovr * 1.1; 
          this.physics.moveToObject(this.opponent, this.player, oppSpeed);
      } else {
          //this.opponent.body.setVelocity(0); // opponent hesitates during juke
      }

      // Touchdown Check
      if (this.player.y < 100) {
        this.whistleSound.play();  
        this.physics.pause();
          if(!this.isResetting) this.userScore++;
          this.isResetting = true;
          this.refImage.setTexture('refTDImage').setPosition(50, 150).setVisible(true);
          this.time.delayedCall(1500, () => {
            this.resetRound();
            this.isResetting = false;
          });
      }
  }

  doJuke(time = this.time.now) {
      if (time > this.jukeCooldown) {
        this.jukeTxt.setText('Cooldown');
        this.jukeTxt.setStyle({ color: '#848486' });
          this.time.delayedCall(2000, () => {
            this.jukeTxt.setText('JUKE');
            this.jukeTxt.setStyle({ color: '#0508e4' });
          });
          this.isJuking = true;
          this.time.delayedCall(300, () => {
              this.isJuking = false;
          });
          this.jukeCooldown = time + 2000; // 2 sec cooldown
      }
  }

  doLunge(){
      if (this.isLunging) return;
      this.isLunging = true;
      this.time.delayedCall(400, () => {
              this.isLunging = false;
        });
      this.lungeCooldown = Phaser.Math.Between(2500, 4000);
      this.time.delayedCall(this.lungeCooldown, () => this.doLunge());
  }

  handleTackle() {
          this.whistleSound.play();  
          this.physics.pause();
          if(!this.isResetting) this.oppScore++;
          this.isResetting = true;
          this.refImage.setTexture('refImage').setPosition(50, this.player.y).setVisible(true);
          this.time.delayedCall(1500, () => {
            this.resetRound();
            this.isResetting = false;
          });
  }

  resetRound() {
      this.updateScoreboard();
      this.refImage.setVisible(false);

      if (this.userScore >= 7) {
          this.endGame(`${this.userTeam.name} WINS!`);
      } else if (this.oppScore >= 7) {
          this.endGame(`${this.oppTeam.name} WINS!`);
      } else {
          // Reset positions
          this.physics.resume();
          this.player.setPosition(379, 500);
          this.opponent.setPosition(379, 150);
      }
  }

  updateScoreboard() {
      this.scoreText.setText(`${this.userTeam.manager}: ${this.userScore}\n${this.oppTeam.manager}: ${this.oppScore}`);
  }

  endGame(message) {
      this.physics.pause();
      this.add.rectangle(400, 300, 800, 600, 0x000000, 0.7);
      this.add.text(400, 250, message, { fontSize: '48px', fontStyle: 'bold', fontFamily: 'Eurostile', color: '#fabe70', stroke: '#000000', strokeThickness: 4  }).setOrigin(0.5);
      
      const btn = this.add.image(400, 350, 'backButtonImage')
              .setScale(1.5)
              .setInteractive({ useHandCursor: true })
              .on('pointerover', () => btn.setTint(0xcccccc))
              .on('pointerout', () => btn.clearTint())
              .on('pointerdown', () => {this.scene.start('TeamSelectScene'); this.selSound.play();});
  }
}

// --- GAME CONFIG ---
const config = {
  type: Phaser.AUTO,
  parent: 'game-container',
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
  },
  input: {
    activePointers: 2
  },
  physics: {
      default: 'arcade',
      arcade: {
          debug: false
      }
  },
  plugins: {
      global: [{
          key: 'rexVirtualJoystick',
          plugin: rexvirtualjoystickplugin,
          start: true
      }]
  },
  scene: [SplashScene, MainMenuScene, TeamsScene, TutorialScene, TeamSelectScene, GameScene]
};

const game = new Phaser.Game(config);
