import styles from './sidebar.module.css'
import {AiOutlineMail,AiFillGithub,AiFillLinkedin} from 'react-icons/ai'




export default function Sidebar(){
    const iconSize = 20
    const emailAddress = 'nicolitoiu.gabriel23@gmail.com';
    const links = {
        email: `mailto:${emailAddress}`,
        github:"https://github.com/overflow68",
        linkedIn:"https://www.linkedin.com/in/gabriel-nicolitoiu-184711249/"
    }

  

    return(
        <div className={styles.sidebar}>
           
           <a href='#intro'><div className={styles.option}>/home</div></a>
               <a href='#about'> <div className={styles.option}>/about</div></a>
               <a href='#projects'><div className={styles.option}>/projects</div></a>
                
                <div className={styles.contact}>
                    <a href = {links.email} target="_blank"><AiOutlineMail className={styles.icon} size={iconSize}/></a>
                    <a href ={links.github} target="_blank"><AiFillGithub className={styles.icon} size={iconSize}/></a>
                    <a href = {links.linkedIn} target="_blank"><AiFillLinkedin className={styles.icon} size={iconSize}/></a>
                </div>
        </div>
    )
}
