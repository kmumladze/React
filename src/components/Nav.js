export function Nav({ navItems }) {
  return (
    <nav>
      <ul>
        {navItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </nav>
  );
}
