import Button from 'react-bootstrap/Button';
import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; // Make sure your CSS is imported

function MyNavbar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container fluid>
        <Navbar.Brand>
          <Link to="/home">
            <Image src="AaakaaiLogo.jpg" sqaured className="navbar-logo" style={{height:"35px", width:"70px"}}/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 navbar-links" navbarScroll>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/aboutus">About Us</Nav.Link>
            <Nav.Link as={Link} to="/ourservices">Our Services</Nav.Link>
            <Nav.Link as={Link} to="/ourstrength">Our Strength</Nav.Link>
            <NavDropdown title="Associate Companies" id="navbarScrollingDropdown">
              <NavDropdown.Item as={Link} to='/company1'>Engineer & Associates</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/company2'>Inspection & Testing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/company3'>Consultancy & Training</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contactus">Contact Us</Nav.Link>
          </Nav>
          <div className="d-flex gap-2">
            <Button className="custom-orange-btn" size="sm">Sign Up</Button>
            <Button className="custom-orange-btn" size="sm">Login</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
