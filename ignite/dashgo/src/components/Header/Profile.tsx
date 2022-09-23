import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Fabiano Pereira</Text>
          <Text color="gray.300" fontSize="small">ifabianoi@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Fabiano Pereira" src="https://avatars.githubusercontent.com/u/1951762?v=4" />

    </Flex>
  );
}