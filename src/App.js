import React, {useState, useEffect} from "react";
import UserService from "./services/user-service";
import { Flex } from "@chakra-ui/react";
import Dashboard from "./components/Dashboard"
import Users from "./components/Users"

import './App.css';

const App = () => {

  return (

    <Flex p="20px" bg="#262A41" justify="center" minHeight="100vh">
      <Dashboard />
      <Flex w="50%">
        <Users />
      </Flex>
    </Flex>
  );
}

export default App;
