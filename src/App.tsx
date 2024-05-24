import React from "react";
import "./App.css";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Flex minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Criptoloucos</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="teal">Sign Up</Button>
          <Button colorScheme="teal">Log in</Button>
        </ButtonGroup>
      </Flex>
      <div className="body">
        <Tabs variant="enclosed" colorScheme="green">
          <TabList>
            <Tab>Home</Tab>
            <Tab>Add Investments</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
