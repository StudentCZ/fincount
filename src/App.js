import React, { useState } from 'react';
import logo from './logo.svg';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import {
  Button,
  Flex,
  Heading,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from './graphql/mutations';

function App({ signOut }) {
  const [notes, setNotes] = useState([]);
  return (
    <View className='App'>
      <Card>
        <Image src={logo} className='App-logo' alt='logo' />
        <Heading level={1}>We now have Auth!</Heading>
      </Card>
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
