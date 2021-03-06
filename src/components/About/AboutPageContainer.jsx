import React from 'react';
import { connect } from 'react-redux';
import AboutPage from './AboutPage';

let mapStateToProps = (state) => {
  return {
    about: state.about,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

const AboutPageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutPage);

export default AboutPageContainer;
