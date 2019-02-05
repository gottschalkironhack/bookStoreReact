import React, { Fragment } from 'react';
import {
  Navbar,
  Nav,
  NavbarBrand,
  Collapse,
  NavItem,
  Container,
} from 'reactstrap';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Dashboard from './Dashboard';
import Page404 from './Errors/404';
import CreateEditBookContainer from './CreateEditBookContainer/CreateEditBookContainer';


const Navigation = () => {
  return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Bookstore</NavbarBrand>
          <button
            type="button"
            className="navbar-toggler collapsed"
            data-toggle="collapse"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Collapse className="navbar-collapse">
            <Nav className="ml-sm-auto navbar-nav">
              <NavItem className="p-2">
                <NavLink activeClassName="active" to="/">Dashboard</NavLink>
              </NavItem>
              <NavItem className="p-2">
                <NavLink activeClassName="active" to="/addbook">Add Book</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Container className="content mt-8">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/editbook/:id" component={CreateEditBookContainer} />
            <Route exact path="/addbook" component={CreateEditBookContainer} />
            <Route component={Page404} />
          </Switch>
        </Container>
      </Fragment>
  );
};

export default Navigation;
