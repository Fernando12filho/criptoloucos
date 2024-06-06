import {
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
} from "@chakra-ui/react";

import "./style.css";

function Investments() {
  //Part where user will input past investments
  //Amount Bought in Dollars // Reais
  //Price of bitcoin or ethereum
  //Needs to be saved on the database and retrived every time user login on the app

  //Two buttons Add Investments and Edit Investments
  //Edit investments show be disable in case there are no investments made yet
  //Add Investments when clicked should open up a form or create a new one
  return (
    <div>
      <Box>
        <Button colorScheme="blue" marginRight="10px">
          Add Investment
        </Button>
        <Button colorScheme="blue" disabled={true}>
          Edit Investments
        </Button>
      </Box>
      <div className="investment-input">
        <Select placeholder="Select option" width="30vw" marginRight="10px">
          <option value="option1">Bitcoin</option>
          <option value="option2">Ethereum</option>
        </Select>
        <InputGroup size="md" width="40vw">
          <InputLeftElement
            pointerEvents="none"
            color="gray.300"
            fontSize="1.2em"
          >
            R$
          </InputLeftElement>
          <Input placeholder="Enter amount" />
        </InputGroup>
      </div>
    </div>
  );
}

export default Investments;
