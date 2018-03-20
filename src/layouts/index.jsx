import React from 'react';
import Helmet from 'react-helmet';
import '../assets/scss/init.scss';

class Layout extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <div className="layout">
        <Helmet defaultTitle="Закат">
          <html lang="ru" />
          <meta name="yandex-verification" content="5b5ac39133f16a29" />
          <meta name="google-site-verification" content="nA2CqNDvZBVM828oWww_Gh-Ntvd3JBioqDgjXwG_3u4" />
        </Helmet>
        {children()}
      </div>
    );
  }
}

export default Layout;
