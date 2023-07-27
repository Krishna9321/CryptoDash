import { Card, Checkbox, FormControl, FormLabel, HStack, Input, Box, Stack, Text, Textarea, Button } from "@chakra-ui/react";

function Contact() {
    return (
        <Card p="6" borderRadius="1rem">
            <Stack spacing={4}>
                <Text fontWeight="600" fontSize="sm" color="#606060">
                    You will receive response within 24 hours of time of submit.
                </Text>


                <HStack
                    flexDir={{
                        base: "column",
                        md: "row",
                    }}
                >
                    <FormControl>
                        <FormLabel>First Name</FormLabel>
                        <Input placeholder="Krishna" />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Last Name</FormLabel>
                        <Input placeholder="Gupta" />
                    </FormControl>
                </HStack>


                <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input type="email" placeholder="Krishna@email.com" />
                </FormControl>


                <FormControl>
                    <FormLabel>Message</FormLabel>
                    <Textarea placeholder="I have been enjoying the CryptoVerse" />
                </FormControl>


                <Checkbox defaultChecked>
                    <Text fontSize="xs">
                        I agree with the
                        <Box as="span">
                            {" "}
                            Terms & Conditions
                        </Box>
                        .
                    </Text>
                </Checkbox>


                <Stack>
                    <Button fontSize="sm" bgColor={"#0058AC"} textColor={"white"}>
                        Send a Message
                    </Button>
                    <Button fontSize="sm" colorScheme="gray">
                        Book a Meeting
                    </Button>
                </Stack>
            </Stack>
        </Card>
    );
}

export default Contact;