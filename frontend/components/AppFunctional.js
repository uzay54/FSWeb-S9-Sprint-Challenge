import React, { useState } from 'react'

// önerilen başlangıç stateleri



export default function AppFunctional(props) {


  const [pozisyon, setPozisyon] =useState(4);
  function solaGit() {

    let konum;
    let fark;
    
    konum=pozisyon;

    fark=(konum === 0 || konum === 3 || konum === 6)? 0 : 1;

    // if(konum == 0 || konum == 3 || konum == 6){
    //   fark=0
    // } else {
    //   fark=1
    // }
    konum -= fark;

    setPozisyon(konum);
  }

  function sagaGit() {

    let konum;
    let fark;
    
    konum=pozisyon;

    fark=(konum == 2 || konum == 5 || konum == 8)? 0 : 1;

    konum += fark;

    setPozisyon(konum);
  }

  function yukariGit() {

    let konum;
    let fark;
    
    konum=pozisyon;

    fark=(konum == 0 || konum == 1 || konum == 2)? 0 : 3;

    konum -= fark;

    setPozisyon(konum);

  }


  function asagiGit() {

    let konum;
    let fark;
    
    konum=pozisyon;

    fark=(konum == 6 || konum == 7 || konum == 8)? 0 : 3;

    konum += fark;

    setPozisyon(konum);

  }


  function resetle() {

    konum=pozisyon;

    setPozisyon(konum);

  }

  function onSubmit(evt) {
    // payloadu POST etmek için bir submit handlera da ihtiyacınız var.
  }

  return (
    <div id="wrapper" className={props.className}>
      <div className="info">
        <h3 id="coordinates">Koordinatlar (2, 2)</h3>
        <h3 id="steps">0 kere ilerlediniz</h3>
      </div>
      <div id="grid">
        {
          [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
            <div key={idx} className={`square${idx === pozisyon ? ' active' : ''}`}>
              {idx === pozisyon ? 'B' : null}
            </div>
          ))
        }
      </div>
      <div className="info">
        <h3 id="message"></h3>
      </div>
      <div id="keypad">
        <button id="left" onClick={solaGit}>SOL</button>
        <button id="up" onClick={yukariGit}>YUKARI</button>
        <button id="right" onClick={sagaGit}>SAĞ</button>
        <button id="down" onClick={asagiGit}>AŞAĞI</button>
        <button id="reset" onclick={resetle}>RESET</button>
      </div>
      <form>
        <input id="email" type="email" placeholder="email girin"></input>
        <input id="submit" type="submit"></input>
      </form>
    </div>
  )
}
