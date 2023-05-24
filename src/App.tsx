import { Text } from './libs/Text';
import { Heading } from './libs/Heading';
import { Button } from './libs/Button';
import { Textarea } from './libs/Textarea';
import { Input } from './libs/input';

export const App = () => {
  return (
    <>
      <Text text='Hello World!' />
      <Heading tag={'h1'}>見出し</Heading>
      <Button
        onClick={() => console.log('clicked!')}
        title='Button'
        type='primary'
        width={96}
      />
      <Button
        onClick={() => console.warn('clicked!')}
        title='Button'
        type='secondary'
      />
      <Button
        onClick={() => console.error('clicked!')}
        title='Button'
        type='error'
      />
      <Textarea width={200} maxLength={100} />
      <Input type='text' />
    </>
  );
};
