import React from "react";

function UserGreeting(props) {
  return (
    <div>
      <h2>
        {props.name && props.name + ","} It's {props.count} time!
      </h2>
    </div>
  );
}

function GuestGreeting(props) {
  return <h1>Please LogIn</h1>;
}

function Greeting(props) {
  //   if (props.isLoggedIn) {
  //     return <UserGreeting name="Jin" count={0} />;
  //   } else {
  //     return <GuestGreeting />;
  //   }
  return props.isLoggedIn ? (
    <UserGreeting name="Jin" count={0} />
  ) : (
    <GuestGreeting />
  );
}

export default function Condition() {
  const isLoggedIn = true;
  return (
    <div>
      <button>LogIn</button>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
