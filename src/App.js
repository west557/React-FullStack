import logo from './logo.svg';
import './App.css';
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";

const handleClick = () => {
  console.log('You are the best!');
  alert('You have clicked the button');
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={handleClick}>Click Me</Button>
        
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/OIP.E4gCagrjAkQ5td5qjSc3rwHaE7?pid=ImgDet&rs=1"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/R.892bb645c09c766efcc5bc4d0c93094a?rik=slmcvUaa5yToAw&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image.jpg&ehk=c2raFC95S12P3OL0%2fwdM60ro3oUxsSEajkuGEN%2fsjbo%3d&risl=1&pid=ImgRaw&r=0"
      alt="Second slide"
      height="400"
      width="400"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://th.bing.com/th/id/OIP.B4Ec4-406kgvT-zpxluhygHaNK?pid=ImgDet&rs=1"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        <Jumbotron>
      <h1>Hello, My name is Scott</h1>
      <p> 
        I am creating one of my first React Projects.
      </p>
      <p>
        Hope you like my work. 
      </p>
      <p>
        Click the below button to learn more about me. 
      </p>
      <p>
        <Button variant="info">Learn more</Button>
      </p>
    </Jumbotron>
        
        
        
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
