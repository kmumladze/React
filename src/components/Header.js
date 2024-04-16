import { Nav } from './Nav';

export function Header({ navItems }) {
  return (
    <div className="nav">
      <Nav navItems={navItems} />
    </div>
  );
}
