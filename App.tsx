import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

export default function App(): JSX.Element {
  const [randBackground, setRandBackGround] = useState('#ffffff');

  const generateColour = () => {
    //# color-range
    const hashColorRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hashColorRange[Math.floor(Math.random() * 16)];
    }

    setRandBackGround(color);
  };

  return (
    <>
      <StatusBar backgroundColor={randBackground} />

      <View style={[styles.container, {backgroundColor: randBackground}]}>
        <View style={styles.colorContainer}>
          <Text style={styles.textColorCode} selectable={true}>
            {randBackground}
          </Text>
        </View>
        <TouchableOpacity onPress={generateColour}>
          <View style={styles.actionButton}>
            <Text style={styles.actionTxt}>find Color</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colorContainer: {
    marginBottom: 40,
  },
  actionButton: {
    borderRadius: 12,
    backgroundColor: '#6A1B4D',
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  actionTxt: {
    fontSize: 24,
    color: '#FFFFFF',
    textTransform: 'uppercase',
  },

  textColorCode: {
    color: '#ffffff',
    fontSize: 25,
  },
});
