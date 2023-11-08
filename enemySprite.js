export default class Enemy {
  #isFacing;
  #SPEED;
  #ANIM_SPEED;

  constructor() {
    this.#isFacing = 'down';
    this.#SPEED = 100;
    this.#ANIM_SPEED = 15;
    this.#loadAssets();
    this.#initMovement();
    this.enemySprite = add([
      sprite('cultist-walk-down'),
      pos(280, 240),
      area({
        shape: new Polygon([
          vec2(0, 0),
          vec2(20, 0),
          vec2(20, 30),
          vec2(0, 30),
        ]),
      }),
      anchor('center'),
      body(),
      scale(2),
      health(3),
    ]);
  }

  get isFacing() {
    return this.#isFacing;
  }

  takeDamage(collision) {
    if (collision.isTop()) {
      this.enemySprite.moveBy(0, -50);
      this.#isFacing = 'down';
    } else if (collision.isBottom()) {
      this.enemySprite.moveBy(0, 50);
      this.#isFacing = 'up';
    } else if (collision.isLeft()) {
      this.enemySprite.moveBy(-50, 0);
      this.#isFacing = 'right';
    } else {
      this.enemySprite.moveBy(50, 0);
      this.#isFacing = 'left';
    }
    this.enemySprite.hurt(1);
    if (this.enemySprite.hp() === 0) {
      this.enemySprite.use(sprite('cultist-death-down'));
      this.enemySprite.play('death', {
        onEnd: () => destroy(this.enemySprite),
      });
    } else {
      this.enemySprite.use(sprite(`cultist-hurt-${this.#isFacing}`));
      this.enemySprite.play('hurt', {
        onEnd: () => {
          this.enemySprite.frame = 0;
          this.enemySprite.stop();
        },
      });
    }
  }

  #initMovement() {}

  #loadAssets() {
    /// WALK ///
    loadSpriteAtlas('./assets/sprites/enemy/walk/CultistDownWalk.png', {
      'cultist-walk-down': {
        x: 0,
        y: 0,
        width: 48 * 8,
        height: 48,
        sliceX: 8,
        anims: {
          run: {
            from: 0,
            to: 7,
            speed: this.#ANIM_SPEED,
            loop: true,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/walk/CultistUpWalk.png', {
      'cultist-walk-up': {
        x: 0,
        y: 0,
        width: 48 * 8,
        height: 48,
        sliceX: 8,
        anims: {
          run: {
            from: 0,
            to: 7,
            speed: this.#ANIM_SPEED,
            loop: true,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/walk/CultistLeftWalk.png', {
      'cultist-walk-left': {
        x: 0,
        y: 0,
        width: 48 * 8,
        height: 48,
        sliceX: 8,
        anims: {
          run: {
            from: 0,
            to: 7,
            speed: this.#ANIM_SPEED,
            loop: true,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/walk/CultistRightWalk.png', {
      'cultist-walk-right': {
        x: 0,
        y: 0,
        width: 48 * 8,
        height: 48,
        sliceX: 8,
        anims: {
          run: {
            from: 0,
            to: 7,
            speed: this.#ANIM_SPEED,
            loop: true,
          },
        },
      },
    });

    /// HURT ///
    loadSpriteAtlas('./assets/sprites/enemy/hurt/CultistDownHurt.png', {
      'cultist-hurt-down': {
        x: 0,
        y: 0,
        width: 48 * 4,
        height: 48,
        sliceX: 4,
        anims: {
          hurt: {
            from: 0,
            to: 3,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/hurt/CultistUpHurt.png', {
      'cultist-hurt-up': {
        x: 0,
        y: 0,
        width: 48 * 4,
        height: 48,
        sliceX: 4,
        anims: {
          hurt: {
            from: 0,
            to: 3,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/hurt/CultistLeftHurt.png', {
      'cultist-hurt-left': {
        x: 0,
        y: 0,
        width: 48 * 4,
        height: 48,
        sliceX: 4,
        anims: {
          hurt: {
            from: 0,
            to: 3,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/hurt/CultistRightHurt.png', {
      'cultist-hurt-right': {
        x: 0,
        y: 0,
        width: 48 * 4,
        height: 48,
        sliceX: 4,
        anims: {
          hurt: {
            from: 0,
            to: 3,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });

    /// ATTACK ///
    loadSpriteAtlas('./assets/sprites/enemy/attack/CultistDownAttack01.png', {
      'cultist-attack-down': {
        x: 0,
        y: 0,
        width: 48 * 11,
        height: 48,
        sliceX: 11,
        anims: {
          attack: {
            from: 0,
            to: 10,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/attack/CultistUpAttack01.png', {
      'cultist-attack-up': {
        x: 0,
        y: 0,
        width: 48 * 11,
        height: 48,
        sliceX: 11,
        anims: {
          attack: {
            from: 0,
            to: 10,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/attack/CultistLeftAttack01.png', {
      'cultist-attack-left': {
        x: 0,
        y: 0,
        width: 48 * 11,
        height: 48,
        sliceX: 11,
        anims: {
          attack: {
            from: 0,
            to: 10,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/attack/CultistRightAttack01.png', {
      'cultist-attack-right': {
        x: 0,
        y: 0,
        width: 48 * 11,
        height: 48,
        sliceX: 11,
        anims: {
          attack: {
            from: 0,
            to: 10,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });

    /// DEATH ///
    loadSpriteAtlas('./assets/sprites/enemy/death/CultistDownDeath.png', {
      'cultist-death-down': {
        x: 0,
        y: 0,
        width: 48 * 6,
        height: 48,
        sliceX: 6,
        anims: {
          death: {
            from: 0,
            to: 5,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/death/CultistUpDeath.png', {
      'cultist-death-up': {
        x: 0,
        y: 0,
        width: 48 * 6,
        height: 48,
        sliceX: 6,
        anims: {
          death: {
            from: 0,
            to: 5,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/death/CultistLeftDeath.png', {
      'cultist-death-left': {
        x: 0,
        y: 0,
        width: 48 * 6,
        height: 48,
        sliceX: 6,
        anims: {
          death: {
            from: 0,
            to: 5,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
    loadSpriteAtlas('./assets/sprites/enemy/death/CultistRightDeath.png', {
      'cultist-death-right': {
        x: 0,
        y: 0,
        width: 48 * 6,
        height: 48,
        sliceX: 6,
        anims: {
          death: {
            from: 0,
            to: 5,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });
  }
}
