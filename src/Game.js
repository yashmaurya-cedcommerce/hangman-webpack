import React from 'react';
import 'animate.css';

export default function Game(props) {

  return (
    <div className='homeContainer'>

      <div className='flexContainer'>

        <div className='firstContainer'>

          <p className='homeHeading'>Hangman</p>

          {(props.wrongKeys.length <= 6) ? <img src={props.imageArray[props.wrongKeys.length]} alt="sdasdas" /> : <img src='./images/gameOver.webp' alt="" />}

          {([...new Set(props.word.split(""))].length == [...new Set(props.renderWord)].length) ? <div className='wonDiv'><h1 className='wonMsg animate__animated animate__tada'>You Won!</h1><button className='wonBtn' onClick={(event) => props.playAgain(event)}>Play Again <i class="fa-solid fa-play"></i></button></div> : ''}

          {(props.wrongKeys.length < 6) ? <p className='livesRemaining'>Lives Remaining : {[...Array(6 - props.wrongKeys.length)].map((item) => {
            return (
              <i class="fa-solid fa-heart" style={{ margin: "0% 1%", color: "rgb(228, 50, 50)" }}></i>
            )
          })}</p> : <>
            <p className='answerReveal'>Answer : <b>{props.word}</b></p>
            <p className='betterLuck animate__animated animate__fadeIn'>Better Luck Next Time!</p>
            <button className='continueBtn' onClick={(event) => props.continueClicked(event)}>Try Again?</button></>}


        </div>

        <div className='secondContainer'>

          <button className='selectWordBtn' onClick={(event) => props.changeWord(event)}>Change Word <i class="fa-solid fa-arrows-rotate"></i></button>

          <div className='puzzleDiv'>
            {props.word.split("").map((item, index) => {
              return (<>
                {(props.renderWord.includes(item)) ? <input type="text" id={index} className='letterInput' value={item.toUpperCase()} readOnly /> : <input type="text" id={index} className='letterInput' value='' readOnly />}
              </>
              )
            })}
          </div>

          {props.wordArray.map((item, index) => {
            if (item === props.word) {
              return (
                <p className='hintPara animate__animated animate__lightSpeedInRight'><b>Hint : </b>{props.hintsArray[index]}</p>
              );
            }
          })}

          <div className='buttonsDiv'>
            {props.allLetters.map((letter) => {
              return (<>
                {(props.wrongKeys.includes(letter)) ? <button className='wrongLetterBtn' onClick={(event) => props.letterPressed(event, letter)}>{letter}</button> : ((props.renderWord.includes(letter.toLowerCase()))?<button className='correctLetterBtn' onClick={(event) => props.letterPressed(event, letter)}>{letter}</button>:<button className='letterBtn' onClick={(event) => props.letterPressed(event, letter)}>{letter}</button>)}
              </>
              )
            })}
          </div>

        </div>

      </div>

    </div>
  )
}
