import React from 'react';


// jsx
const ListItem = ({todo, id}) => {
    const handleClick = () => {
        console.log(id)
    }
  return <li onClick ={handleClick}>{todo}</li>;
};

export default ListItem