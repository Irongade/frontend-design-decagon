import React, {useState, useEffect} from "react";
import { Flex, Text, Box, InputGroup, Input, InputLeftElement, Select, Switch, Button, IconButton } from "@chakra-ui/react"
import UserCardItem from "./UserCardItem";

const Users = () => {


    return(
        <Flex w="100%" p="50px" bg="#F7F7FF" border="1px solid #707070" borderRadius="28px" direction="column">
            <Flex direction="column"> 
                <Text> All Users</Text>
                <Text> Filter by</Text>
                <Flex> 
                    <Box>
                        <InputGroup>
                            <InputLeftElement />
                            <Input />
                        </InputGroup>
                    </Box>
                    <Box>
                        <Select placeholder="Select option">
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                            <option value="option3">Option 3</option>
                        </Select>
                    </Box>
                    <Box>
                        <Switch />
                        <Text> Show country </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex>
                <UserCardItem />
            </Flex>
            <Flex>
                <Box> 
                    <Button> Download results </Button>
                </Box>
                <Box> 
                    <IconButton />
                    <IconButton />

                </Box>
            </Flex>
        </Flex>
    )
}

export default Users;