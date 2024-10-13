function Navbar() {
  return (
    <div className="container-fluid" style={{ padding: 0 }} data-bs-theme="dark">
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        aria-label="Main navigation"
        style={{ padding: '0 1em' }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img src="src/assets/white-icon.svg" alt="tecs logo" height="27px" width="45px" />
              <span style={{ fontWeight: '200', fontSize: '1.8em' }}>TECS Prep</span>
            </div>
          </a>
        </div>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item">
            <a className="nav-link" href="campaignlist">
              Campaigns
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profile">
              Profile
            </a>
          </li>
          <img
            style={{
              marginLeft: '1rem',
              height: '50px',
              width: '50px',
              borderRadius: '100%',
              objectFit: 'cover',
            }}
            src="https://www.adobe.com/creativecloud/photography/discover/media_131179edca5f92db203e2b78cb8a308605afbc958.png?width=750&format=png&optimize=medium"
            alt="profile"
          />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
