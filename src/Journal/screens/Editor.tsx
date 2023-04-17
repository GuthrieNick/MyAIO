import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  TextInput,
  TouchableNativeFeedback as Touchable,
} from 'react-native-gesture-handler';
import {EditorStyles as styles} from '../styles';
import Picker from 'react-native-dropdown-picker';
import {mockMoods} from '../assets/mockData';
import {EditorScreenProps, Screens} from '../types';

export default ({navigation}: EditorScreenProps) => {
  const [mood, setMood] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [desc, setDesc] = useState('');

  const submit = (saved: boolean) => {
    if (saved) {
      console.log({mood, desc});
    }

    navigation.navigate(Screens.Main);
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View style={{marginBottom: 10}}>
          <Text style={styles.titleText}>Description:</Text>
          <TextInput
            editable={!pickerOpen}
            multiline
            style={[styles.textBox, styles.descBox]}
            onChangeText={setDesc}
          />
        </View>
        <View style={styles.moodArea}>
          <Text style={styles.titleText}>Mood:</Text>
        </View>
        <Picker
          style={styles.moodPicker}
          searchable
          addCustomItem
          placeholder="Select your mood"
          open={pickerOpen}
          value={mood}
          items={mockMoods.map(item => ({label: item, value: item}))}
          setOpen={setPickerOpen}
          setValue={setMood}
        />
      </View>
      <View style={styles.buttonArea}>
        <Touchable
          onPress={() => submit(false)}
          style={[styles.button, {backgroundColor: '#a00000'}]}>
          <Text style={styles.buttonText}>Cancel</Text>
        </Touchable>
        <Touchable
          onPress={() => submit(true)}
          style={[styles.button, {backgroundColor: '#0254ce'}]}>
          <Text style={styles.buttonText}>Save</Text>
        </Touchable>
      </View>
    </View>
  );
};
