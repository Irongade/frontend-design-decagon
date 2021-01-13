import React from "react";
import { Box, InputGroup, Input, InputLeftElement,Icon} from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi"


const TextInput = ({marginTop, size, width, color, inputOpacity, searchIconOpacity, bgColor, borderRadiusValue, textColor, placeholderValue, onChangeFn}) => {
    return (
        <Box mt={marginTop}>
            <InputGroup size={size} w={width}>
                <InputLeftElement opacity={searchIconOpacity} children={<Icon as={FiSearch} />} />
                <Input 
                    fontSize="sm" 
                    opacity={inputOpacity} 
                    border="0px" 
                    borderRadius={borderRadiusValue} 
                    fontWeight="600" 
                    bg={bgColor} 
                    color={textColor} 
                    placeholder={placeholderValue} 
                    onChange={onChangeFn} />
            </InputGroup>
        </Box>
    )
}

export default TextInput;