import { VFC } from 'react';

type Props = { text: string };

export const Text: VFC<Props> = ({ text }) => {
  return <p>{text}</p>;
};
