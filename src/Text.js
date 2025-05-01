import h from "./h.png";

function Text() {

    return (
        <div style = {{justifyContent: 'center', display :'flex'}}>
        <img src = {h} style={{ width: '10%', height: '10%', padding : '3%' }}></img>
        <p style = {{textAlign : 'left',fontSize : '200%'}}>A software engineer who has <br/>
        graduated from NUS Computer Science. <br/>
        <br/>
        Besides computers, I love playing basketball, badminton, cycling and doing art. 
        <br/> 🐳 
            </p>
        </div>
    )
}

export default Text;
