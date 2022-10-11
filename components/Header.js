export function Header() {
  return (
    <header className="header-area default-header">
      <div className="container">
        <div className="header-wrapper d-flex align-items-center justify-content-between">
          {/*header-logo*/}
          <div className="header-logo">
            <a href="/">StorKippa</a>
          </div>
          {/* menu-bar */}
          <div className="menu-bar">
            <ul className="d-flex align-items-center justify-content-between">
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
          {/* sign-in area */}
        </div>
      </div>
    </header>
  );
}
