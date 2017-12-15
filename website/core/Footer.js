/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  baseUrl() {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl.endsWith('/')? baseUrl : baseUrl + '/';
  }

  url(path) {
    const base = this.baseUrl();
    return base + path;
  }

  pageUrl(page) {
    const base = this.baseUrl();
    const lang = this.props.language;
    return base + lang + '/' + page;
  }

  docUrl(doc) {
    const base = this.baseUrl();
    const lang = this.props.language;
    return [ base + 'docs', lang, doc ].join('/')
  }

  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.baseUrl()} className="nav-home">
            <img
              src={this.url(this.props.config.footerIcon)}
              alt={this.props.config.title}
              width="66"
              height="58"
            />
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('installation.html')}>
              Getting Started
            </a>
            <a href={this.docUrl('logger.html')}>
              Guides
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={this.url('blog')}>Blog</a>
            <a href="https://github.com/richardzcode/fsts-js">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/facebook/docusaurus/stargazers"
              data-show-count={true}
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
