import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {colors} from '../themes/colors';
import {globalStyles} from '../utils/styles/globalStyles';

const ListCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.card}>
        <View style={[styles.list]}>
          <View style={styles.listImgBox}>
            <ImageBackground source={item.cardImg} style={styles.listImg}>
              <View style={[globalStyles.badge, styles.badge]}>
                <Text style={[globalStyles.badgeText, styles.badgeText]}>
                  PLUS
                </Text>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.listContent}>
            <Text style={styles.listBoldText}>{item.cardMainTitle}</Text>
            <View style={[styles.listBottom, globalStyles.row]}>
              <Text style={styles.listLightText}>{item.cardTag}</Text>
              <View style={styles.cardAmtContainer}>
                <Text style={styles.cardAmt}>{item.cardPrice}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 20,
  },

  list: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 16,
    shadowOffset: {x: 1, y: 2},
    shadowOpacity: 0.7,
    shadowColor: '#ccc',
    elevation: 2,
  },

  listImgBox: {
    backgroundColor: 'red',
    width: 90,
    height: '100%',
    marginRight: 20,
    borderRadius: 16,
    overflow: 'hidden',
  },

  listImg: {
    height: 90,
    borderRadius: 16,
  },

  listContent: {
    flex: 1,
  },

  listBoldText: {
    fontFamily: 'NotoSans-Bold',
    color: colors.dark_grey,
    fontSize: 14,
  },

  listBottom: {
    marginTop: 8,
    alignItems: 'center',
  },

  listLightText: {
    fontFamily: 'NotoSans-Regular',
    alignSelf: 'flex-end',
    color: colors.light_grey,
  },

  cardAmtContainer: {
    height: 32,
    width: 64,
    backgroundColor: colors.light_orange,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    alignSelf: 'flex-end',
  },

  cardAmt: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#FF8142',
  },

  //badge

  badge: {
    borderRadius: 5,
    top: '8%',
    left: '8%',
  },

  badgeText: {
    padding: 2,
  },
});

export default ListCard;
