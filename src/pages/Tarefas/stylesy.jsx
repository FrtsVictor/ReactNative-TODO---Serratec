/* eslint-disable import/prefer-default-export */
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1;
padding: 0 20px;
`;

export const Title = styled.Text`
color: #3a3a3a;
font-size:36px;
padding: 20px 0;
`;

export const Input = styled.TextInput`
flex:1;
background-color: #FFF;
height: 40px;
padding: 0 20px;
border-radius: 5px;
color: #000;

`;

export const Button = styled.TouchableOpacity`
width: 100px;
background-color: #000;
border-radius: 5px;
align-items: center;
justify-content: center;
margin-left: 10px;
`;

export const ButtonTxt = styled.Text`
color: #FFF;
font-size: 18px;
font-weight:bold;

`;

export const FormAddNewTask = styled.View`
flex-direction: row;
`;

export const Tasks = styled.View`
flex:1;
margin-top:30px;
`;

export const Task = styled.View`
background-color: #fff;
margin-bottom:10px;
border-radius:5px;
padding: 10px 20px;
flex-direction: row;
justify-content: space-between;
`;

export const TaskTxt = styled.Text`
font-size: 16px;
color: #3a3a3a;
`;

export const TaskActions = styled.View`
flex-direction: row;
padding-left: 15px;
`;

export const ButtonDell = styled.TouchableOpacity`
`;

export const ButtonCheck = styled.TouchableOpacity`
color: red;

`;

export const ErroMessage = styled.Text`
  color: #c53030;
  font-size: 14px;
  margin-top: 5px;
`;
