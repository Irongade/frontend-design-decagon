import React, {useState, useEffect} from "react";
import { Flex, Text, Box, InputGroup, Input, InputLeftElement, Select, Switch, Button, Icon, IconButton } from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi"
import {IoIosCloudDownload} from "react-icons/io"
import {MdKeyboardArrowLeft,MdKeyboardArrowRight} from "react-icons/md"
import UserCardItem from "./UserCardItem";
import UserProfile from "./UserProfile";

const Users = () => {


    return(
        <Flex w="100%" p="50px" bg="#F7F7FF" border="1px solid #707070" borderRadius="28px" direction="column" position="relative">
            <Flex direction="column"> 
                <Text mb="20px" fontSize="37px" fontWeight="bold" color="#262A41" > All Users</Text>
                <Text mb="12px" fontSize="sm" color="#262A41"> Filter by</Text>
                <Flex mb="20px" w="100%" justify="space-between" align="center"> 
                    <Box>
                    <InputGroup size="md" w="100%">
                    <InputLeftElement color="#262A41" opacity="0.31" children={<Icon as={FiSearch} />} />
                    <Input border="0px" opacity="0.62" borderRadius="20px" fontSize="sm" bg="#00000029" color="#262A41" placeholder="Find in list" />
                    </InputGroup>
                    </Box>
                    <Box>
                        <Select bg="#00000029" fontSize="sm" fontWeight="bold" color="#262A41" borderRadius="20px" placeholder="Country">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Box>
                    <Box>
                        <Switch display="inline" defaultIsChecked colorScheme="teal" opacity="0.61" />
                        <Text display="inline" fontSize="sm" color="#262A41"> Show country </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex direction="column">
                <UserCardItem />
                <UserCardItem />
                <UserCardItem />

                {/* <UserProfile /> */}
            </Flex>
            <Flex w="83%" justify="space-between" align="center" position="absolute" bottom="0" mb="15px" >
                <Box> 
                    <Button bg="#7946C1" color="#FFFFFF" borderRadius="28px" leftIcon={<IoIosCloudDownload />}> Download results </Button>
                </Box>
                <Box float="right"> 
                    <IconButton size="sm" mr="5px" bg="#E2E2EA" color="#262A41" as={MdKeyboardArrowLeft} />
                    <IconButton size="sm" bg="#262A41" color="#FFFFFF" as={MdKeyboardArrowRight} />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Users;