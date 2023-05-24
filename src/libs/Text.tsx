import { VFC } from 'react';
import styled from 'styled-components';
import { fontSize } from './constants';

type Props = { text: string };

export const Text: VFC<Props> = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.p`
  font-size: ${fontSize.m};
`;
