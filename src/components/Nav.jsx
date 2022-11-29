import { Link } from 'react-router-dom';
const navItems = [
  {
    to: '/characters',
    label: 'Character List',
  },
  {
    to: '/search',
    label: 'Search',
  },
  {
    to: '/about',
    label: 'About',
  },
];
const Nav = () => (
  <nav className="flex flex-col text-gray-900 text-center sm:flex-row sm:text-left sm:justify-between py-4 px-6 bg-white shadow sm:items-baseline w-full">
    <div className="mb-2 sm:mb-0">
      <Link to="/" className="text-2xl no-underline">
        SWCDB (Star Wars Character Database)
      </Link>
    </div>
    <div>
      {navItems.map((navItem, idx) => (
        <Link
          key={idx}
          to={navItem.to}
          className="text-lg no-underline ml-2 hover:text-red-900 hover:underline"
        >
          {navItem.label}
        </Link>
      ))}
    </div>
  </nav>
);

export default Nav;
