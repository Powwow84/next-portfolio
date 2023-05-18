// @ means start in the project root directory (aka where the package json)
import styles from '@/styles/About.module.css'
import {useState} from 'react'
import Image from "next/image"

export default function About() {
    const [fontSize, setFontSize] = useState(3)
    return(
        <div>
            {/* styled jsx example */}
            <style jsx>{`.bigheader {
                font-size: ${fontSize}rem;
            }
            `}</style>
            <h1 className="bigHeader">About Me</h1>
            <button onClick={() => setFontSize(fontSize + 1)}>++</button>
            <p className={styles.greenText}>I am a super cool software engineer now. I make all kinds of neat projects with the codes</p>

            {/* local images are stored in a public folder */}
            <Image
                src='/next.svg'
                alt='next logo'
                // next Image componenets Need a predefined pixel height and width
                width={400}
                height={400}

            />

            {/* <Image 
                src='https://imgur.com/bRlgS3b'
                alt="Cat"
                width={450}
                height={450}
            /> */}
        </div>
    )
}