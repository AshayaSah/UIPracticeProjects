import React from "react";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import Form from "./Form";

const App = () => {
  return (
    <Theme
      appearance="light"
      accentColor="mint"
      panelBackground="solid"
      grayColor="Olive"
      radius="large"
      scaling="95%"
    >
      <Form></Form>
    </Theme>
  );
};

export default App;
