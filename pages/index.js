import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [size, setSize] = useState(0);
    const [numbers, setNumbers] = useState([]);
    let picked = [];

    useEffect(() => {
        console.log(numbers)
    }, [numbers])

    useEffect(() => {
        if(size !== 0) createBet()
    }, [size])
    
    function createBet() {
        const min = Math.ceil(1);
        const max = Math.floor(60);
        let number = 0;
        picked = []

        for( var i = 0; i < size; i++) {
            number = Math.floor(Math.random() * (max - min + 1)) + min
            
            if( !picked.includes(number) ) {
                picked.push(number)
            } else {
                i--;
            }
        }

        picked.sort(function(a, b){return a - b});
        setNumbers(picked)
    }

    function handleAnswer(newSize) {
        setSize(newSize)
    }

    function newBet() {
        setSize(0)
    }

    function showBet() {
        const bet = numbers.map((number) => <div key={`bet-${number}`} className={styles.number}>{number}</div>)
        
        return(
            <>
                <div className={styles.bet}>
                    {bet}
                </div>

                <div className={styles.button}>
                    <button onClick={newBet}>Voltar</button>
                    <button onClick={() => createBet()}>Gerar nova aposta</button>
                </div>
            </>
        )
    }

    function showQuestion() {
        return (
            <div className={styles.question}>
                    <div className={styles.title}>Deseja gerar um jogo com quantas dezenas?</div>
                    
                    <div className={styles.questionAnswer}>
                        <div className={styles.answer} onClick={() => handleAnswer(6)}>06</div>
                        <div className={styles.answer} onClick={() => handleAnswer(7)}>07</div>
                        <div className={styles.answer} onClick={() => handleAnswer(8)}>08</div>
                        <div className={styles.answer} onClick={() => handleAnswer(9)}>09</div>
                        <div className={styles.answer} onClick={() => handleAnswer(10)}>10</div>
                        <div className={styles.answer} onClick={() => handleAnswer(11)}>11</div>
                        <div className={styles.answer} onClick={() => handleAnswer(12)}>12</div>
                        <div className={styles.answer} onClick={() => handleAnswer(13)}>13</div>
                        <div className={styles.answer} onClick={() => handleAnswer(14)}>14</div>
                        <div className={styles.answer} onClick={() => handleAnswer(15)}>15</div>
                    </div>
                </div>
        )
    }

    return (
        <div className={styles.container}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                
                <title>Fezinha</title>
            </Head>

            {size === 0 ? showQuestion() : showBet()}
        </div>
    )
}
