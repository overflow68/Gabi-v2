'use client'
import styles from './intro.module.css'
import Hourglass from './hourglass'
import './btn.css'




export default function Intro(){

    const emailAddress = 'nicolitoiu.gabriel23@gmail.com';
    
    const handleClick = () => {
        const mailtoLink = `mailto:${emailAddress}`;
        window.location.href = mailtoLink;
      };
    return(
        <div id='intro'>
            
            <div className={styles.cont}>
                <div className = {styles.typewriter}>
                    <h2 className={styles.text}>hi, <span className={styles.name}>Gabriel</span> here.</h2>
                </div>
                
            </div>
            <h2 className={styles.sub}>Functionality over everything.</h2>
            <div className={styles.introP}>I'm a self-taught JavaScript developer fascinated by backend applications and scalability. 
                Through endless curiosity and determination, I've explored into crafting efficient solutions, 
                architecting databases, and embracing the challenge of creating robust systems.
                </div>
               
               <button onClick={handleClick} className='glowing-btn'><span className='glowing-txt'>S<span className='faulty-letter'>e</span>nd me an Email</span></button>
        </div>
    )
    
}
