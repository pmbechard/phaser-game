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

mainCharacter.mainSprite.onCollide((enemy, col) => {
  if (!mainCharacter.isAttacking()) {
    mainCharacter.takeDamage(col);
  } else if (col.isTop() && mainCharacter.isFacing === 'up') {
    console.log('enemy hurt');
  } else if (col.isBottom() && mainCharacter.isFacing === 'down') {
    console.log('enemy hurt');
  } else if (col.isLeft() && mainCharacter.isFacing === 'left') {
    console.log('enemy hurt');
  } else if (col.isRight() && mainCharacter.isFacing === 'right') {
    console.log('enemy hurt');
  } else {
    console.log('more info required');
  }
});
