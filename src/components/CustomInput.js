import React, {
  Component,
  PropTypes,
} from 'react';

import {
  View,
  StyleSheet,
  TextInput
} from 'react-native';

import { connect } from 'react-redux';

class CustomInput extends Component {
  static propTypes = {
    routes: PropTypes.object
  };
  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={this.props.type}
          placeholderTextColor="#A0A393"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    borderBottomColor: '#A0A393',
    borderBottomWidth: 2,
    marginBottom: 20,
  },
  textInput: {
    paddingBottom: 2,
    height: 35,
    fontSize: 18,
    fontFamily: 'Optima-BoldItalic'
  },

});


export default connect(({routes}) => ({routes}))(CustomInput);
