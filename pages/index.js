import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
    const [bet,setBet] = useState([0,0,0,0,0,0]);

    useEffect(() => {
        createBet();
    }, []);
    
    function createBet() {
        const min = Math.ceil(1);
        const max = Math.floor(60);
        let picked = [];
        let number = 0;

        for( var i = 0; i < 6; i++) {
            number = Math.floor(Math.random() * (max - min + 1)) + min
            
            if( !picked.includes(number) ) {
                picked.push(number)
            } else {
                i--;
            }
        }

        picked.sort(function(a, b){return a - b});
        setBet(picked);
    }

    return (
        <div className={styles.container}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                
                <title>Fezinha</title>
            </Head>

            <div className={styles.bet}>
                <div className={styles.number}>{bet[0].toString().padStart(2, "0")}</div>
                <div className={styles.number}>{bet[1].toString().padStart(2, "0")}</div>
                <div className={styles.number}>{bet[2].toString().padStart(2, "0")}</div>
                <div className={styles.number}>{bet[3].toString().padStart(2, "0")}</div>
                <div className={styles.number}>{bet[4].toString().padStart(2, "0")}</div>
                <div className={styles.number}>{bet[5].toString().padStart(2, "0")}</div>
            </div>

            <div className={styles.button}>
                <button onClick={createBet}>Gerar nova aposta</button>
            </div>
        </div>
    )
}
