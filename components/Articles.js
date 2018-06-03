import React, { Component } from 'react';
import Article from './Article';

class Articles extends Component {
  render() {
    let articles;

    if(this.props.articles) {
      articles = this.props.articles.map(article => {
        return (
          <Article key = {article.id} article = {article} />
        );
      });
    }

    return (
      <div>
        My Articles
        {articles}
      </div>
    );
  }
}

export default Articles;
