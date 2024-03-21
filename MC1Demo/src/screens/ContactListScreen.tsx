import React, { memo, useEffect, useState } from 'react';
import { State as StateType } from '../data/State';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { oauth, net } from 'react-native-force';
import { Response } from '../data/Response';

const ContactListScreen = () => {
  const [State, setState] = useState<StateType>({ data: [] });

  useEffect(() => {
    oauth.getAuthCredentials(
      () => fetchData(), // already logged in
      () => {
        oauth.authenticate(
          () => fetchData(),
          (error) => console.log('Failed to authenticate:' + error)
        );
      }
    );
  });

  const fetchData = () => {
    net.query(
      'Select Id,Name,phone,description,IconURL__c,shippingstreet,shippingcity,shippingstate,shippingcountry,shippingpostalcode from Account',
      (response: Response) => setState({ data: response.records }),
      (error) => console.log('Failed to query:' + error)
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={State.data}
        renderItem={({ item }) => <Text style={styles.item}>{item.Name}</Text>}
        keyExtractor={(item, index) => 'key_' + index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    backgroundColor: 'white',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default memo(ContactListScreen);
