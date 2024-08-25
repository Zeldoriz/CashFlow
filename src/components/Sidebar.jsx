import "./Sidebar.css";
import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div id="sidebar-container">
      <div className="sidebar-title">
        <p>
          <span className="">Cash</span>
          <span className="purple">Flow</span>
        </p>
      </div>
      <div id="purple-line"></div>
      <LinkContainer to="/" className="sidebar-child">
        <Nav.Link>
          <p>Home</p>
        </Nav.Link>
      </LinkContainer>
      <LinkContainer to="/track" className="sidebar-child">
        <Nav.Link>
          <p>Expense Tracker</p>
        </Nav.Link>
      </LinkContainer>
    </div>
  );
};

export default Sidebar;
