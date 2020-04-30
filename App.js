/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';

import Button from './components/button/button';
import Image from './components/image/image';
import Header from './components/header/header';
import Container from './components/container/container';

import { getAllImages } from './functions/image';

const images = getAllImages();
const getInitialImage = { image: images[0], idx: 0 };
const getLastIdx = images.length - 1;
const getLastImage = { image: images[getLastIdx], idx: getLastIdx };

const App = () => {
  const [actualImage, setActualImage] = useState(getInitialImage);

  const isLastImage = () => actualImage.idx + 1 === images.length;

  const isFirstImage = () => actualImage.idx === 0;

  const nextImage = () => {
    if (isLastImage()) {
      setActualImage(getInitialImage);
    } else {
      let newIdx = actualImage.idx + 1;
      setActualImage({
        image: images[newIdx],
        idx: newIdx,
      });
    }
  };

  const previousImage = () => {
    if (isFirstImage()) {
      setActualImage(getLastImage);
    } else {
      let newIdx = actualImage.idx - 1;
      setActualImage({
        image: images[newIdx],
        idx: newIdx,
      });
    }
  };
  return (
    <>
      <Header title="Home" />
      <Container>
        <View style={styles.centralize}>
          <Image source={actualImage.image} />
          <Text>
            {`${actualImage.idx + 1}/${images.length}`}
          </Text>
        </View>
        <Button onPress={previousImage}>Imagem Anterior</Button>
        <Button onPress={nextImage}>Próxima Imagem</Button>
      </Container>
    </>
  );
};

const styles = StyleSheet.create({
  centralize: {
    alignItems: 'center',
  },
});

export default App;
