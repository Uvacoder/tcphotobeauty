import { Heading, HStack, Link, VStack, Text } from "@chakra-ui/react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { routes } from "../../config";
import { useDocumentTitle } from "../../hooks";

function NavBar() {
  const location = useLocation();
  const title = routes.find((e) => e.path === location.pathname).title;

  useDocumentTitle(`T&C | ${title}`);

  return (
    <VStack pt={10} pb={3}>
      <Logo />
      <HStack
        as="nav"
        align="center"
        justify="center"
        padding="1rem"
        spacing={5}
      >
        {routes.map(({ path, title }) => (
          <NavLink key={path} to={path} label={title} location={location} />
        ))}
      </HStack>
    </VStack>
  );
}

function NavLink({ to, label, location }) {
  const isActive = location.pathname === to;

  return (
    <Link
      textTransform="uppercase"
      fontWeight={400}
      fontSize={12}
      opacity={isActive ? 1 : 0.3}
    >
      <RouterLink to={to}>{label}</RouterLink>
    </Link>
  );
}

function Logo() {
  return (
    <HStack spacing={1}>
      <Heading>T</Heading>
      <Text>&</Text>
      <Heading>C</Heading>
    </HStack>
  );
}

export { NavBar };
