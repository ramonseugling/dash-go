import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Ramon Seugling</Text>
          <Text color="gray.300" fontSize="small">
            ramonseugling@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Ramon Seugling"
        src="https://github.com/ramonseugling.png"
      />
    </Flex>
  );
}
