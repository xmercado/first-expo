import { StatusBar } from 'expo-status-bar';
import React from 'react';
// must use components from React Native
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style ={styles.blue}>
      {/* onPress={() => Linking.openURL('http://google.com')} */}
        <Text onPress={() => console.log('MENU PRESSED')}>
          Home</Text>
        <Text>About</Text>
        <Text>Contact</Text>
      </View>
      <View style={styles.orange}>

      </View>
      <View style={styles.yellow}>
        <Text>Home | About | Contact</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// default flex direction: mobile=column, desktop=row

const styles = StyleSheet.create({
  container: {
    // can use Chrome inspection to see flex visually
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-evenly',
    // for desktop
    // flexDirection: 'row',
  },
  blue: {
    width: '100%',
    // 100 is native size for screen pixel density
    height: 100,
    backgroundColor: 'blue',
  },
  orange: {
    width: '100%',
    height: 'calc(100% - 150px)',
    backgroundColor: 'orange',
  },
  yellow: {
    width: '100%',
    height: 50,
    backgroundColor: 'yellow',
  },
});
