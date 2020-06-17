import React, { Component, Fragment } from 'react';
import Cards from './Cards';

class SimonGame extends Component {
  state = {
    simonNumbers: [],
    playerChoices: [],
    gameStarted: false,
  };

  componentDidUpdate() {
    this.handleCheck();
  }

  addSimonNumbers = () => {
    const simon = Math.floor(Math.random() * 4) + 1;
    this.setState((prevState) => ({
      simonNumbers: [...prevState.simonNumbers, simon],
    }));
  };

  addPlayerNumbers = (e) => {
    const clicked = e.target.id;
    this.setState((prevState) => ({
      playerChoices: [...prevState.playerChoices, parseInt(clicked)],
    }));
  };

  showSimonColors = () => {
    for (let i = 0; i < this.state.simonNumbers.length; i++) {
      ((j) => {
        setTimeout(() => {
          document.getElementById(
            this.state.simonNumbers[i]
          ).style.backgroundColor = 'green';
          clearTimeout();
        }, 1000 + 1000 * j);
        setTimeout(() => {
          document.getElementById(
            this.state.simonNumbers[i]
          ).style.backgroundColor = 'red';
          clearTimeout();
        }, 1500 + 1000 * j);
      })(i);
    }
  };

  nextRound = () => {
    this.setState({ playerChoices: [] });
    setTimeout(() => {
      this.showSimonColors();
    }, 1000);
  };

  handleCheck = () => {
    if (this.state.playerChoices.length === this.state.simonNumbers.length) {
      if (
        this.state.playerChoices.toString() ===
        this.state.simonNumbers.toString()
      ) {
        if (this.state.gameStarted) {
          this.addSimonNumbers();
          this.nextRound();
        }
      } else {
        this.resetGame();
      }
    }
  };

  startGame = () => {
    this.setState({ gameStarted: true });
    this.addSimonNumbers();
    setTimeout(() => {
      this.showSimonColors();
    }, 1000);
  };

  resetGame = () => {
    this.setState({ simonNumbers: [], playerChoices: [], gameStarted: false });
    alert('Wrong Choice, Game Over');
  };

  render() {
    console.log(this.state);
    return (
      <Fragment>
        <Cards
          add={this.addPlayerNumbers}
          clicked={this.startGame}
          buttonColor={this.state.color}
        />
      </Fragment>
    );
  }
}

export default SimonGame;
