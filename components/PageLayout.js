import Head from "next/head";

export function MainLayout({children}) {
  return (
    <>
      <main className="main-content-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 m-auto">
              <div className="customer-information">
                <h3>Help us get better.</h3>
                {children}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
