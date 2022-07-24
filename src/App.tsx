import React, { FC } from "react";
import { Amplify } from "aws-amplify";
import aws_exports from "./aws-exports";
import Login from "./components/pages/login";
Amplify.configure(aws_exports);

const App:FC = () => {
  return (
    <div className="h-screen bg-black">
      <Login/>
    </div>
  );
};

export default App;