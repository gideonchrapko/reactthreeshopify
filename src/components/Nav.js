import React from 'react'


class Nav extends React.Component {
  render () {
    return(
      <div className="nav">
        <ul>
          <li className="contact"><button onClick={this.props.handleCartOpen}>Cart</button></li>
        </ul>
      </div>
    )
  }
}

export default Nav;