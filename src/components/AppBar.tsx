import React from 'react';
import { Appbar } from 'react-native-paper';

const AppBar = () => {
  const _goBack = () => console.log('Go back');

  return (
    <Appbar.Header>
      <Appbar.Action icon="arrow-back" onPress={_goBack} />
      <Appbar.Content title="My Title" style={{ alignItems: 'center' }} />
    </Appbar.Header>
  );
};

export default AppBar;
