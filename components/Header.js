import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 60,
    padding: 15,
    backgroundColor: 'coral',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});

export default Header;
