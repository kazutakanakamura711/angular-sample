export const InputType = {
  Input: 'input',
  Num: 'num',
  TextArea: 'textArea',
  IconInput: 'iconInput',
} as const;

export type InputType = (typeof InputType)[keyof typeof InputType];
