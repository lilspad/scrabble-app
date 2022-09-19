import React from 'react';

const letters = {

  a: { points:  1, amount:  9 },
  b: { points:  3, amount:  2 },
  c: { points:  3, amount:  2 },
  d: { points:  2, amount:  4 },
  e: { points:  1, amount: 12 },
  f: { points:  4, amount:  2 },
  g: { points:  2, amount:  3 },
  h: { points:  4, amount:  2 },
  i: { points:  1, amount:  9 },
  j: { points:  8, amount:  1 },
  k: { points:  5, amount:  1 },
  l: { points:  1, amount:  4 },
  m: { points:  3, amount:  2 },
  n: { points:  1, amount:  6 },
  o: { points:  1, amount:  8 },
  p: { points:  3, amount:  2 },
  q: { points: 10, amount:  1 },
  r: { points:  1, amount:  6 },
  s: { points:  1, amount:  4 },
  t: { points:  1, amount:  6 },
  u: { points:  1, amount:  4 },
  v: { points:  4, amount:  2 },
  w: { points:  4, amount:  2 },
  x: { points:  8, amount:  1 },
  y: { points:  4, amount:  2 },
  z: { points: 10, amount:  1 },
  blank: { points: 0, amount: 2}
  
}
const tileNames = [];

Object.keys(letters).forEach(key => {
            tileNames.push(
                <div>{key}</div>
            )
        });

const tileProps = Object.keys(letters).map((key) => {
    return Object.keys(key).map((entry) => {
        return <div>{letters[entry]}</div>
    })
})

const tilePropstest = Object.keys(letters)[0]

    //for (let i = 0; i < 20; i++) {
    //let letter = tileNames[i];
    //let tileProp = Object.keys(letters)[i];
    //tileProps.push(tileProp)
    //}


function Tile() {
    return (
        <div>
        <div>{tileNames}</div>
        <div>{tileProps}</div>
        <div>{tilePropstest}</div>
        </div>
    )
}

export default Tile;