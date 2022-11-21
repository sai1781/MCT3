// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react';
import './Navbar.css';

// import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample({function3}) {
  const[b_color, setB_color] = useState("");

  console.log(b_color)


  const theme = (e) =>{
    // console.log(e.target.checked)
    if(e.target.checked === true){
      setB_color(true)
    }else{
      setB_color(false)
    }
  }
  function3(b_color);

  // if(b_color === checked){
  //   console.log("saiisaii")
  // }


  return (
    <div className={b_color === true ? "navbar1 Dark" : "navbar1 White" } >
  

      {/* <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">TextUtils</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link"></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
       
    </Navbar> */}
      <p>TextUtils.js</p>
      <p>TextUtils.js</p>
      <div className='toggle'>
        <input type="checkbox" onChange={theme} />
        <label>Dark-mode Enable</label>
      </div>
    </div>
  );
}

export default BasicExample;