import React, {useState} from 'react';
import {
  Text,
  View,
  ToastAndroid,
  TouchableNativeFeedback as Touchable,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Picker from 'react-native-dropdown-picker';

import {EditorStyles as styles} from '../styles';
import {mockMoods} from '../assets/mockData';

import {useDispatch} from 'react-redux';
import {addEntry} from '../redux';

export type Props = {
  onHide: () => void;
};

export default ({onHide}: Props) => {
  const dispatch = useDispatch();
  const [mood, setMood] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [desc, setDesc] = useState('');

  const submit = (saved: boolean) => {
    if (saved) {
      if (mood === '' || desc === '') {
        ToastAndroid.show(
          'Cannot save entry: At least one field is empty.',
          ToastAndroid.SHORT,
        );
        return;
      } else {
        dispatch(
          addEntry({
            mood,
            description: desc,
            saved: Date.now(),
          }),
        );
      }
    }

    setMood('');
    setDesc('');

    onHide();
  };

  return (
    <View style={styles.paper}>
      <Text style={styles.title}>Create a new entry</Text>
      <View style={styles.moodArea}>
        <Text style={styles.titleText}>Mood:</Text>
        <Picker
          containerStyle={styles.moodPicker}
          maxHeight={500}
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
      <View style={styles.descArea}>
        <Text style={styles.titleText}>Description:</Text>
        <TextInput
          editable={!pickerOpen}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          scrollEnabled
          placeholder='Describe what happened...'
          placeholderTextColor='gray'
          style={[styles.textBox, styles.descBox]}
          onChangeText={setDesc}
        />
      </View>
      <View style={styles.buttonArea}>
        <Touchable onPress={() => submit(false)}>
          <Text style={[styles.button, styles.buttonCancel]}>Cancel</Text>
        </Touchable>
        <Touchable onPress={() => submit(true)}>
          <Text style={[styles.button, styles.buttonSave]}>Save</Text>
        </Touchable>
      </View>
    </View>
  );
};