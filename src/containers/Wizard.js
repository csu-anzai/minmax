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
import CustomInput from '../components/CustomInput';
import WizardNav from '../components/WizardNav';

class Wizard extends Component {
  static propTypes = {
    routes: PropTypes.object
  };
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.outsideBorder}>
          <View style={styles.wizardHeader}>
            <Text style={[styles.logo, styles.avenir]}>MINMAXFIT SETUP</Text>
            <Text style={[styles.tagline, styles.avenir, styles.buttonText]}>YOUR INFORMATION</Text>
          </View>
          <View style={styles.inputContainer}>
            <CustomInput type="Name" />
            <CustomInput type="Age" />
            <CustomInput type="Weight" />
            <CustomInput type="Gender" />
          </View>
          <View style={styles.wizardFooter}>
            <View style={styles.wizardFooterSmall}>
              <WizardNav type="Skip"/>
            </View>
            <View style={styles.wizardFooterMedium}>
              <WizardNav type="Next"/>
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
  avenir: {
    fontFamily: "AvenirNext-Bold"
  },
  optima: {
    fontFamily: "Optima-BoldItalic"
  },
  logo: {
    fontSize: 16
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
  borderButton: {
    alignSelf: 'stretch',
    borderBottomWidth: 2,
    borderBottomColor: '#EC5C4A',
    paddingBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row'
  },
  antiLeftPadding: {
    marginLeft: -30
  },
  wizardHeader: {
    flex: 1,
    justifyContent: 'center'
  },
  inputContainer: {
    flex: 4
  },
  wizardFooter: {
    flex: 1,
    flexDirection: 'row'
  },
  wizardFooterSmall: {
    flex: 1,
    paddingRight: 25
  },
  wizardFooterMedium: {
    flex: 2
  },
});


export default connect(({routes}) => ({routes}))(Wizard);
