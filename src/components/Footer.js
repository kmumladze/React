import { Nav } from './Nav';

const navItems = ['Home', 'About', 'Contact'];

export function Footer() {
  return (
    <div className="footer">
      <Nav navItems={navItems} />
    </div>
  );
}
