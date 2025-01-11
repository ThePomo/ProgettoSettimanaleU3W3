import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import logo from "../assets/netflix_logo.png";
import avatar from "../assets/avatar.png";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-4">
      <Container fluid>
        <Navbar.Brand href="index.htm">
          <img src={logo} alt="Netflix Logo" className="navbar-logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="me-auto">
            <Nav.Link href="index.htm">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>

          <div className="search-icon d-flex align-items-center">
            <Nav.Link href="#" className="navbar-avatar me-3">
              <img src={avatar} alt="Avatar" className="navbar-avatar" />
            </Nav.Link>

            <NavDropdown
              title=""
              id="basic-nav-dropdown"
              align="end"
              className="p-2"
            >
              <NavDropdown.Item href="#">
                <div className="d-flex align-items-center">
                  <img
                    src={avatar}
                    alt="Avatar"
                    className="navbar-avatar me-2"
                  />
                  <span className="testoPiccolo">Epicoder #1</span>
                </div>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Manage Profiles</NavDropdown.Item>
              <NavDropdown.Item href="profile.html">Account</NavDropdown.Item>
              <NavDropdown.Item href="#">Help Center</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">Sign out of Netflix</NavDropdown.Item>
            </NavDropdown>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
