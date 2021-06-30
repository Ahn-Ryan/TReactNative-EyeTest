/**
 * Author: Ryan
 * Date: 2021-06-30
 * title: Gallery
 */

import React from 'react';
import { Text, View } from 'react-native';
import Header from 'components/Header/ScreenHeader';

type TProps = {};

const Gallery = ({}: TProps) => {
  return (
    <View>
      <Header />
      <Text>Gallery</Text>
    </View>
  );
};

export default Gallery;
