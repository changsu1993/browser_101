'use strict';
import PopUp from './popup.js';
import * as sound from './sound.js';
import { GameBuilder, Reason } from './game.js';

const game = new GameBuilder()
  .gameDuration(10) //
  .carrotCount(10)
  .bugCount(10)
  .build();

const gameFinishBanner = new PopUp();

game.setGameStopListener((reason) => {
  let message;
  switch (reason) {
    case Reason.cancel:
      message = 'Replay?';
      sound.playAlert();
      break;
    case Reason.win:
      message = 'YOU WON 👍🏻';
      sound.playWin();
      break;
    case Reason.lose:
      message = 'YOU LOST 👎🏻';
      sound.playBug();
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});
