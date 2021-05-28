import React from 'react';
import ListItem from './ListItem';


// jsx
const List = ({listOfTodos}) => {
    const arr = listOfTodos.map((element, index)=>{
        return <ListItem key = {index} id = {index} todo = {element.todo}/>
    })
  return <>
  <ul>{arr}</ul>
  </>
};

export default List