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
import CoinCard from "./Components/Cards/CoinCard";
import { useEffect, useState } from "react";
import btcImage from "../src/Images/bitcoin-btc-logo.png";
import ethImage from "./Images/ethereum.png";
import axios from "axios";

function App() {
  const [btc, setBtc] = useState(0);
  const [eth, setEth] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "X-API-KEY": "X3iSVC60vq6fGV2FOZ6Nz42T//VbM7gMQMIXxZzWsNk=",
      },
    };

    fetch("https://openapiv1.coinstats.app/coins/bitcoin?currency=BRL", options)
      .then((response) => response.json())
      .then((response) => setBtc(response.price))
      .catch((err) => console.error(err));

    fetch(
      "https://openapiv1.coinstats.app/coins/ethereum?currency=BRL",
      options
    )
      .then((response) => response.json())
      .then((response) => setEth(response.price))
      .catch((err) => console.error(err));
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/")
      .then((response) => {
        console.log("estou no backend");
      })
      .catch((error) => {
        console.error("There was an error fetching the items!", error);
      });
  }, []);

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
              <Box>
                <Flex direction="row" justify="flex-start" align="center">
                  <Box p="20px">
                    <CoinCard
                      coinName="Bitcoin"
                      coinPrice={btc}
                      coinImage={btcImage}
                    />
                  </Box>

                  <Box>
                    <CoinCard
                      coinName="Ethereum"
                      coinPrice={eth}
                      coinImage={ethImage}
                    />
                  </Box>
                </Flex>
              </Box>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>

        <Box p="20px">
          {isLoggedIn ? (
            <h2>logado</h2>
          ) : (
            <h2>Login to view past Investments</h2>
          )}
        </Box>
      </div>
    </div>
  );
}

export default App;
