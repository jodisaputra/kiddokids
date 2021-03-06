import firestore from '@react-native-firebase/firestore';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Header, HeaderProfile, ListItem} from '../../components';
import {getData} from '../../utils/localstorage';

const Home = ({navigation}) => {
  const [listTask, setListTask] = useState([]);

  useEffect(() => {
    getDataTask();
  }, []);

  const getDataTask = () => {
    const today = moment(new Date()).format('MMMM, Do YYYY');

    getData('user').then(res => {
      firestore()
        .collection('tasks')
        .where('added_by', '==', res.parent_email)
        .where('date', '==', today)
        .onSnapshot(docs => {
          let listtasks = [];
          docs.forEach(doc => {
            listtasks.push({
              ...doc.data(),
              key: doc.id,
            });
          });
          setListTask(listtasks);
        });
    });
  };

  return (
    <View>
      <Header title="Home" headertype="no-icon" />
      <View>
        <HeaderProfile />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.page}>
          {listTask.map(task => {
            return (
              <ListItem
                key={task.key}
                point={task.points}
                title={task.task_title}
                avatar={{uri: task.icon}}
                time={task.from + ' - ' + task.to}
                onPress={() => navigation.navigate('TaskEdit', task.key)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 30,
    paddingVertical: 16,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingBottom: 200,
  },
});
