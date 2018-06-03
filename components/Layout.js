import React, { Component } from 'react';
import Head from 'next/head';

class Layout extends Component {
  render() {
    return (
      <div>
        <Head>
          <title>Articles manager</title>
          <link rel="stylesheet" href="https://bootswatch.com/4/sketchy/bootstrap.min.css"/>
        </Head>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Layout;
