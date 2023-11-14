export default class Level1 {
  constructor() {
    this.#loadAssets();
    addLevel(
      [
        '--------------------------------',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '=                              =',
        '--------------------------------',
      ],
      {
        tileWidth: 24,
        tileHeight: 24,
        tiles: {
          // ' ': () => [sprite('grass'), area(), scale(0.25)],
          '-': () => [
            sprite('wall-hor'),
            area(),
            body({ isStatic: true }),
            anchor('center'),
            scale(1, 24 / 7),
          ],
          '=': () => [
            sprite('wall-vert'),
            area(),
            body({ isStatic: true }),
            scale(24 / 7, 1),
            anchor('center'),
          ],
        },
        pos: vec2(
          window.innerWidth / 2 - (32 * 24) / 2,
          window.innerHeight / 2 - (16 * 24) / 2
        ),
      }
    );
  }
  #loadAssets() {
    loadSpriteAtlas('./assets/textures/TX Tileset Wall.png', {
      'wall-hor': {
        x: 384,
        y: 32,
        width: 24,
        height: 7,
      },
    });
    loadSpriteAtlas('./assets/textures/TX Tileset Wall.png', {
      'wall-vert': {
        x: 288,
        y: 32,
        width: 7,
        height: 24,
      },
    });
    loadSpriteAtlas('./assets/textures/TX Tileset Grass.png', {
      grass: {
        x: 48,
        y: 0,
        width: 24,
        height: 24,
      },
    });
  }
}
