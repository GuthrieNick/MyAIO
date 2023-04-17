import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {APPS} from '../../types';
import {Entries, Entry} from '../types';

export interface JournalState {
  entries: Entries;
}

export const initialState: Entries = [];

export const journalSlice = createSlice({
  name: APPS.Journal,
  initialState,
  reducers: {
    addEntry: (state: Entries, {payload}: PayloadAction<Entry>) => {
      state = [...state, payload];
      console.log(state);
    }
  },
});

// Action creators are generated for each case reducer function
export const {addEntry} = journalSlice.actions;

export default journalSlice.reducer;
