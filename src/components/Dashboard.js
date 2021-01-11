import React, {useState} from "react";
import { Flex, Text, Box, InputGroup, Input, InputLeftElement, HStack, Icon } from "@chakra-ui/react"
import {FaUsers,FaMale, FaFemale} from "react-icons/fa"

const Dashboard = () => {


    return(
        <Flex w="50%" direction="column" justify="center" align="center">
            <Box>
                <Text> Hello, </Text>
                <Text> Emerald</Text>
                <Box>
                    <Text> Welcome to your dashboard, kindly sort through the user base</Text>
                </Box>
            </Box>
            <Box>
                <InputGroup>
                    <InputLeftElement />
                    <Input />
                </InputGroup>
            </Box>
            <Box>
                <Text>
                    Show Users
                </Text>
                <HStack>
                    <Box w="40px" h="40px" bg="yellow.200">
                    <Icon as={FaUsers} />
                    </Box>
                    <Box w="40px" h="40px" bg="tomato">
                    <Icon as={FaMale} />
                    </Box>
                    <Box w="40px" h="40px" bg="pink.100">
                    <Icon as={FaFemale} />
                    </Box>
                </HStack>
            </Box>
        </Flex>
    )
}

export default Dashboard;
