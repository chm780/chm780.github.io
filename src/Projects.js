import ml from './MassLinkers.png';
import duke from './duke.png'
import ez from './ezMath.png'
function Projects() {

    return (
        <>
        <h1 className = "TopicFont" id = "projects"> Projects </h1>
        <div className = "ProjectsRow">
            <a className = "imgContainer" target = "_blank" href="https://ay2223s1-cs2103t-t11-4.github.io/tp/">
                <img src={ml} style = {{height : "110%"}}/>
            </a>
            <a className = "imgContainer" target = "_blank" href="https://github.com/chm252/Chatting-Bot-Duke">
                <img src={duke}/>
            </a>
            <a className = "imgContainer" target = "_blank" href="https://github.com/chm252/EzMath">
                <img src={ez}/>
            </a>
        </div>
        </>
    );
}

export default Projects;