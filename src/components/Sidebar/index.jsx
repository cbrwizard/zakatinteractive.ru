import React from 'react';
import addToMailchimp from 'gatsby-plugin-mailchimp'
import get from 'lodash/get';
import Link from 'gatsby-link';

import Menu from '../Menu';
import Links from '../Links';
import logo from './logo.png'
import EmailForm from '../EmailForm'
import './style.scss';

class Sidebar extends React.Component {
  render() {
    const { location } = this.props;
    const { author, subtitle, copyright, menu } = this.props.data.site.siteMetadata;
    const isHomePage = get(location, 'pathname', '/') === '/';

    /* eslint-disable jsx-a11y/img-redundant-alt */
    const authorBlock = (
      <div>
        <Link to="/">
          <img
            src={logo}
            className="sidebar__author-photo"
            alt={author.name}
          />
        </Link>
        { isHomePage ? (
          <h1 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h1>
        ) :
          <h2 className="sidebar__author-title">
            <Link className="sidebar__author-title-link" to="/">{author.name}</Link>
          </h2>
        }
        <p className="sidebar__author-subtitle">{subtitle}</p>
      </div>
    );
    /* eslint-enable jsx-a11y/img-redundant-alt */

    return (
      <div className="sidebar">
        <div className="sidebar__inner">
          <div className="sidebar__author">
            {authorBlock}
          </div>
          <div className="sidebar__email">
            <EmailForm/>
          </div>
          <div>
            <Menu data={menu} />
            <Links data={author} />
            <p className="sidebar__copyright">
              {copyright}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
