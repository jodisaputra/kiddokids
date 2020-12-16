import firestore from '@react-native-firebase/firestore';
import React, {useEffect, useState} from 'react';
import {Alert, StyleSheet, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {ScrollView} from 'react-native-gesture-handler';
import {Header, HeaderProfile, ListReward} from '../../components';
import {colors} from '../../utils';
import {getData, storeData} from '../../utils/localstorage';

const Reward = () => {
  const [listReward, setListReward] = useState([]);

  useEffect(() => {
    getDataReward();
  }, []);

  const getDataReward = () => {
    getData('user').then(res => {
      firestore()
        .collection('rewards')
        .where('added_by', '==', res.parent_email)
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

  const claim = rewardId => {
    Alert.alert(
      'Buy reward',
      'Are you sure?',
      [
        {text: 'Yes', onPress: () => claimReward(rewardId)},
        {
          text: 'No',
          onPress: () => console.log('No item was removed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const claimReward = id_reward => {
    getData('user').then(res => {
      const dbRef = firestore()
        .collection('user')
        .doc(res.uid);
      dbRef.get().then(result => {
        firestore()
          .collection('rewards')
          .doc(id_reward)
          .get()
          .then(resultReward => {
            const point = Math.floor(result.data().points);
            if (point < resultReward.data().cost) {
              showMessage({
                message: 'sorry, your point is not enought!',
                type: 'default',
                backgroundColor: colors.errorMessage,
              });
            } else {
              const jumlah = point - resultReward.data().cost;
              dbRef
                .update({
                  points: jumlah,
                })
                .then(() => {
                  firestore()
                    .collection('rewards')
                    .doc(id_reward)
                    .update({
                      claimed: 'yes',
                    })
                    .then(() => {
                      const dbRef = firestore()
                        .collection('user')
                        .doc(res.uid);
                      dbRef.get().then(result => {
                        storeData('user', result.data());
                        showMessage({
                          message: 'Reward Claimed Successfully!',
                          type: 'default',
                          backgroundColor: colors.successMessage,
                        });
                      });
                    });
                });
            }
          });
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
                onPress={() => claim(reward.key)}
              />
            );
          })}
        </View>
      </ScrollView>
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
});
