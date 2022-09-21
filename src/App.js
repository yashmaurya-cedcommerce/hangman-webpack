import React, { useEffect, useState } from 'react';
import Game from './Game';

export default function App() {

    const [word, setWord] = useState('');
    const [renderWord, setRenderWord] = useState([]);
    const [wordArray, setWordArray] = useState(['lion', 'tiger', 'goat', 'horse', 'donkey', 'dog', 'cat', 'pig', 'cheetah', 'cow', 'camel', 'snake', 'owl']);

    const [hintsArray, setHintsArray] = useState(['Im the king of the Jungle', 'About to be extinct', 'Im one of the cleanliest animals', 'I can sleep standing up', 'I have an incredible memory', 'Im the most popular domestic animal ever', 'I spend 70% of my life sleeping', 'I have a very powerful nose', 'Im the fastest animal on Earth', 'Im responsible for most of the traffic jams you get stuck in', 'Im mostly found in deserts', 'I have over 3000 species', 'I stay up all night']);

    const [wrongKeys, setWrongKeys] = useState([]);

    const [winner, setWinner] = useState(0);

    const [allLetters, setAllLetters] = useState(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']);

    const [imageArray, setImageArray] = useState(['./images/0.png', './images/1.png', './images/2.png', './images/3.png', './images/4.png', './images/5.png', './images/6.png']);


    const changeWord = (event) => {
        setWord(wordArray[Math.floor(Math.random() * wordArray.length)]);
        setRenderWord([]);
        setWrongKeys([]);
    }

    const letterPressed = (event, letter) => {

        if (word.split("").includes(letter.toLowerCase())) {
            if (renderWord.includes(letter.toLowerCase()) == false) {
                if (wrongKeys.length < 6) {
                    setRenderWord(prevArray => [...prevArray, letter.toLowerCase()]);
                }
                // only six mistakes are allowed and if all of them are committed
                else if (wrongKeys.length == 6) {
                    setWord(wordArray[Math.floor(Math.random() * wordArray.length)]);
                    setRenderWord([]);
                    setWrongKeys([]);
                }
            }
        }
        else {
            if (wrongKeys.length < 6) {
                setWrongKeys(prevArray => [...prevArray, letter]);
            }
            else {
                setWord(wordArray[Math.floor(Math.random() * wordArray.length)]);
                setRenderWord([]);
                setWrongKeys([]);
            }
        }
    }

    const continueClicked = (event) => {
        setWord(wordArray[Math.floor(Math.random() * wordArray.length)]);
        setRenderWord([]);
        setWrongKeys([]);
    }

    const playAgain = (event) => {
        setWord(wordArray[Math.floor(Math.random() * wordArray.length)]);
        setRenderWord([]);
        setWrongKeys([]);
    }

    useEffect(() => {
        setWord(wordArray[Math.floor(Math.random() * wordArray.length)]);
    }, [])


    return (
        <div className='App'>

            <Game changeWord={changeWord} word={word} allLetters={allLetters} letterPressed={letterPressed} wrongKeys={wrongKeys} renderWord={renderWord} imageArray={imageArray} continueClicked={continueClicked} winner={winner} playAgain={playAgain} wordArray={wordArray} hintsArray={hintsArray} />

        </div>
    )
}
