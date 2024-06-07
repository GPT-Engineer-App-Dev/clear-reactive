import { Box, Flex, Link, Spacer, Text, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Box bg="brand.700" p={4} color="white">
      <Flex maxW="container.lg" mx="auto" align="center">
        <Text fontSize="xl" fontWeight="bold">
          MyWebsite
        </Text>
        <Spacer />
        <Flex>
          <Link as={RouterLink} to="/" p={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/about" p={2}>
            About
          </Link>
          <Link as={RouterLink} to="/contact" p={2}>
            Contact
          </Link>
          {!session ? (
            <Link as={RouterLink} to="/login" p={2}>
              Login
            </Link>
          ) : (
            <Button onClick={logout} p={2}>
              Logout
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;