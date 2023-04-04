/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import Clipboard from 'BlackBerry-Dynamics-for-React-Native-Clipboard';
import Input from 'BlackBerry-Dynamics-for-React-Native-TextInput';

const App: () => Node = () => {
  return (
    <View style={{flex: 1, paddingTop: 100}}>
      <TouchableOpacity
        onPress={async () => {
          await Clipboard.setString('test 1');
          const copiedText = await Clipboard.getString();
          console.log({copiedText});
        }}>
        <Text>Test copy 1</Text>
      </TouchableOpacity>

      <Input
        style={{
          borderWidth: 1,
        }}
      />
    </View>
  );
};

export default App;
