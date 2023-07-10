import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const ChristmasTreeExercise = () => {
  const [height, setHeight] = useState<string>('');
  const [treeRows, setTreeRows] = useState<string[]>([]);

  const generateTree = () => {
    const treeHeight = parseInt(height);
    const rows: string[] = [];

    for (let i = 0; i < treeHeight; i++) {
      const stars = '*'.repeat(i * 2 + 1);
      const row = stars;
      rows.push(row);
    }

    rows.push('*');
    rows.push('*');
    rows.push('*');
    setTreeRows(rows);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Christmas Tree Generator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter tree height"
        value={height}
        onChangeText={setHeight}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={generateTree}>
        <Text>Generate</Text>
      </TouchableOpacity>
      <View style={styles.centerContainer}>
        <View style={styles.treeContainer}>
          {treeRows.map((row, index) => (
            <Text key={index} style={styles.treeRow}>
              {row}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    marginTop: 8,
    backgroundColor: '#dfa',
    alignSelf: 'center',
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  treeContainer: {
    marginTop: 20,
    alignItems: 'center',
    transform: [{ rotate: '90deg' }],
  },
  treeRow: {
    width: '100%',
  },
});

export default ChristmasTreeExercise;
