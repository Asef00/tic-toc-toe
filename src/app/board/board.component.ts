import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit{

  squares!: any[];
  xIsNext!: boolean;
  winner!: string | null;

  constructor() { }
  
  ngOnInit(): void {
    this.newGame();
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.winner = null;
  }

  makeMove(idx: number) {
    if (!this.squares[idx]) { //if was empty, we can make a move
      this.xIsNext = !this.xIsNext; //toggle
      this.squares.splice(idx, 1, this.player); //fill
    }

    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }
    return null;
  }

}
