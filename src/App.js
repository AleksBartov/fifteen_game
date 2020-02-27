import React, { useState, useEffect } from 'react';
import Game from './components/Game'
import Card from './components/Card'
import { CONSTANTS } from './constants/constants'
import './App.css';

const { NUM_OF_CARDS, CARD_WIDTH, PERIOD } = CONSTANTS

function App() {

  const [cards, setCards] = useState([]);
  const [gap, setGap] = useState({ x: null, y: null })

  useEffect(() => {
    let x = 0, y = 0;

    let myArr = new Array(NUM_OF_CARDS)
      .fill(
        null
      )
      .reduce((arr, card, index) => {
        index % PERIOD !== 0 ? x++ : x = 0
        index % PERIOD !== 0 ? y = y : y++

        return [...arr, { value: index + 1, x, y: y - 1 }]
      }, [])

    setCards(cards.concat(myArr));
    setGap({ x: PERIOD - 1, y: PERIOD - 1 });
  }, [])

  function moveHandler(card, oldCoords, newCoords) {
    const { x: oX, y: oY } = oldCoords
    const { x: nX, y: nY } = newCoords

    if (oX !== nX || oY !== nY) {
      setGap(({ x, y }) => {
        return {
          x: oldCoords.x,
          y: oldCoords.y,
        }
      });

      setCards((cards) => {
        const myIndex = cards.findIndex(x => {
          return x.value === card
        })
        cards[myIndex].x = nX;
        cards[myIndex].y = nY;

        return cards
      });

      return
    }
    return
  }


  return (
    <div className="App">
      <Game>
        {cards.map(({ value, x, y, active }, index) => {
          return <Card key={index} {...{ x, y, value, CARD_WIDTH, gap, moveHandler }} />
        })}
      </Game>
    </div>
  );
}

export default App;
