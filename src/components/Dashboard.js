import React, {useState} from "react";
import { Flex, Text, Box, InputGroup, Input, InputLeftElement, HStack, Icon } from "@chakra-ui/react"
import {FaUsers,FaMale, FaFemale} from "react-icons/fa"
import {FiSearch} from "react-icons/fi"

const Dashboard = () => {


    return(
        <Flex w="50%" p="50px" color="#FFFFFF" direction="column" justify="center" >
            <Box>
                <Text fontSize="49px" display="inline"> Hello, </Text>
                <Text fontSize="37px" display="inline"> Emerald</Text>
                <Box fontSize="16px" mt="20px">
                    <Text opacity="0.66"> Welcome to your dashboard, kindly sort through the user base</Text>
                </Box>
            </Box>
            <Box mt="40px">
                <InputGroup size="lg" w="80%">
                    <InputLeftElement children={<Icon as={FiSearch} />} />
                    <Input fontSize="sm" opacity="0.7" border="0px" borderRadius="10px"  bg="#3C3F54" color="#FFFFFF" placeholder="Find a user" />
                </InputGroup>
            </Box>
            <Box mt="40px">
                <Text opacity="0.7" fontSize="22px">
                    Show Users
                </Text>
                <HStack mt="40px" spacing="35px" color="#FFFFFF">
                    <Box>
                        <Flex borderRadius="20px" boxShadow="md" w="85px" h="70px" bg="#F935A9" justify="center" align="center">
                            <Icon w="30px" h="65px" as={FaUsers} />
                        </Flex>
                        <Text opacity="0.7" mt="10px" fontSize="sm" textAlign="center"> All Users </Text>
                    </Box>
                    <Box>
                        <Flex borderRadius="20px" boxShadow="md" w="85px" h="70px" bg="#30BBB5" justify="center" align="center">
                            <Icon w="18px" h="45px" as={FaMale} />
                        </Flex>
                        <Text opacity="0.7" mt="10px" fontSize="sm" textAlign="center"> Male Users </Text>
                    </Box>
                    <Box>
                        <Flex borderRadius="20px" boxShadow="md" w="85px" h="70px" bg="#7946C1" justify="center" align="center">
                            <Icon w="18px" h="45px" as={FaFemale} />
                        </Flex>
                        <Text opacity="0.7" mt="10px" fontSize="sm" textAlign="center"> Female Users </Text>
                    </Box>
                </HStack>
            </Box>
        </Flex>
    )
}

export default Dashboard;
