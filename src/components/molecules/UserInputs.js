import React from "react";
import UserInput from "../atoms/UserInput";

const UserInputs = (props) => {
  const userInputs = [];
  for (const key in props) {
    userInputs.push(
      <UserInput
        key={key}
        value={props[key][key]}
        error={props[key]?.error}
        isLoading={props[key].isLoading}
      />
    );
  }
  return <>{userInputs}</>;
};

export default UserInputs;
