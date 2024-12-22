```javascript
// FlatListBugSolution.js
import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';

const DATA = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

const Item = ({ item, index }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item}</Text>
  </View>
);

const App = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => <Item item={item} index={index} />}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default App;
```