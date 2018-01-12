const React = require('react');
const { H2, Div } = require('fluid-react');

const Button = require('./Button.js');

class HomeSplash extends React.Component {
  render() {
    const { site } = this.props;
    return (
      <Div style={site.theme.homeSplash}>
        <H2 style={site.theme.title}>
          {site.config.title}
          <Div style={site.theme.tagline}>{site.config.tagline}</Div>
        </H2>
        <Div style={site.theme.promoSection}>
          <Button site={site} href={site.docUrl('installation')}>Getting Started</Button>
          <Button site={site} href={site.docUrl('guide_logger')}>Guide</Button>
        </Div>
      </Div>
    );
  }
}

module.exports = HomeSplash;
