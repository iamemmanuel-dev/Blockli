import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../themes/colors';
import {globalStyles} from '../utils/styles/globalStyles';

const MainCard = ({item}) => {
  return (
    <TouchableOpacity activeOpacity={0.6}>
      <View style={styles.card}>
        <ImageBackground source={item.cardImg} style={styles.bgImg}>
          <View style={styles.card_desc}>
            <Text style={styles.card_desc_mainText}>{item.cardMainTitle}</Text>
            <Text style={styles.card_desc_subText}>{item.cardDesc}</Text>
            <View style={globalStyles.row}>
              <Text style={styles.card_desc_bottomText}>{item.cardTag}</Text>
              <View style={styles.cardAmtContainer}>
                <Text style={styles.cardAmt}>{item.cardPrice}</Text>
              </View>
            </View>
          </View>

          <View style={[globalStyles.badge, styles.badge]}>
            <Text style={[globalStyles.badgeText, styles.badgeText]}>
              {item.cardBadgeText}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 281,
    height: 309,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 30,
  },

  bgImg: {
    width: '100%',
    height: '100%',
  },

  card_desc: {
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: 10,
    width: '90%',
    left: '5%',
    right: '5%',
    padding: 10,
    paddingHorizontal: 13,
    borderRadius: 16,
  },

  card_desc_mainText: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 14,
    lineHeight: 21,
    marginBottom: 5,
    color: colors.dark_grey,
  },

  card_desc_subText: {
    fontFamily: 'NotoSans-Light',
    fontSize: 8,
    maxWidth: '70%',
    lineHeight: 10,
    color: colors.light_grey,
  },

  card_desc_bottomText: {
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
  },

  cardAmt: {
    fontFamily: 'NotoSans-Bold',
    fontSize: 12,
    lineHeight: 18,
    color: '#FF8142',
  },

  badge: {
    top: '5%',
    right: '8%',
  },
});

export default MainCard;
