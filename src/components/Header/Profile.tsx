import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex
      align="center"
    >
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Manoel</Text>
          <Text color="gray.300" fontSize="small">
            Victor.manoel8@hotmail.com
          </Text>
        </Box>
      ) }

      <Avatar size="md" name="Victor Manoel" src="https://github.com/VictorManoelCostaDeBarros.png" />
    </Flex>
  )
} 