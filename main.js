import './style.css';
import kaboom from 'kaboom';

// Asset Imports
import MainCharacter from './mainSprite';
import Enemy from './enemySprite';

// World Settings
kaboom();
setBackground(Color.fromHex(0x66ff66));

// Sprite Initializations
const mainCharacter = new MainCharacter();
const enemySprite = new Enemy();

mainCharacter.mainSprite.onCollide((enemySprite, col) => {
  console.log(col);
});
