import {View} from 'react-native';
import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SplashProps {
  navigation: any;
}

const Splash: React.FC<SplashProps> = ({navigation}) => {
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const AuthId = await AsyncStorage.getItem('AuthID');
        console.log(AuthId);
        setTimeout(() => {
          AuthId ? navigation.navigate('Home') : navigation.navigate('Auth');
        }, 2000);
      } catch (error) {
        console.error('Error retrieving AuthID:', error);
      }
    };

    checkAuth();
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5F6F52',
      }}>
      <Animatable.Text
        style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}
        animation="fadeInDown"
        duration={1000}>
        Ned
      </Animatable.Text>
    </View>
  );
};

export default Splash;
