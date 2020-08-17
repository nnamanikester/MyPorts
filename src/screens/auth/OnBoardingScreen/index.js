import React from 'react';
import * as UI from '../../../components/common';
import {primaryColor} from '../../../components/common/variables';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper';
import {female4} from '../../../assets/images';

const OnBoardingScreen = ({navigation}) => {
  return (
    <>
      <UI.Layout noScroll style={{backgroundColor: primaryColor}}>
        <Swiper
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}
          animated
          paginationStyle={{bottom: 80}}
          height="98%">
          <View style={styles.sliderContainer}>
            <View style={styles.imageContainer}>
              <Image source={female4} style={styles.image} />
            </View>

            <UI.Spacer large />

            <View style={styles.textContainer}>
              <UI.Text color="#fff" h1>
                Shop Like You Own It
              </UI.Text>

              <UI.Spacer />

              <UI.Text style={{textAlign: 'center'}} color="#fff">
                Shop any product od your choice at the convinience of your room,
                Like it is yours
              </UI.Text>
            </View>

            <UI.Spacer large />
          </View>
          <View style={styles.sliderContainer}>
            <View style={styles.imageContainer}>
              <Image source={female4} style={styles.image} />
            </View>

            <UI.Spacer large />

            <View style={styles.textContainer}>
              <UI.Text color="#fff" h1>
                Shop Like You Own It
              </UI.Text>

              <UI.Spacer />

              <UI.Text style={{textAlign: 'center'}} color="#fff">
                Shop any product od your choice at the convinience of your room,
                Like it is yours
              </UI.Text>
            </View>

            <UI.Spacer large />
          </View>
        </Swiper>

        <View style={styles.buttonContainer}>
          <UI.Button
            onClick={() => navigation.navigate('Register')}
            type="outline">
            <UI.Text>Sign up</UI.Text>
          </UI.Button>
          <UI.Spacer />
          <UI.Button onClick={() => navigation.navigate('Login')}>
            <UI.Text color="#fff">Sign in</UI.Text>
          </UI.Button>
          <UI.Spacer medium />
        </View>
      </UI.Layout>
    </>
  );
};

const styles = StyleSheet.create({
  dot: {
    backgroundColor: '#fff',
    width: 15,
    height: 7,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  activeDot: {
    backgroundColor: '#fff',
    width: 40,
    height: 7,
    borderRadius: 10,
    marginHorizontal: 2,
  },
  buttonContainer: {
    paddingHorizontal: 20,
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '95%',
    height: Dimensions.get('screen').width - 100,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
});

export default OnBoardingScreen;
