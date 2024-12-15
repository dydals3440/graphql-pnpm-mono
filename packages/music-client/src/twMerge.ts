import { extendTailwindMerge } from 'tailwind-merge';

export const tw = extendTailwindMerge({
  extend: {
    // fontSize classGroup
    // text-white과 text-16이 같은 classGroup에 속하므로, 같은 classGroup에 속하는 것들은 같은 cascade level에 속함.
    classGroups: {
      'font-size': [
        { text: [(value: string) => !Number.isNaN(Number(value))] },
      ],
    },
  },
});
