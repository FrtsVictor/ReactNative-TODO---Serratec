/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-nested-ternary */
// import { FiCircle, FiCheckCircle, FiDelete } from 'react-icons/fi';
import { Text } from 'react-native';
// import {
//   Form, ErrorMessage, Tasks, Data,
// } from './styles';

import React, { useState, useEffect } from 'react';
import api from '../../services/api';

// import Input from '../../components/Input';

// import Header from '../../components/Header';

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loadTasks = async () => {
    try {
      const response = await api.get('tarefas');
      const sortedTasks = response.data.sort(({ createdAt: a },
        { createdAt: b }) => (a && b ? a < b ? 1 : -1 : 0));
      console.log('loadTasks', sortedTasks);

      setTasks(sortedTasks);
    } catch (error) {
      console.log('load tasks', error);
    }
  };

  // load tasks on render
  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (event) => {
    event.preventDefault();

    if (!newTask) {
      setErrorMessage('Insert Task');
      return;
    }

    const params = {
      descricao: newTask,
      concluido: false,
      createdAt: new Date().toLocaleDateString(),
    };

    try {
      await api.post('tarefas', params);

      loadTasks();
      setNewTask(''); // limpando o input
      setErrorMessage('');// limpando error message
    } catch (error) {
      console.log('handleAddTask error', error);
    }
  };

  const handleTask = async (task) => {
    const params = {
      ...task,
      concluido: !task.concluido,
    };

    await api.put(`tarefas/${task.id}`, params);

    loadTasks();
  };

  const removeTask = async (task) => {
    await api.delete(`tarefas/${task.id}`);
    loadTasks();
  };

  return (
    <Text>Tarefas</Text>

  );
};

export default Task;
