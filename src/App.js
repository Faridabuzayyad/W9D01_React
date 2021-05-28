import React from 'react';
import List from './components/List';

const todos = [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}];

// jsx
const App = () => {
  return <>
  <h1>Todo List</h1>
  <List  listOfTodos = {todos} />
  
  </>
};

export default App