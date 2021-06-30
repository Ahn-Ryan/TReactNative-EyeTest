/**
 * Author: Ryan
 * Date: 2021-06-29
 * title: createBottomTabNavigator
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Camera from '../screen/home/Camera';
import Setting from '../screen/home/Setting';
import Gallery from '../screen/home/Gallery';

type TProps = {};

export const HomeBottomTab = ({}: TProps) => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};
