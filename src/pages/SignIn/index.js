import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import AuthContext from '../../contexts/auth';

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
});

const SiginIn = () => {
  const {signed, user, signIn} = useContext(AuthContext);

  console.log(signed);
  console.log(user);

  function handleSignIn() {
    signIn();
  }

  return (
    <View style={styles.container}>
      <Button title="Sign in" onPress={handleSignIn} />
    </View>
  );
};

export default SiginIn;
