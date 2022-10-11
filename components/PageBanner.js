export function PageBanner() {
  return (
    <div
      className="card-banner-area checkout-bg dark-overlay"
      style={{
        backgroundImage: "url(assets/img/checkout-bg.jpg)",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="card-banner-content left-line">
            <h1>Launching Soon</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
