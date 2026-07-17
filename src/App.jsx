// Create an arrow function
// import nav from 'src/components' -> incorrect
import Nav from "./components/nav.jsx"
import Navitems from "./components/navitems.jsx"
import Usercard from "./components/userCard.jsx"
const App = () => {
    return (
        <>
        <Nav/>
        <Navitems/> 
        {/* using props : helps in data communication from parent to child . not vice versa */}
        <Usercard 
            userName="Harshit"  
            userAge ={21}  
            userDesc="Full Stack Developer who enjoys creating scalable applications and solving real-world programming challenges."
        />  
        <Usercard 
            userName="Shila" 
            userAge={23}   
            userDesc="Frontend Developer passionate | about React, JavaScript, and |creating beautiful UIs."
        />  
        <Usercard 
            userName="Vibhaw"
            userAge={29}    
            userDesc="Tech learner exploring web development, React, and modern JavaScript while continuously improving coding skills.."
        />  
        <Usercard 
            userName="Zainab" 
            userAge={19}   
            userDesc="UI/UX Enthusiast focused on designing clean, modern, and intuitive user experiences.."
        />     
        <div> Hello asdf</div>
        <div>
           sdfasdf
           <h1>Pushing to Github</h1>
        </div>
        </>

    )
}

export default App