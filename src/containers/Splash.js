import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

import { connect } from 'react-redux';
import WizardNav from '../components/WizardNav';

class Splash extends Component {
  static propTypes = {
    routes: PropTypes.object
  };
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.outsideBorder}>
          <View style={[styles.halfView, styles.imageContainer]}>
            <Image style={styles.antiLeftPadding} source={require('../assets/welcomeImage.png')}/>
          </View>
          <View style={styles.halfView}>
            <View style={styles.logoContainer}>
              <Text style={[styles.logoText, styles.avenir]}>MINMAXFIT</Text>
              <Text style={[styles.tagline, styles.avenir]}>MAXIMIZE YOUR STRENGTHS</Text>
            </View>
            <View style={styles.flexWrapper}>
              <TouchableHighlight style={styles.videoIntro}>
                <View style={styles.buttonContainer}>
                  <View style={styles.iconCircle}>
                    <Image />
                  </View>
                  <Text style={[styles.videoText, styles.buttonText, styles.optima]}>Video Introduction</Text>
                </View>
              </TouchableHighlight>
              <WizardNav type="Get Started" />
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EC5C4A',
  },
  outsideBorder: {
    flex: 1,
    margin: 5,
    backgroundColor: '#F7FAEB',
    paddingLeft: 30,
    alignSelf: 'stretch'
  },
  halfView: {
    flex: 1,
    alignSelf: 'stretch'
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  avenir: {
    fontFamily: "AvenirNext-Bold"
  },
  optima: {
    fontFamily: "Optima-BoldItalic"
  },
  logoText: {
    fontSize: 32,
    height: 34,
    marginLeft: -1
  },
  tagline: {
    fontSize: 13,
  },
  flexWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    paddingTop: 30,
    paddingBottom: 50
  },
  buttonText: {
    color: '#EC5C4A'
  },
  videoText: {
    fontSize: 15
  },
  getStartedText: {
    fontSize: 18
  },
  borderButton: {
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderBottomColor: '#EC5C4A',
    paddingBottom: 10
  },
  iconCircle: {
    backgroundColor: '#EC5C4A',
    borderRadius: 18,
    width: 18,
    height: 18,
    marginRight: 7
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  antiLeftPadding: {
    marginLeft: -30
  }
});


export default connect(({routes}) => ({routes}))(Splash);
