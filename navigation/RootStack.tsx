/**
 * Author: Ryan
 * Date: 2021-06-29
 * title: StackNavigator
 */

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeBottomTab } from './HomeBottomTab';

type TProps = {};

type TRootStackParamList = {
  Home: undefined;
};

const RootStack = ({}: TProps) => {
  const Stack = createStackNavigator<TRootStackParamList>();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeBottomTab}
        options={{
          title: '제품상세',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
