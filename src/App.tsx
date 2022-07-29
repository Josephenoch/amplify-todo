import React from "react";
import { Amplify } from "aws-amplify";
import {
  AmplifyProvider,
  Authenticator,
} from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import Todo from "./components/todo";

Amplify.configure(aws_exports);

const App = () => {
  return (
    <AmplifyProvider >
      <Authenticator>
        {({ signOut, user }) => (
         <div className="min-h-screen">
            {user && (<Todo signOut={signOut}/>)}
        </div>
        )}
      </Authenticator>
    </AmplifyProvider>
  );
};

export default App;