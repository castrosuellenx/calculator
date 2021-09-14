import React from 'react';
import {Text, TouchableHighlight, StyleSheet, Dimensions} from 'react-native';

const Button = ({label, onClick, double, triple, operation}) => {
  const stylesButton = [styles.button];
  if (double) {
    stylesButton.push(styles.buttonDouble);
  }
  if (triple) {
    stylesButton.push(styles.buttonTriple);
  }
  if (operation) {
    stylesButton.push(styles.operationButton);
  }

  return (
    <TouchableHighlight onPress={() => onClick(label)}>
      <Text style={stylesButton}>{label}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#85A6FF',
    textAlign: 'center',
    borderWidth: 0.7,
    borderColor: '#D5E4FB',
  },
  operationButton: {
    color: '#fff',
    backgroundColor: '#203D87',
  },
  buttonDouble: {
    width: (Dimensions.get('window').width / 4) * 2,
  },
  buttonTriple: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
});

export default Button;
