import React from "react";
import { Amplify } from "aws-amplify";
import {
  AmplifyProvider,
  Authenticator,
  Button,
  Flex,
  Text,
  View,
} from "@aws-amplify/ui-react";
import aws_exports from "./aws-exports";
import "@aws-amplify/ui-react/styles.css";
import "./index.css"
Amplify.configure(aws_exports);

const App = () => {
  return (
    <AmplifyProvider>
      <Authenticator className="bg-red-800">
        {({ signOut, user }) => (
          <Flex
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            alignContent="flex-start"
            wrap="nowrap"
            gap="1rem"
            textAlign="center"
          >

            {user && (
              <View width="100%">
                <Text>Hello {user.username}</Text>
                <Button onClick={signOut} className="bg-red-500">
                  <Text>Sign Out</Text>
                </Button>
              </View>
            )}

            <View width="100%">
              <Text>
                Edit <code>src/App.tsx</code> and save to reload.
              </Text>
            </View>
          </Flex>
        )}
      </Authenticator>
    </AmplifyProvider>
  );
};

export default App;