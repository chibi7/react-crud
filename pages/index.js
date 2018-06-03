import React, { Component } from 'react';
import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Articles from '../components/Articles';

class Index extends Component {
  render() {
    return (
      <Layout>
        <div>
          <h1>Welcome kitty!</h1>
          <Articles articles={this.props.articles}/>
        </div>
      </Layout>
    );
  }
}

Index.getInitialProps = async function() {
  const res = await fetch('http://localhost:4000/articles');
  const data = await res.json();

  return {
    articles: data
  };
}

export default Index;
