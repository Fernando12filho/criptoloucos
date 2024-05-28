import { Card, CardBody, Stack, Heading, Text, Image
 } from '@chakra-ui/react'

interface ChildProps {
  coinName: String;
  coinPrice: Number;
  coinImage: String;

}

function CoinCard({coinName, coinPrice, coinImage}: ChildProps) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          boxSize="20vh"
          src={coinImage.toString()}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{coinName}</Heading>
          <Text color="blue.600" fontSize="2xl">
            R${coinPrice.toPrecision(8)}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CoinCard;
