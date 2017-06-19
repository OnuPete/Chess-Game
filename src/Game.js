import React, { Component } from 'react';
import './Game.css';
import Board from './Board';
import OutPieces from './OutPieces';

class Game extends Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.boardSet = this.boardSet.bind(this);
    this.newGame = this.newGame.bind(this);
    this.togglePlayer = this.togglePlayer.bind(this);
    this.updateJail = this.updateJail.bind(this);

    this.back = ['R', 'Kn', 'B', 'Q', 'K', 'B', 'Kn','R'];
    this.front = ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'];
    this.movesAvailable = {
      'P': [[1, 0], [-1, 0]],
      'R': [[1, 0], [-1, 0], [0, 1], [0, -1]],
      'K': [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]],
      'Kn': [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]],
      'B': [[1, 1], [1, -1], [-1, 1], [-1, -1]],
      'Q': [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
    }
    this.state = {
      board: this.boardSet(),
      firstClick: true,
      selectedPiece:null,
      slectedIndex: null,
      player: 0,
      isWin: false,
      jail: []
    }
  }

  boardSet() {
    const arr = Array(8).fill(Array(8).fill({kind:'-', player:3}));
    let player0back = this.back.map((val) => {
      const acc = {};
      acc['player'] = 0;
      acc['kind'] = val;
      return acc;
    });
    let player0front = this.front.map((val) => {
      const acc = {};
      acc['player'] = 0;
      acc['kind'] = val;
      return acc;
    });
    let player1back = this.back.map((val) => {
      const acc = {};
      acc['player'] = 1;
      acc['kind'] = val;
      return acc;
    });
    let player1front = this.front.map((val) => {
      const acc = {};
      acc['player'] = 1;
      acc['kind'] = val;
      return acc;
    });
    arr[0] = player0back;
    arr[1] = player0front;
    arr[arr.length - 1] = player1back;
    arr[arr.length - 2] = player1front;
    return arr;
  }

  update(piece, row, col) {
    if (!this.state.isWin) {
      if(this.state.firstClick){
        //poll Array
        if(piece.kind !== '-' && piece.player === this.state.player){
          this.setState({
            firstClick: false,
            selectedPiece: piece,
            selectedIndex: [row,col]
          });
        }
      }
      else{
        if(piece.kind !== '-' && piece.player === this.state.selectedPiece.player){
          this.setState({firstClick:true});
        }
        else{
          let moves = null;
          if (this.state.selectedPiece.kind === 'P') {
            moves = [this.movesAvailable[this.state.selectedPiece.kind][this.state.selectedPiece.player]];
          } else {
            moves = this.movesAvailable[this.state.selectedPiece.kind];
          }
          const difference = [row - this.state.selectedIndex[0], col - this.state.selectedIndex[1]];
          const isMove = moves.filter((move) => {
            if (difference[0] === move[0] && difference[1] === move[1]) {
              return move;
            }
          });
          if (isMove.length === 1) {
            if (piece.kind === 'K'){
              this.setState({isWin:true});
            }
            else {
              const arr = JSON.parse(JSON.stringify(this.state.board));
              if (arr[row][col].kind !== '-') {
                this.updateJail(arr[row][col]);
              }
              arr[this.state.selectedIndex[0]][this.state.selectedIndex[1]] = {kind:'-'};
              arr[row][col] = this.state.selectedPiece;
              this.togglePlayer();
              this.setState({
                board: arr,
                firstClick: true,
                selectedPiece: 1,
                selectedIndex: 1,
              });
            }
          }
        }
      }
    }
  }

  togglePlayer() {
    const player = this.state.player ? 0: 1;
    this.setState({player});
  }

  newGame() {
    this.setState({
      board: this.boardSet(),
      firstClick: true,
      selectedPiece:null,
      slectedIndex: null,
      player: 0,
      isWin: false,
      jail: []
    })
  }

  updateJail(piece) {
    const jail = JSON.parse(JSON.stringify(this.state.jail));
    jail.push(piece);
    this.setState({jail});
  }

  render() {
    return (
      <div className="game">
        <Board update={this.update} board={this.state.board}/>
        <OutPieces player={this.state.player} jail={this.state.jail} isWin={this.state.isWin} newGame={this.newGame} />
      </div>
    )
  }

}

export default Game;
