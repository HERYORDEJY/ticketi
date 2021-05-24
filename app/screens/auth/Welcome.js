import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import {
  _primary,
  _primary2,
  _tertiary,
  _tertiary2,
  _secondary,
} from '../../utils/colors';
import LargeButton from '../../components/LargeButton';
import LinkText from '../../components/LinkText';
import { Container } from 'native-base';
import { Diamond } from '../../components/Svg';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import { _screenWidth } from '../../utils/dimension';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <Container style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <View style={{ alignItems: 'center' }}>
        <Diamond
          height={200}
          width={200}
          color1={_primary}
          color2={_primary2}
          color3={_primary}
          color4={_secondary}
        />
        <Text
          style={{ fontSize: 30, fontFamily: 'Inter-Black', color: _primary }}>
          DIAMOND LAUNDRY
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            alignItems: 'center',
            backgroundColor: _primary,
            padding: 20,
            borderRadius: 10,
            marginVertical: 6,
            marginBottom: 25,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: _tertiary,
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('SignUp')}
          style={{
            alignItems: 'center',
            backgroundColor: _tertiary2,
            padding: 20,
            borderRadius: 10,
            marginVertical: 6,
            marginBottom: 25,
          }}>
          <Text
            style={{
              fontSize: 18,
              color: _primary,
            }}>
            Create an account
          </Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: _tertiary,
    paddingHorizontal: _screenWidth > 450 ? 45 : 20,
    paddingVertical: 25,
    // alignItems: 'center',
    justifyContent: 'space-around',
  },
});
