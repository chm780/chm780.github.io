import h from "./h.png";

function Text() {

    return (
        <div style = {{justifyContent: 'center', display :'flex'}}>
        <img src = {h} style={{ width: '10%', height: '10%', padding : '3%' }}></img>
        <p style = {{textAlign : 'left',fontSize : '200%'}}>I am a Computer Science Undergraduate at NUS and <br/>
        quite in love with Computer Security and AI. <br/>
        <br/>
        Besides computers, I love playing basketball, badminton, cycling and doing art. 
        <br/> 🐳 okay cool, have fun visiting
            </p>
        </div>
    )
}

export default Text;