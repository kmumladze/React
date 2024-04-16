import { Nav } from './Nav';

const navItems = ['Home', 'About', 'Contact'];

export function Header() {
  return (
    <div className="nav">
      <Nav navItems={navItems} />
    </div>
  );
}
