function Navbar() {
  return (
    <div className="container-fluid" data-bs-theme="dark">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        aria-label="Main navigation"
        style={{ padding: '0 1em' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="src/assets/white-icon.svg" alt="tecs logo" height="27px" width="45px" />
              <span style={{ fontWeight: '200', fontSize: '1.8em' }}>TECS Prep</span>
            </div>
          </a>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Campaigns
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              TXP:&nbsp;7
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Profile
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
