import React, {
  Component,
  PropTypes,
} from 'react';

import {
  Text,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';

import { connect } from 'react-redux';

class WizardNav extends Component {
  static propTypes = {
    routes: PropTypes.object
  };
  render(){
    return (
      <TouchableHighlight
        style={styles.button}>
        <Text style={styles.text}>{this.props.type}</Text>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    borderBottomColor: '#EC5C4A',
    borderBottomWidth: 2,
    height: 40
  },
  text: {
    fontSize: 18,
    fontFamily: 'Optima-BoldItalic',
    color: "#EC5C4A"
  },

});


export default connect(({routes}) => ({routes}))(WizardNav);
