import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const navbarLinks = [
  { title: 'Home', link: '/' },
  { title: 'Projetos', link: '/projetos' },
  { title: 'Competências', link: '/competencias' },
];
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }
  handleMenu = () => {
    this.setState(previousState => ({
      isMenuOpen: !previousState.isMenuOpen,
    }));
  };
  render = () => {
    const { siteTitle } = this.props;
    const { isMenuOpen } = this.state;
    const burgerClass = isMenuOpen ? 'is-active' : '';
    return [
      <nav
        className="navbar has-shadow is-spaced"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <Link className="navbar-item is-size-5" to="/">
            {siteTitle}
          </Link>
          <button
            className={`navbar-burger ${burgerClass}`}
            type="button"
            aria-label="menu"
            onClick={this.handleMenu}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
        <div className={`navbar-menu ${burgerClass}`}>
          <div className="navbar-end">
            {navbarLinks.map(navbarLink => [
              <Link
                className={'navbar-item is-size-6'}
                to={navbarLink.link}
                key={navbarLink.title}
              >
                {navbarLink.title}
              </Link>,
            ])}
          </div>
        </div>
      </nav>,
    ];
  };
}

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
