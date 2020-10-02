/* eslint-disable no-console */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useCallback } from 'react';

import { AntDesign } from '@expo/vector-icons';

import api from '../../services/api';
import {
  Title,
  Input,
  Button,
  ButtonTxt,
  Container,
  FormAddNewTask,
  Tasks,
  Task,
  TaskTxt,
  TaskActions,
} from './stylesy';

const Taskss = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const loadTasks = useCallback(
    async () => {
      try {
        const response = await api.get('tarefas');
        const sortedTasks = response.data.sort(({ createdAt: a },
          { createdAt: b }) => (a && b ? a < b ? 1 : -1 : 0));

        setTasks(sortedTasks);
      } catch (error) {
        console.log('load tasks', error);
      }
    }, [],
  );

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = useCallback(
    async () => {
      if (newTask === '') {
        setErrorMessage('Insert brand new Task');
        return;
      }

      setErrorMessage('');

      const params = {
        descricao: newTask,
        concluido: false,
      };

      try {
        await api.post('tarefas', params);

        loadTasks();
        setNewTask('');
      } catch (error) {
        console.log('error handleAddTask:', error);

        setErrorMessage('Problems with server');
      }
    }, [loadTasks, newTask],
  );

  const handleTask = useCallback(
    async (task) => {
      const params = {
        ...task,
        concluido: !task.concluido,
      };

      await api.put(`tarefas/${task.id}`, params);

      loadTasks();
    }, [loadTasks],
  );

  const removeTask = async (task) => {
    await api.delete(`tarefas/${task.id}`);
    loadTasks();
  };

  return (
    <Container>
      <Title>
        <AntDesign name="profile" size={34} color="black" />
        Tasks
      </Title>

      <FormAddNewTask>
        <Input
          value={newTask}
          onChangeText={(text) => setNewTask(text)}
          placeholder="Create new tasks"
        />

        <Button onPress={() => { handleAddTask(); }}>
          <ButtonTxt>
            Create
          </ButtonTxt>
        </Button>
      </FormAddNewTask>

      <Tasks>
        { tasks.map((tsk) => (
          <Task key={tsk.id}>
            <TaskTxt>{tsk.descricao}</TaskTxt>

            <TaskActions>
              {tsk.concluido ? (
                <>
                  <AntDesign.Button
                    backgroundColor="#FFF"
                    name="checkcircleo"
                    size={24}
                    color="green"
                    onPress={() => handleTask(tsk)}
                  />

                  <AntDesign.Button
                    backgroundColor="#FFF"
                    name="closecircleo"
                    size={24}
                    color="red"
                    onPress={() => removeTask(tsk)}
                  />

                </>
              ) : (

                <AntDesign.Button
                  backgroundColor="#FFF"
                  name="loading1"
                  size={24}
                  color="black"
                  onPress={() => handleTask(tsk)}
                />

              )}

            </TaskActions>
          </Task>
        ))}
      </Tasks>
    </Container>
  );
};

export default Taskss;
