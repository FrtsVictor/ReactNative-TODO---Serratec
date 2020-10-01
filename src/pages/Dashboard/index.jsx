/* eslint-disable react/no-unescaped-entities */
/* eslint-disable import/named */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import React, {
  useState, useEffect, useCallback, useMemo,
} from 'react';

import { Text } from 'react-native';

import api from '../../services/api';
// import Header from '../../components/Header';

// import { Resumo } from './styles';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  const loadTasks = useCallback(
    async () => {
      const response = await api.get('tarefas');
      setTasks(response.data);
      console.log('loadTasks Aqui', response);
    }, [],
  );

  const tasksConcludedQtd = useMemo(
    () => {
      const filtered = tasks.filter((task) => task.concluido === true);
      console.log('memoria');

      return filtered.length;
    }, [tasks],
  );

  const taskQtd = useMemo(
    () => tasks.length, [tasks],
  );

  // load page at start
  useEffect(() => {
    loadTasks();
  }, [loadTasks]);

  return (
    <Text>
      Dashboard
      {tasksConcludedQtd}
      {taskQtd}
    </Text>
  );
};

export default Dashboard;
