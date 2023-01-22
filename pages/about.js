import Image from "next/image"

import styles from '../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Baseado na pokédex do universo Pokémon, este site foi criado com a utilização de React e NextJS.
            <br />Github do desenvolvedor: https://github.com/luizfelipemacedoc.</p>
            
            <Image 
            src='/images/pikachu.png' 
            width='300' 
            height='300' 
            alt='Charizard' 
            />
        </div>
    )
}