import { Entry } from "../types";

export const mockData: Entry[] = [
    {
      mood: 'happy',
      saved: new Date(Date.now() - 1000 * 60 * 60 * 24 * 5).getTime(),
      description:
        'I went to the store and found the toothpaste I was looking for.',
    },
    {
      mood: 'angry',
      saved: new Date(Date.now() - 1000 * 60 * 60).getTime(),
      description:
        'They turned off the water, so I had to drive somewhere else to shower.',
    },
    {
      mood: 'peaceful',
      saved: Date.now(),
      description:
        "I ate donuts and had my coffee and watched some YT vids. It's so nice out right now.",
    },
  ];

export const mockMoods = ['happy', 'sad', 'upset', 'peaceful'];