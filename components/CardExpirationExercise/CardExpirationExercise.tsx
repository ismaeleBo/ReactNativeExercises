import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, RootStackRouteNames } from '../../App';

interface Card {
  id: number;
  uid: string;
  valid_card: string;
  token: string;
  invalid_card: string;
  month: string;
  year: string;
  ccv: string;
  ccv_amex: string;
}

const CardExpirationExercise = ({
  navigation: { navigate },
}: NativeStackScreenProps<
  RootStackParamList,
  RootStackRouteNames.CardExpirationExerciseScreen
>) => {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        'https://random-data-api.com/api/stripe/random_stripe?size=50',
      );
      const jsonData = response.data as Card[];
      setCards(jsonData);
    } catch (error) {
      console.error(error);
    }
  };

  const filterExpiringCards = (cardItems: Card[]): Card[] => {
    const currentDate = new Date();
    const futureDate = new Date();
    futureDate.setMonth(futureDate.getMonth() + 18);
    const filteredCards = cardItems.filter(card => {
      const expirationDate = new Date(
        parseInt(card.year),
        parseInt(card.month),
        1,
      );
      return expirationDate >= currentDate && expirationDate <= futureDate;
    });
    return filteredCards.sort((a, b) => {
      const dateA = new Date(parseInt(a.year), parseInt(a.month), 1);
      const dateB = new Date(parseInt(b.year), parseInt(b.month), 1);
      return dateA.getTime() - dateB.getTime();
    });
  };

  const expiringCards = filterExpiringCards(cards);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Expiring Cards:</Text>
      <FlatList
        data={expiringCards}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>Card Number: {item.valid_card}</Text>
            <Text>
              Expiration Date: {item.month}/{item.year}
            </Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={styles.navigate}
        onPress={() =>
          navigate(RootStackRouteNames.ChristmasTreeExerciseScreen)
        }>
        <Text>Navigate to next exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    marginBottom: 12,
  },
  container: {
    padding: 20,
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

export default CardExpirationExercise;
