export default class Enemy {
  #isFacing;
  #SPEED;
  #ANIM_SPEED;

  constructor() {
    this.#isFacing = 'down';
    this.#SPEED = 100;
    this.#ANIM_SPEED = 15;
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
    ]);
  }

  get isFacing() {
    return this.#isFacing;
  }

  #initMovement() {
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
  }
}
