'use client'
import styles from './intro.module.css'
import Hourglass from './hourglass'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';





export default function Intro(){

    const emailAddress = 'nicolitoiu.gabriel23@gmail.com';
    
    const handleClick = () => {
        const mailtoLink = `mailto:${emailAddress}`;
        window.location.href = mailtoLink;
      };
    return(
        <div id='intro'>
            <Hourglass/>
            <div className={styles.cont}>
                <div className = {styles.typewriter}>
                    <h2 className={styles.text}>hi, <span className={styles.name}>Gabriel</span> here.</h2>
                </div>
                
            </div>
            <h2 className={styles.sub}>Emboldened by the flame of ambition.</h2>
            <div className={styles.introP}>I'm a self-taught JavaScript developer fascinated by backend applications and scalability. 
                Through endless curiosity and determination, I've explored into crafting efficient solutions, 
                architecting databases, and embracing the challenge of creating robust systems.
                </div>
               <Button onClick={handleClick} className={styles.btn} variant="outlined">Send me an e-mail</Button>
        </div>
    )
    
}
