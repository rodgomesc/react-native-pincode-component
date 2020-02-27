import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import PINCode from 'react-native-pincode';

export default function test01() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{marginTop: 200, flex: 1}}>
        <PINCode
          status="choose"
          finishProcess={async () => {
            this.props.navigation.navigate('someNewPage');
          }}
          maxAttempts={5}
          pinCodeVisible={true}
          storePin={pin => this._HandleStoredPin(pin)}
        />
      </View>
    </SafeAreaView>
  );
}
