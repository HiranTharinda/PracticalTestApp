import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,

} from 'reactstrap';

class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default NavigationBar;