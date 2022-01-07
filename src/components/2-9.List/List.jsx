import React from "react";

export default function List() {
  //   const numbers = [1, 2, 3, 4, 5];
  //   return (
  //     <div>
  //       {numbers.map((number) => {
  //         return <li key={number}>{number}</li>;
  //       })}
  //     </div>
  //   );
  const todos = [
    { id: 1, value: "BTS Jin" },
    { id: 2, value: "BTS Jimin" },
    { id: 3, value: "BTS RM" },
    { id: 4, value: "BTS Sugar" },
    { id: 5, value: "BTS J-Hope" },
    { id: 6, value: "BTS V" },
    { id: 7, value: "BTS JK" },
  ];

  const Item = (props) => {
    return <li>{props.value}</li>;
  };

  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <>{todoList}</>;
}
