import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  paper: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 4,
  },

  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingBottom: 10,
  },

  textBox: {
    color: 'black',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    margin: 5,
  },

  descArea: {
    marginVertical: 20,
  },

  descBox: {
    paddingHorizontal: 10,
  },

  moodArea: {
    display: 'flex',
    flexDirection: 'row',
    marginVertical: 10,
  },

  moodPicker: {
    width: 300,
  },

  titleText: {
    color: 'black',
    marginHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },

  buttonArea: {
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },

  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  },

  buttonSave: {
    backgroundColor: '#3B71CA',
    color: 'white',
  },

  buttonCancel: {
    backgroundColor: 'white',
    color: 'black',
    textDecorationLine: 'underline',
  },
});
