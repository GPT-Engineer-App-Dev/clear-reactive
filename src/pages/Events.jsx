import { Container, Heading, Text, VStack } from "@chakra-ui/react";
import { useEvents } from "../integrations/supabase/index.js";

const Events = () => {
  const { data: events, isLoading, error } = useEvents();

  if (isLoading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading events: {error.message}</Text>;

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Events</Heading>
        {events.length === 0 ? (
          <Text>No events available.</Text>
        ) : (
          events.map(event => (
            <VStack key={event.id} spacing={2} p={4} borderWidth={1} borderRadius={8} width="100%">
              <Heading as="h2" size="md">{event.name}</Heading>
              <Text>Date: {new Date(event.date).toLocaleDateString()}</Text>
              <Text>Venue: {event.venue_name}</Text>
              <Text>Starred: {event.is_starred ? "⭐" : "No"}</Text>
            </VStack>
          ))
        )}
      </VStack>
    </Container>
  );
};

export default Events;