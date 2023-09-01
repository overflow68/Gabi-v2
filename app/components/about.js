import styles from './about.module.css'
import Image from 'next/image'
import {AiOutlineArrowRight} from 'react-icons/ai'
export default function About(){

    const techStack = ["Node.js","React","HTML & CSS", "SQL","MongoDB","Git"]
return(
    <div id="about">
        <h1 className={styles.title}>/ about</h1>
        <div className={styles.me}>
            <div className={styles.textCont}>
            <div className={styles.introP}>Welcome! I'm committed to improving my programming skills,
             with a special emphasis on becoming proficient in <span className={styles.empha}>Node.js </span>
              during my free time. I'm also enthusiastic about <span className={styles.empha}>Bitcoin</span>,
               the electronic cash system and <span className={styles.empha}>football</span>.</div>
               <div className={styles.introP}>Here are some of the technologies i'm comfortable with:</div>
               <div className={styles.gridcont}>
                {techStack.map(item=>{
                return <div key = {item} className={styles.item}> <AiOutlineArrowRight color='rgb(53, 255, 255)'/>{item}</div>
               })}
               </div>
               <div className={styles.introP}>When i'm not coding I like to step away from the computer and do other human activities.</div>
               
               
               </div>
               <Image width={350} height={300} layout='intrinsic' alt ="" className={styles.pic} src={"/mepic.png"} />
        </div>
        
        
            
               
        
        
    </div>
)
}
