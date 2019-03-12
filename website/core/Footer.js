/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    const langPart = `${language ? `${language}/` : ""}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : "") + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl("doc1.html", this.props.language)}>
              Getting Started
            </a>
            <a href={this.docUrl("doc2.html", this.props.language)}>Guides</a>
            <a href={this.docUrl("doc3.html", this.props.language)}>
              API Reference
            </a>
          </div>
          <div>
            <h5>Community</h5>
            <a
              href="http://stackoverflow.com/questions/tagged/div"
              target="_blank"
              rel="noreferrer noopener"
            >
              Stack Overflow
            </a>
            <a href="https://discord.gg/fMMMffv" target="_blank">
              <img
                alt="Discord Shield"
                src="https://discordapp.com/api/guilds/555099193597755412/widget.png?style=shield"
                title="Join our community on Discord"
              />
            </a>
            <a
              href="https://gitter.im/div-js/users?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge"
              target="_blank"
            >
              <img
                alt="Gitter Shield"
                src="https://badges.gitter.im/div-js/users.svg"
                title="Join our community on Gitter"
              />
            </a>
            <a
              href="https://spectrum.chat/div"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                alt="Spectrum Shield"
                src="https://withspectrum.github.io/badge/badge.svg"
                title="Join our community on Spectrum"
              />
            </a>
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.baseUrl}blog`}>Blog</a>
            <a href="https://github.com/div-js">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/div-js/div/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub"
            >
              Star
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
