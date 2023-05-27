import MenuBar from "./MenuBar";
import Text from "./Text"
import Skills from "./Skills";
import Links from "./Links";
import Projects from "./Projects";
import Exp from "./Exp";
import cute from "./cute.jpg";
function chm252() {
    return (
        <div className="App">
        <header className="App-header">
          <h1>Hello ☺️</h1>
          <h1>I am Hong Ming</h1>
          <Links/>
        </header>
        <MenuBar/>
        <main>
        <Text/>
        </main>
        <Skills/>
        <Projects/>
        <Exp/>
        <footer style = {{ paddingTop : '5%'}}>
          <p style = {{fontSize:'157%'}}>Thanks for visiting!</p>
          <img src = {cute} style = {{width:'10%'}}/>
        </footer>
      </div>
    );
}

export default chm252;