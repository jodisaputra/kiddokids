import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Header, HeaderProfile, Button, ListReward} from '../../components';
import {getData} from '../../utils/localstorage';
import firestore from '@react-native-firebase/firestore';

const Reward = ({navigation}) => {
  const [listReward, setListReward] = useState([]);

  useEffect(() => {
    getDataReward();
  }, []);

  const getDataReward = () => {
    getData('admin').then(res => {
      firestore()
        .collection('rewards')
        .where('added_by', '==', res.email)
        .where('claimed', '==', 'no')
        .onSnapshot(docs => {
          let listrewards = [];
          docs.forEach(doc => {
            listrewards.push({
              ...doc.data(),
              key: doc.id,
            });
          });
          setListReward(listrewards);
        });
    });
  };
  return (
    <View>
      <Header title="Reward" headertype="no-icon" />
      <View>
        <HeaderProfile />
      </View>
      <ScrollView>
        <View style={styles.page}>
          {listReward.map(reward => {
            return (
              <ListReward
                key={reward.key}
                title={reward.name}
                total={reward.cost}
                onPress={() => navigation.navigate('RewardEdit', reward.key)}
              />
            );
          })}
        </View>
      </ScrollView>
      <View style={styles.floatbutton}>
        <Button
          type="icon-plus"
          onPress={() => navigation.navigate('RewardAdd')}
        />
      </View>
    </View>
  );
};

export default Reward;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 200,
  },
  floatbutton: {
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 720,
    right: 10,
  },
});

// Fire.database()
//   .ref('rewards')
//   .orderByChild('added_by')
//   .equalTo(res.email)
//   .once('value')
//   .then((reward) => {
//     if (reward.val()) {
//       // variabel data dalam bentuk objek
//       const oldData = reward.val();
//       const data = [];
//       Object.keys(oldData).map((key) => {
//         data.push({
//           id: key,
//           data: oldData[key],
//         });
//       });
//       console.log('list data hasil array', data);
//       setListReward(data);
//     }
//   })
//   .catch((error) => {
//     console.log('error', error);
//   });
