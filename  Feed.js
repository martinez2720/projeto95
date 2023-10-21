import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Feed = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
       Feed
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default Feed;
