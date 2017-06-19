import React from 'react';
import Pawn from './Pawn';
import Rook from './Rook';
import Knight from './Knight';
import Bishop from './Bishop';
import Queen from './Queen';
import './Jail.css'

function Jail (props) {
  const jailDisplay = props.jail.map((piece, i) => {
    if (piece.kind === 'P') return <Pawn key={i} player={piece.player} />
    else if (piece.kind === 'R') return <Rook key={i} player={piece.player} />
    else if (piece.kind === 'Kn') return <Knight key={i} player={piece.player} />
    else if (piece.kind === 'B') return <Bishop key={i} player={piece.player} />
    else if (piece.kind === 'Q') return <Queen key={i} player={piece.player} />
  });
  return (<div className="jail">{jailDisplay}</div>);
}

export default Jail;
