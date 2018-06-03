import React, { Component } from 'react';

class Article extends Component {
  render() {
    return (
      <li className="article">
        <h2>
          {this.props.article.title}
        </h2>
        <div className="article-content">
          {this.props.article.content}
        </div>
      </li>
    );
  }
}

export default Article;
