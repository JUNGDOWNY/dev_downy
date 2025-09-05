import * as Toolbar from '@radix-ui/react-toolbar';

const Header = () => (
  <Toolbar.Root className="header-toolbar" style={{ padding: '1rem', background: '#f5f5f5', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Toolbar.Button className="logo" style={{ fontWeight: 'bold', fontSize: '1.2rem', background: 'none', border: 'none' }}>
      Trip Logo
    </Toolbar.Button>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <Toolbar.Button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Home</Toolbar.Button>
      <Toolbar.Button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>About</Toolbar.Button>
      <Toolbar.Button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>Contact</Toolbar.Button>
    </div>
  </Toolbar.Root>
);

export default Header;