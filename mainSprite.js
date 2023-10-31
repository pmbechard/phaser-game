export function initMainSprite() {
  const SPEED = 100;
  const ANIM_SPEED = 15;
  let isFacing = 'down';

  const mainSprite = add([
    sprite('walk-down'),
    pos(80, 40),
    area(),
    body(),
    scale(2),
  ]);

  /// MOVE ///

  /// MAIN SPRITE MOVE LEFT ///
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
          speed: ANIM_SPEED,
          loop: true,
        },
      },
    },
  });
  onKeyDown('left', () => {
    if (mainSprite.curAnim() !== 'run') {
      mainSprite.use(sprite('walk-left'));
      mainSprite.play('run');
      isFacing = 'left';
    }
    mainSprite.move(-SPEED, 0);
  });
  onKeyRelease('left', () => {
    mainSprite.stop();
  });

  /// MAIN SPRITE MOVE RIGHT ///
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
          speed: ANIM_SPEED,
          loop: true,
        },
      },
    },
  });
  onKeyDown('right', () => {
    if (mainSprite.curAnim() !== 'run') {
      mainSprite.use(sprite('walk-right'));
      mainSprite.play('run');
      isFacing = 'right';
    }
    mainSprite.move(SPEED, 0);
  });
  onKeyRelease('right', () => {
    mainSprite.stop();
  });

  /// MAIN SPRITE MOVE UP ///
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
          speed: ANIM_SPEED,
          loop: true,
        },
      },
    },
  });
  onKeyDown('up', () => {
    if (mainSprite.curAnim() !== 'run') {
      mainSprite.use(sprite('walk-up'));
      mainSprite.play('run');
      isFacing = 'up';
    }
    mainSprite.move(0, -SPEED);
  });
  onKeyRelease('up', () => {
    mainSprite.stop();
  });

  /// MAIN SPRITE MOVE DOWN ///
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
          speed: ANIM_SPEED,
          loop: true,
        },
      },
    },
  });
  onKeyDown('down', () => {
    if (mainSprite.curAnim() !== 'run') {
      mainSprite.use(sprite('walk-down'));
      mainSprite.play('run');
      isFacing = 'down';
    }
    mainSprite.move(0, SPEED);
  });
  onKeyRelease('down', () => {
    mainSprite.stop();
  });

  /// ATTACK ///

  /// MAIN SPRITE ATTACK LEFT ///
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
          speed: ANIM_SPEED,
          loop: false,
        },
      },
    },
  });

  /// MAIN SPRITE ATTACK RIGHT ///
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
          speed: ANIM_SPEED,
          loop: false,
        },
      },
    },
  });

  /// MAIN SPRITE ATTACK UP ///
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
          speed: ANIM_SPEED,
          loop: false,
        },
      },
    },
  });

  /// MAIN SPRITE ATTACK DOWN ///
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
          speed: ANIM_SPEED,
          loop: false,
        },
      },
    },
  });

  /// ATTACK ANIMATION ///
  onKeyPress('space', () => {
    mainSprite.use(sprite(`attack-${isFacing}`));
    mainSprite.play('attack');
  });
}
