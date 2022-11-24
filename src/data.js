import coll from "./images/coll.jpg"
import whatzipp from "./images/whatzipp.jpg"
import tiktik from "./images/tiktik.jpg"

import vue from "./images/vue.png"
import firebase from "./images/firebase.png"
import github from "./images/github.png"
import react from "./images/react.png"
import next from "./images/next.png"
import nuxt from "./images/nuxt.png"
import tailwind from "./images/tailwind.png"
import sanity from "./images/sanity.png"

export default {
 
    name: "Evandro",
    email: "thecodexdev@gmail.com",
    img: "https://avatars.githubusercontent.com/u/99356220?v=4",
    description: [
            "I'm Evandro",
            "I'm a Developer", 
            "I'm a Youtuber",
    ],

    projects: [
        {
            name: "Coll9",
            description: "Create Collections and add items to them",
            image: coll,
            link: "https://coll-nine.vercel.app/",
            github: "https://github.com/EvandrooViegas/Coll"
        },
        {
            name: "Whatzipp",
            description: "Simple Chat App made with firebase and react",
            image: whatzipp,
            link: "https://whatzipp.vercel.app/register",
            github: "https://github.com/EvandrooViegas/whatzipp"
        },
        {
            name: "Tiktik",
            description: "Simple Tiktok clone, project from Javascript Maestry",
            image: tiktik,
            link: "https://tiktik-seven.vercel.app/",
            github: "https://github.com/EvandrooViegas/tiktik"
        },
    ],

    skills: [
        {
            name: "Vue",
            level: 2,
            image: vue,
        },
        {
            name: "Firebase",
            level: 2,
            image: firebase,

        },
        {
            name: "Github",
            level: 2,
            image: github,
        },
        {
            name: "React",
            level: 3,
            image: react,
        },
        {
            name: "Next",
            level: 3,
            image: next,
        },        
        {
            name: "Nuxt",
            level: 3,
            image: nuxt,
        },
        {
            name: "Sanity",
            level: 3,
            image: sanity,
        },
        {
            name: "Tailwind",
            level: 3,
            image: tailwind,
            
        },

    ]
    
} 