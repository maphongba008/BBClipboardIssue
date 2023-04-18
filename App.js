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
          try {
            await Clipboard.setString('test 1');
            const copiedText = await Clipboard.getString();
            console.log('Copied text: ' + copiedText);
          } catch (e) {
            console.log('error set string: ' + e);
          }
        }}>
        <Text>Test copy 1</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={async () => {
          try {
            await Clipboard.setString('test 2');
            const copiedText = await Clipboard.getString();
            console.log('Copied text 2: ' + copiedText);
          } catch (e) {
            console.log('error set string 2: ' + e);
          }
        }}>
        <Text>Test copy 2</Text>
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
