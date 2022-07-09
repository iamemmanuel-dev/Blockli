import {View, Text, ScrollView, StyleSheet, StatusBar} from 'react-native';
import React from 'react';
import {mainCardContent, listCardContent} from '../data/mockup';
import MainCard from '../components/MainCard';
import ListCard from '../components/ListCard';

const Home = () => {
  return (
    <>
      <View style={styles.screen}>
        <View style={styles.screen_top}>
          <Text style={styles.mainTitle}>Memberships</Text>
          <View style={styles.row}>
            {mainCardContent.map(item => (
              <MainCard key={item.id} item={item} />
            ))}
          </View>
        </View>

        <View>
          <Text style={styles.mainTitle}>Memberships</Text>
          {listCardContent.map(item => (
            <ListCard key={item.id} item={item} />
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 20,
  },

  mainTitle: {
    fontFamily: 'NotoSans-Bold',
    marginBottom: 30,
    fontSize: 16,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default Home;
