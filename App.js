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
import {fetch} from 'BlackBerry-Dynamics-for-React-Native-Networking';

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

      <TouchableOpacity
        onPress={async () => {
          console.log('start fetch');
          fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(x => x.json())
            .then(x => console.log('fetch done', x))
            .catch(e => {
              console.log('fetch error', e);
            });
        }}>
        <Text>FETCH TODO </Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
