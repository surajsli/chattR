import React, {Component} from 'react';

class Header extends Component {

  render(){
    return (
      <nav className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item">
            <h2>{this.props.title}</h2>
          </a>
        </div>
      </nav>
    )
  }
}
export default Header
