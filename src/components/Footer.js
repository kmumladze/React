import { Nav } from './Nav';

export function Footer({ navItems }) {
  return (
    <div className="footer">
      <Nav navItems={navItems} />
    </div>
  );
}
