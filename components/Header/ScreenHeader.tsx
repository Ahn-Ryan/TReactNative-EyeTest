/**
 * Author: Ryan
 * Date: 2021-06-30
 * title: ScreenHeader
 */

import React from 'react';
import { View, Image } from 'react-native';

type TProps = {};

const ScreenHeader = ({}: TProps) => {
  return (
    <View style={{ width: '100%', height: '100px', backgroundColor: '#202020' }}>
      <Image source={require('/public/images/header/arrow_back.svg')} />
    </View>
  );
};

export default ScreenHeader;
