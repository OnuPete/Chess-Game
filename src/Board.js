import React, { Component } from 'react';
import './Board.css';
import Row from './Rows.js';


class Board extends Component {


  constructor() {
    super();
    this.update = this.update.bind(this);
    this.boardSet = this.boardSet.bind(this);
    this.togglePlayer = this.togglePlayer.bind(this);
    this.back = ['R', 'Kn', 'B', 'K', 'B', 'Kn','R'];
    this.front = ['P', 'P', 'P', 'P', 'P', 'P', 'P'];
    this.movesAvailable = {
      'P': [[1, 0], [-1, 0]],
      'R': [[1, 0], [-1, 0], [0, 1], [0, -1]],
      'K': [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]],
      'Kn': [[1, 2], [1, -2], [-1, 2], [-1, -2], [2, 1], [2, -1], [-2, 1], [-2, -1]],
      'B': [[1, 1], [1, -1], [-1, 1], [-1, -1]]
    }
    this.state = {
      board: this.boardSet(),
      firstClick: true,
      selectedPiece:null,
      slectedIndex: null,
      player: 0
    }
  }

  boardSet() {
    const arr = Array(8).fill(Array(7).fill({kind:'-', player:3}));
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
    console.log(this.state.board);
    console.log('p', piece, 'r', row, 'c', col)
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
            alert('Player ' + this.state.player + ' Wins');
            this.setState({
              board: this.boardSet(),
              firstClick: true,
              selectedPiece:null,
              slectedIndex: null,
              player: 0
            })
          }
          else {
            const arr = JSON.parse(JSON.stringify(this.state.board));
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

  togglePlayer() {
    const player = this.state.player ? 0: 1;
    this.setState({player});
  }



  render() {
    return (
    <div>
      <div className="player">CurrentPlayer {this.state.player}</div>
      <div className="board">
        <Row onClick={(piece, row, col) => this.update(piece, 0, col)} even={false} piece={this.state.board[0]}/>
        <Row onClick={(piece, row, col) => this.update(piece, 1, col)} even={true} piece={this.state.board[1]}/>
        <Row onClick={(piece, row, col) => this.update(piece, 2, col)} even={false} piece={this.state.board[2]}/>
        <Row onClick={(piece, row, col) => this.update(piece, 3, col)} even={true} piece={this.state.board[3]}/>
        <Row onClick={(piece, row, col) => this.update(piece, 4, col)} even={false} piece={this.state.board[4]}/>
        <Row onClick={(piece, row, col) => this.update(piece, 5, col)} even={true} piece={this.state.board[5]}/>
        <Row onClick={(piece, row, col) => this.update(piece, 6, col)} even={false} piece={this.state.board[6]}/>
        <Row onClick={(piece, row, col) => this.update(piece, 7, col)} even={true} piece={this.state.board[7]}/>
      </div>
    </div>
  );
  }
}

export default Board;
