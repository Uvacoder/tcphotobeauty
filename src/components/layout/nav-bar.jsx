import { Heading, HStack, Link, VStack, Text } from "@chakra-ui/react";
import { useLocation, Link as RouterLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/photo", label: "Photo" },
  { path: "/video", label: "Video" },
];

function NavBar() {
  const location = useLocation();

  return (
    <VStack pt={10}>
      <Logo />
      <HStack
        as="nav"
        align="center"
        justify="center"
        padding="1rem"
        spacing={5}
      >
        {links.map(({ path, label }) => (
          <NavLink key={path} to={path} label={label} location={location} />
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
      fontSize={13}
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
