import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textBox: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 5,
  },
  descBox: {
    paddingHorizontal: 10,
  },

  moodArea: {
    display: 'flex',
    flexDirection: 'row',
  },

  moodPicker: {
  },

  titleText: {
    color: 'black',
    marginHorizontal: 10,
    fontWeight: 'bold',
  },

  customMoodBox: {
    borderWidth: 1,
    borderColor: 'blue',
  },

  buttonArea: {
    flexDirection: 'row',
    alignSelf: 'center',
    bottom: 50,
  },

  button: {
    width: 150,
    paddingVertical: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'gray',
    marginHorizontal: 20,
  },

  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    color: 'white',
  },
});
