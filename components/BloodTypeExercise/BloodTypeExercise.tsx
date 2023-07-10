import React, { useCallback, useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackRouteNames } from '../../App';

interface BloodType {
  id: number;
  type: string;
  rh_factor: string;
}

const BloodTypeExercise = ({
  navigation: { navigate },
}: NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.BloodTypeExerciseScreen
>) => {
  const [data, setData] = useState<BloodType[]>([]);
  const [filteredData, setFilteredData] = useState<BloodType[]>([]);
  const [filterType, setFilterType] = useState<string | null>(null);
  const [filterRh, setFilterRh] = useState<string | null>(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://random-data-api.com/api/v2/blood_types?size=50',
      );
      const jsonData = response.data as BloodType[];
      setData(jsonData);
      setFilteredData(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const applyFilters = useCallback(() => {
    let filtered: BloodType[] = data;
    if (filterType) {
      filtered = filtered.filter(item => item.type === filterType);
    }
    if (filterRh) {
      filtered = filtered.filter(item => item.rh_factor === filterRh);
    }
    setFilteredData(filtered);
  }, [data, filterRh, filterType]);

  useEffect(() => {
    applyFilters();
  }, [filterType, filterRh, applyFilters]);

  const getBloodTypeSummary = (type: string, rhFactor: string) => {
    const count = data.filter(
      item => item.type === type && item.rh_factor === rhFactor,
    ).length;
    return `${type}${rhFactor}: ${count}`;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Summary:</Text>
        <View style={styles.summary}>
          <Text>Total elements: {data.length}</Text>
          <Text>{getBloodTypeSummary('A', '+')}</Text>
          <Text>{getBloodTypeSummary('A', '-')}</Text>
          <Text>{getBloodTypeSummary('B', '+')}</Text>
          <Text>{getBloodTypeSummary('B', '-')}</Text>
          <Text>{getBloodTypeSummary('AB', '+')}</Text>
          <Text>{getBloodTypeSummary('AB', '-')}</Text>
          <Text>{getBloodTypeSummary('O', '+')}</Text>
          <Text>{getBloodTypeSummary('O', '-')}</Text>
        </View>
        <Text>Filter by Type:</Text>
        <RadioButton.Group
          onValueChange={value => setFilterType(value)}
          value={filterType || ''}>
          <View style={styles.filters}>
            <RadioButton.Item
              label="A"
              value="A"
              color="#000"
              style={styles.radio}
              uncheckedColor="#bba"
            />
            <RadioButton.Item
              label="B"
              value="B"
              color="#000"
              style={styles.radio}
              uncheckedColor="#bba"
            />
            <RadioButton.Item
              label="AB"
              value="AB"
              color="#000"
              style={styles.radio}
              uncheckedColor="#bba"
            />
            <RadioButton.Item
              label="O"
              value="O"
              color="#000"
              style={styles.radio}
              uncheckedColor="#bba"
            />
          </View>
        </RadioButton.Group>

        <Text>Filter by Rh Factor:</Text>
        <RadioButton.Group
          onValueChange={value => setFilterRh(value)}
          value={filterRh || ''}>
          <View style={styles.filters}>
            <RadioButton.Item
              label="+"
              value="+"
              color="#000"
              style={styles.radio}
              uncheckedColor="#bba"
            />
            <RadioButton.Item
              label="-"
              value="-"
              color="#000"
              style={styles.radio}
              uncheckedColor="#bba"
            />
          </View>
        </RadioButton.Group>

        <Text>List of Blood Types:</Text>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <View>
              <Text>ID: {item.id}</Text>
              <Text>
                Blood Type: {item.type}
                {item.rh_factor}
              </Text>
            </View>
          )}
        />
        <TouchableOpacity
          style={styles.navigate}
          onPress={() =>
            navigate(RootStackRouteNames.CardExpirationExerciseScreen)
          }>
          <Text>Navigate to next exercise</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 22,
  },
  summary: {
    marginVertical: 20,
  },
  filters: {
    marginVertical: 20,
    columnGap: 10,
    flexDirection: 'row',
  },
  radio: {
    borderRadius: 30,
    borderWidth: 1,
  },
  navigate: {
    borderRadius: 8,
    padding: 8,
    borderWidth: 1,
    marginTop: 8,
    backgroundColor: '#dfa',
    alignSelf: 'flex-start',
  },
});

export default BloodTypeExercise;
