import logo from './logo.svg';
import './App.css';
import imagesrc from "./imageInSrc.jpg"
import "./style.css"

function App() {
  return (
<div style={{border:"solid 1px black,maxWidth:100vw"}}>

<h1 className="title red">Toumi Omar</h1>

<br></br>

<img src={imagesrc} ></img>

<br></br>

<img src="/imageInPublic.jpg" ></img>



<video width="320" height="240" controls><source src="myVideo.mp4" type="video/mp4" /></video>


</div>


  );
}

export default App;
