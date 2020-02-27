import React, {useRef, useState, useEffect} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import ReactNativePinView from 'react-native-pin-view';

//"#32BEDE"
export default function test01() {
  const pinView = useRef(null);
  const [showRemoveButton, setShowRemoveButton] = useState(false);
  const [enteredPin, setEnteredPin] = useState('');
  const [showCompletedButton, setShowCompletedButton] = useState(false);
  useEffect(() => {
    if (enteredPin.length > 0) {
      setShowRemoveButton(true);
    } else {
      setShowRemoveButton(false);
    }
    if (enteredPin.length === 8) {
      setShowCompletedButton(true);
    } else {
      setShowCompletedButton(false);
    }
  }, [enteredPin]);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#003a59'}}>
      <View style={{flex: 1, backgroundColor: '#003a59'}}>
        <ReactNativePinView
          inputSize={32}
          ref={pinView}
          pinLength={8}
          buttonSize={60}
          onValueChange={value => setEnteredPin(value)}
          buttonAreaStyle={{
            marginTop: 24,
          }}
          inputAreaStyle={{
            marginBottom: 24,
          }}
          inputViewEmptyStyle={{
            backgroundColor: 'transparent',
            borderWidth: 1,
            borderColor: '#FFF',
          }}
          inputViewFilledStyle={{
            backgroundColor: '#FFF',
          }}
          buttonViewStyle={{
            borderWidth: 1,
            borderColor: '#FFF',
          }}
          buttonTextStyle={{
            color: '#FFF',
          }}
          onButtonPress={key => {
            if (key === 'custom_left') {
              pinView.current.clear();
            }
            if (key === 'custom_right') {
              alert('Entered Pin: ' + enteredPin);
            }
            if (key === 'three') {
              alert("You can't use 3");
            }
          }}
        />
      </View>
    </SafeAreaView>
  );
}
