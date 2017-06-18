import React, { Component } from 'react';
import './Board.css';
import Row from './Rows.js';


class Board extends Component {


  constructor() {
    super();
    this.update = this.update.bind(this);
    this.boardSet = this.boardSet.bind(this);
    this.back = ['R', 'K', 'R'];
    this.front = ['P', 'P', 'P'];
    this.movesAvailable = {
      'P': [[1, 0], [-1, 0]],
      'R': [[1, 0], [-1, 0], [0, 1], [0, -1]],
      'K': [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [-1, 1], [1, -1], [-1, -1]]
    }
    this.state = {
      board: this.boardSet(),
      firstClick: true,
      selectedPiece:null,
      slectedIndex: null
    }
  }

  boardSet() {
    const arr = Array(8).fill(Array(3).fill({kind:'-', player:3}));
    const arrcopy = arr.slice();
    console.log('aray', arr);
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
      if(piece.kind !== '-'){
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
            alert('you Win');
          }
          else {
            const arr = JSON.parse(JSON.stringify(this.state.board));
            arr[this.state.selectedIndex[0]][this.state.selectedIndex[1]] = {kind:'-'};
            arr[row][col] = this.state.selectedPiece;
            this.setState({
              board: arr,
              firstClick: true,
              selectedPiece: 1,
              selectedIndex: 1
            });
          }
        }
      }
    }

  }



  render() {
    return (<div className="board">
      <Row onClick={(piece, row, col) => this.update(piece, 0, col)} piece={this.state.board[0]}/>
      <Row onClick={(piece, row, col) => this.update(piece, 1, col)} piece={this.state.board[1]}/>
      <Row onClick={(piece, row, col) => this.update(piece, 2, col)} piece={this.state.board[2]}/>
      <Row onClick={(piece, row, col) => this.update(piece, 3, col)} piece={this.state.board[3]}/>
      <Row onClick={(piece, row, col) => this.update(piece, 4, col)} piece={this.state.board[4]}/>
      <Row onClick={(piece, row, col) => this.update(piece, 5, col)} piece={this.state.board[5]}/>
      <Row onClick={(piece, row, col) => this.update(piece, 6, col)} piece={this.state.board[6]}/>
      <Row onClick={(piece, row, col) => this.update(piece, 7, col)} piece={this.state.board[7]}/>
    </div>);
  }
}

export default Board;
