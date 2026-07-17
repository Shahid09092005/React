// Create an arrow function
// import nav from 'src/components' -> incorrect
import Nav from "./components/nav.jsx";
import Navitems from "./components/navitems.jsx"
const App = () => {
    return (
        <>
        <Nav/>
        <Navitems/>
        <div> Hello asdf</div>
        <div>
           sdfasdf
           <h1>Pushing to Github</h1>
        </div>
        </>

    )
}

export default App