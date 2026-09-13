const teamsData = [
  { id: 1, headshot: "ethanHeadshotImage", manager: "Ethan", name: "Mac and Movies", ovr: 85, desc: "A fast and aggressive team." },
  { id: 2, headshot: "deutschHeadImage", manager: "Deutsch", name: "HammerTime", ovr: 90, desc: "Strong defense, hard to beat." },
  { id: 3, headshot: "belskyHeadImage", manager: "Belsky", name: "Hogwash", ovr: 78, desc: "Well-rounded but lacks star power." },
  { id: 4, headshot: "vanHeadImage", manager: "Vanemele", name: "Eyes Wide Shut", ovr: 95, desc: "Simply gahbage I can't even begin to explain how truly gahbage this gahbage ahh team is it just drives me crazy." },
  { id: 5, headshot: "alexHeadImage", manager: "Alex", name: "Hoes Mad", ovr: 82, desc: "Excellent passing game." },
  { id: 6, headshot: "chrisHeadImage", manager: "Chris", name: "Killer Whales", ovr: 70, desc: "Rebuilding phase, underdog." },
  { id: 7, headshot: "daleHeadImage", manager: "Dale", name: "SaxWillRuinTheLeague", ovr: 88, desc: "Fierce competitors." },
  { id: 8, headshot: "benHeadImage", manager: "Ben", name: "OneAndRun", ovr: 80, desc: "Heavy hitters on the line." },
  { id: 9, headshot: "gabeHeadImage", manager: "Gabe", name: "Mr. Glass Reborn", ovr: 84, desc: "Pack mentality, great teamwork." },
  { id: 10, headshot: "oliverHeadImage", manager: "Oliver", name: "DHhate", ovr: 76, desc: "Quick but fragile." }
];
/*
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
*/
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
      const descBox = this.add.text(500, 150, 'Select a team to see description.', { fontSize: '20px', fontFamily: 'Eurostile', wordWrap: { width: 270 }, color: '#3a3a3a' });

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
      this.lungeCooldown = Phaser.Math.Between(2000, 4000);
  }

  create() {
      this.input.addPointer(1);
      
      // Field background
      this.add.image(375, 470, 'fieldImage').setOrigin(0.5).setScale(2.5);
      this.add.rectangle(380, 48, 550, 80, 0x4169E1, 0.5).setOrigin(0.5); // Endzone
      this.add.image(730, 75, 'scoreboardImage').setOrigin(0.5).setScale(0.75);
      this.refImage = this.add.image(50, 300, 'refImage').setOrigin(0.5).setScale(0.5).setVisible(false);

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

      // Begin Lunges
      this.time.delayedCall(this.lungeCooldown, () => this.doLunge());
  }

    createMobileControls() {
      // Juke button (Bottom left)
      const jukeBtn = this.add.circle(670, 500, 70, 0x555555).setInteractive().setAlpha(0.5);
      this.jukeTxt = this.add.text(670, 500, 'JUKE', { fontSize: '32px', fontStyle: 'bold', color: '#0508e4' }).setOrigin(0.5);
      jukeBtn.on('pointerdown', () => this.doJuke());

      // Virtual joystick (Bottom left, where D-pad used to be)
      this.joyStick = this.plugins.get('rexVirtualJoystick').add(this, {
          x: 130,
          y: 500,
          radius: 70,
          base: this.add.circle(0, 0, 70, 0x888888, 0.5),
          thumb: this.add.circle(0, 0, 40, 0xcccccc, 0.8),
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
          this.jukeTxt.setVisible(false);
          this.time.delayedCall(2000, () => {
            this.jukeTxt.setVisible(true);
          });
      }

      // Opponent AI (Speed scales with OVR. e.g., OVR 50 = speed 50, OVR 99 = speed ~110)
      if (!this.isJuking) {
          const oppSpeed = this.isLunging ? 300 : this.oppTeam.ovr * 1.1; 
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
      this.time.delayedCall(300, () => {
              this.isLunging = false;
        });
      this.lungeCooldown = Phaser.Math.Between(2000, 4000);
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
  scene: [MainMenuScene, TeamsScene, TutorialScene, TeamSelectScene, GameScene]
};

const game = new Phaser.Game(config);
