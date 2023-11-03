export default class MainCharacter {
  #isFacing;
  #SPEED;
  #ANIM_SPEED;

  constructor() {
    this.#SPEED = 150;
    this.#ANIM_SPEED = 20;
    this.#isFacing = 'down';
    this.#loadAssets();
    this.#initMovement();
    this.mainSprite = add([
      sprite('walk-down'),
      pos(80, 40),
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
    ]);
    this.#initAttack();
  }

  get isFacing() {
    return this.#isFacing;
  }

  isAttacking() {
    return this.mainSprite.curAnim() === 'attack';
  }

  takeDamage(collision) {
    if (collision.isTop()) {
      this.mainSprite.moveBy(0, 50);
    } else if (collision.isBottom()) {
      this.mainSprite.moveBy(0, -50);
    } else if (collision.isLeft()) {
      this.mainSprite.moveBy(50, 0);
    } else {
      this.mainSprite.moveBy(-50, 0);
    }
    this.mainSprite.use(sprite(`hurt-${this.#isFacing}`));
    this.mainSprite.play('hurt');
  }

  #initMovement() {
    onKeyDown('left', () => {
      if (
        this.mainSprite.curAnim() === 'attack' ||
        this.mainSprite.curAnim() === 'hurt'
      )
        return;
      if (this.mainSprite.curAnim() !== 'run') {
        this.mainSprite.use(sprite('walk-left'));
        this.mainSprite.play('run');
        this.#isFacing = 'left';
      }
      this.mainSprite.move(-this.#SPEED, 0);
    });
    onKeyRelease('left', () => {
      this.mainSprite.frame = 0;
      this.mainSprite.stop();
    });

    onKeyDown('right', () => {
      if (
        this.mainSprite.curAnim() === 'attack' ||
        this.mainSprite.curAnim() === 'hurt'
      )
        return;
      if (this.mainSprite.curAnim() !== 'run') {
        this.mainSprite.use(sprite('walk-right'));
        this.mainSprite.play('run');
        this.#isFacing = 'right';
      }
      this.mainSprite.move(this.#SPEED, 0);
    });
    onKeyRelease('right', () => {
      this.mainSprite.frame = 0;
      this.mainSprite.stop();
    });

    onKeyDown('up', () => {
      if (
        this.mainSprite.curAnim() === 'attack' ||
        this.mainSprite.curAnim() === 'hurt'
      )
        return;
      if (this.mainSprite.curAnim() !== 'run') {
        this.mainSprite.use(sprite('walk-up'));
        this.mainSprite.play('run');
        this.#isFacing = 'up';
      }
      this.mainSprite.move(0, -this.#SPEED);
    });
    onKeyRelease('up', () => {
      this.mainSprite.frame = 0;
      this.mainSprite.stop();
    });

    onKeyDown('down', () => {
      if (
        this.mainSprite.curAnim() === 'attack' ||
        this.mainSprite.curAnim() === 'hurt'
      )
        return;
      if (this.mainSprite.curAnim() !== 'run') {
        this.mainSprite.use(sprite('walk-down'));
        this.mainSprite.play('run');
        this.#isFacing = 'down';
      }
      this.mainSprite.move(0, this.#SPEED);
    });
    onKeyRelease('down', () => {
      this.mainSprite.frame = 0;
      this.mainSprite.stop();
    });
  }

  #initAttack() {
    /// ATTACK ANIMATION ///
    const facingMap = {
      down: () => {
        this.mainSprite.area.shape.pts[2] = vec2(20, 50);
        this.mainSprite.area.shape.pts[3] = vec2(0, 50);
      },
      up: () => {
        this.mainSprite.area.shape.pts[0] = vec2(0, -20);
        this.mainSprite.area.shape.pts[1] = vec2(20, -20);
      },
      left: () => {
        this.mainSprite.area.shape.pts[0] = vec2(-20, 0);
        this.mainSprite.area.shape.pts[3] = vec2(-20, 30);
      },
      right: () => {
        this.mainSprite.area.shape.pts[1] = vec2(40, 0);
        this.mainSprite.area.shape.pts[2] = vec2(40, 30);
      },
    };
    onKeyPress('space', () => {
      if (this.mainSprite.curAnim === 'attack') return;
      facingMap[this.#isFacing]();
      this.mainSprite.use(sprite(`attack-${this.#isFacing}`));
      this.mainSprite.play('attack');
      setTimeout(() => {
        this.mainSprite.area.shape = new Polygon([
          vec2(0, 0),
          vec2(20, 0),
          vec2(20, 30),
          vec2(0, 30),
        ]);
      }, 100);
    });
  }

  #loadAssets() {
    /// MOVE LEFT ///
    loadSpriteAtlas('./assets/sprites/main/walk/WarriorLeftWalk.png', {
      'walk-left': {
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
    /// MOVE RIGHT ///
    loadSpriteAtlas('./assets/sprites/main/walk/WarriorRightWalk.png', {
      'walk-right': {
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
    /// MOVE UP ///
    loadSpriteAtlas('./assets/sprites/main/walk/WarriorUpWalk.png', {
      'walk-up': {
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
    /// MOVE DOWN ///
    loadSpriteAtlas('./assets/sprites/main/walk/WarriorDownWalk.png', {
      'walk-down': {
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
    /// ATTACK LEFT ///
    loadSpriteAtlas('./assets/sprites/main/attack/WarriorLeftAttack01.png', {
      'attack-left': {
        x: 0,
        y: 0,
        width: 48 * 6,
        height: 48,
        sliceX: 6,
        anims: {
          attack: {
            from: 0,
            to: 5,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });

    /// ATTACK RIGHT ///
    loadSpriteAtlas('./assets/sprites/main/attack/WarriorRightAttack01.png', {
      'attack-right': {
        x: 0,
        y: 0,
        width: 48 * 6,
        height: 48,
        sliceX: 6,
        anims: {
          attack: {
            from: 0,
            to: 5,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });

    /// ATTACK UP ///
    loadSpriteAtlas('./assets/sprites/main/attack/WarriorDownAttack01.png', {
      'attack-down': {
        x: 0,
        y: 0,
        width: 48 * 6,
        height: 48,
        sliceX: 6,
        anims: {
          attack: {
            from: 0,
            to: 5,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });

    /// ATTACK DOWN ///
    loadSpriteAtlas('./assets/sprites/main/attack/WarriorUpAttack01.png', {
      'attack-up': {
        x: 0,
        y: 0,
        width: 48 * 6,
        height: 48,
        sliceX: 6,
        anims: {
          attack: {
            from: 0,
            to: 5,
            speed: this.#ANIM_SPEED,
            loop: false,
          },
        },
      },
    });

    /// HURT LEFT ///
    loadSpriteAtlas('./assets/sprites/main/hurt/WarriorLeftHurt.png', {
      'hurt-left': {
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

    /// HURT RIGHT ///
    loadSpriteAtlas('./assets/sprites/main/hurt/WarriorRightHurt.png', {
      'hurt-right': {
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

    /// HURT UP ///
    loadSpriteAtlas('./assets/sprites/main/hurt/WarriorUpHurt.png', {
      'hurt-up': {
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

    /// HURT DOWN ///
    loadSpriteAtlas('./assets/sprites/main/hurt/WarriorDownHurt.png', {
      'hurt-down': {
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
  }
}
