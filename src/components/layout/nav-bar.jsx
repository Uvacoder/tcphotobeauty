import { HStack, Link } from "@chakra-ui/react";
import { useLocation, Link as RouterLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/photo", label: "Photo" },
];

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

function NavBar() {
  const location = useLocation();

  return (
    <HStack as="nav" align="center" justify="center" padding="1rem" spacing={5}>
      {links.map(({ path, label }) => (
        <NavLink key={path} to={path} label={label} location={location} />
      ))}
    </HStack>
  );
}

export { NavBar };
