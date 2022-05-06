import { HStack, Link } from "@chakra-ui/react";
import { useLocation, Link as RouterLink } from "react-router-dom";

const links = [
  { path: "/", label: "Home" },
  { path: "/photo", label: "Photo" },
];

function NavLink({ to, label, location }) {
  const isActive = location.pathname === to;

  return (
    <Link opacity={isActive ? 1 : 0.5}>
      <RouterLink to={to}>{label}</RouterLink>
    </Link>
  );
}

function NavBar({ children }) {
  const location = useLocation();

  return (
    <HStack as="nav" align="center" justify="space-between" padding="1rem">
      {links.map(({ path, label }) => (
        <NavLink key={path} to={path} label={label} location={location} />
      ))}
    </HStack>
  );
}

export { NavBar };
