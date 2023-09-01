import React from "react"
import styles from './projects.module.css'
import {AiOutlineFolder,AiFillGithub} from 'react-icons/ai'
import {BiLinkExternal} from 'react-icons/bi'


export default function Projects(){
    const projects = [
    {
        title:"QuickBuck", 
        gitRepo:"https://github.com/overflow68/backendquickbuck",
        liveDemo:"https://overflow68.github.io/quickbuck/#/",
        description:"My first REST API. an e-commerce application that handles login, authentication, authorization and CRUD operations to a MongoDB database. Bare bones front-end for demonstration. ",
        techStack:["MongoDB","ExpressJs","React","NodeJs"] ,
        
    },{
        title:"Armonios-core", 
        gitRepo:"https://github.com/overflow68/Armonios-core",
        liveDemo: false,
        description:"Armonios-core is a JavaScript class that enables the management of a Bitcoin wallet, including key generation, address creation, broadcasting transactions, and interaction with the Bitcoin blockchain.",
        techStack:["NodeJs","BitcoinJS-lib","bip32","bip39"],
        
    }]
    
    return(
        <div id ="projects">
            <h1 className={styles.title}>/ projects</h1>
            <div className={styles.cont}>
                 {projects.map(project =>{
                return <div key = {project.title} className={styles.item}>
                    <div className={styles.upperLinks}>
                        <AiOutlineFolder color="rgb(53, 255, 255)" className={styles.icon} size={50}/>
                        <a target="_blank" href={project.gitRepo}><AiFillGithub className={styles.icon2} size={30}/></a>
                        {project.liveDemo?<a target="_blank" href={project.liveDemo}><BiLinkExternal className={styles.icon2} size={30}/></a>:null}
                        </div>
                        <h2 className={styles.pTitle}>{project.title}</h2>
                        <p className={styles.desc}>
                            {project.description}
                            </p>
                        <div className={styles.stack}>
                            {project.techStack.map(item =>{
                                return <p key = {item.title} className={styles.desc1}>{item},&nbsp; </p>
                            })}
                        </div>
                </div>
            })}
            </div>
           
        </div>
       
    )
}
