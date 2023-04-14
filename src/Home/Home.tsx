import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {APPS, HomeProps} from '../types';

const GroceriesIcon = require('../Groceries/assets/icon.png');
const JournalIcon = require('../Journal/assets/icon.png');

const Icon = ({
  src,
  name,
  onPress,
}: {
  src: ImageSourcePropType;
  name: string;
  onPress: () => void;
}) => (
  <View style={{alignItems: 'center'}}>
    <TouchableOpacity style={styles.iconView} onPress={onPress}>
      <Image source={src} style={styles.icon} />
    </TouchableOpacity>
    <Text style={{color: 'black'}}>{name}</Text>
  </View>
);

export const Logo = ({
  size,
  padding,
  center,
}: {
  size: number;
  padding?: number;
  center?: boolean;
}) => (
  <View style={padding ? {paddingVertical: padding} : null}>
    <Image
      source={require('./assets/logo.png')}
      style={[
        {
          resizeMode: 'contain',
          height: size * 4,
          width: size * 13,
          paddingVertical: 20,
        },
        center ? {alignSelf: 'center'} : null,
      ]}
    />
  </View>
);

export default ({navigation}: HomeProps) => {
  return (
    <View>
      <Logo size={20} padding={30} center />
      <View style={{alignSelf: 'center'}}>
        <Icon
          src={GroceriesIcon}
          name={APPS.Groceries}
          onPress={() => navigation.navigate(APPS.Groceries)}
        />
        <Icon
          src={JournalIcon}
          name={APPS.Journal}
          onPress={() => navigation.navigate(APPS.Journal)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  iconView: {
    padding: 10,
    borderRadius: 30,
    backgroundColor: 'white',
    display: 'flex',
    alignSelf: 'baseline',
  },
});
