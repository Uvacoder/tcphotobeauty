import {
  Heading,
  HStack,
  Link,
  VStack,
  Text,
  Spacer,
  IconButton,
} from "@chakra-ui/react";
import { useLocation, Link as RouterLink } from "react-router-dom";
import { routes } from "../../config";
import { useDocumentTitle } from "../../hooks";
import { FaHamburger } from "react-icons/fa";

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
    <HStack spacing={2}>
      <Heading fontWeight="medium" fontSize={45}>
        T
      </Heading>
      {/* <Text fontSize={28}>·</Text> */}
      <Text fontWeight="light">+</Text>
      <Heading fontWeight="medium" fontSize={45}>
        C
      </Heading>
    </HStack>
  );
}

function MobileNavBar() {
  const location = useLocation();

  return (
    <HStack>
      <Logo />
      <Spacer />
      <IconButton icon={<FaHamburger />} />
    </HStack>
  );
}

export { NavBar };
