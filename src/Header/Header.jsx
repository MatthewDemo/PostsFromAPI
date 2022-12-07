function Header() {
  return (
    <div className="headerTitle">
      Test task for Smarti
      <svg
        className="reloadButton"
        onClick={() => window.location.reload()}
        viewBox="0 0 24 24"
      >
        <g id="info" />
        <g id="icons">
          <path
            d="M20.3,3.7l-1.9,1.9c-3.5-3.5-9.2-3.5-12.7,0c-3.5,3.5-3.5,9.2,0,12.7C7.4,20.1,9.7,21,12,21s4.6-0.9,6.4-2.6   c0.8-0.8,0.8-2,0-2.8s-2-0.8-2.8,0c-1.9,2-5.1,1.9-7.1,0C7.5,14.6,7,13.3,7,12s0.5-2.6,1.5-3.5c1.9-2,5.1-2,7.1,0l-1.8,1.8   c-0.6,0.6-0.2,1.7,0.7,1.7H21c0.6,0,1-0.4,1-1V4.4C22,3.5,20.9,3.1,20.3,3.7z"
            id="update"
          />
        </g>
      </svg>
    </div>
  );
}

export default Header;
