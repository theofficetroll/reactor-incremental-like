import React from 'react';

import Board from './board';
import InfoPanel from './infoPanel';
import Pieces from './pieces';

const Game = () => {
  return (
    <div className='game'>
      <InfoPanel />
      <Pieces />
      <Board />
    </div>
  )
}

export default Game;
