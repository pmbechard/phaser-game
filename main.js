import './style.css';
import kaboom from 'kaboom';

// Asset Imports
import MainCharacter from './mainSprite';
import Enemy from './enemySprite';

// World Settings
kaboom();

// Scenes
scene('gameOn', () => {
  const mainCharacter = new MainCharacter();
  const enemySprite = new Enemy();

  setBackground(Color.fromHex(0x66ff66));
  const healthText = add([
    text(`Health: ${mainCharacter.mainSprite.hp()}`),
    pos(24, 24),
  ]);

  // Interactions
  mainCharacter.mainSprite.onCollide((enemy, col) => {
    if (!mainCharacter.isAttacking()) {
      mainCharacter.takeDamage(col);
    } else if (col.isTop() && mainCharacter.isFacing === 'up') {
      enemySprite.takeDamage(col);
    } else if (col.isBottom() && mainCharacter.isFacing === 'down') {
      enemySprite.takeDamage(col);
    } else if (col.isLeft() && mainCharacter.isFacing === 'left') {
      enemySprite.takeDamage(col);
    } else if (col.isRight() && mainCharacter.isFacing === 'right') {
      enemySprite.takeDamage(col);
    } else {
      enemySprite.takeDamage(col);
    }
    healthText.text = `Health: ${mainCharacter.mainSprite.hp()}`;
    if (mainCharacter.isDead) {
      go('gameOver');
    }
  });
});
scene('gameOver', () => {
  setBackground([0, 0, 0]);
  add([text('Game Over. Press space to restart.'), pos(24, 24)]);
  onKeyPress('space', () => go('gameOn'));
});

// Starts the game
go('gameOn');
