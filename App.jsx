function Home() {
  return (
    <div className="container text-center mt-5">
      <h1>Welcome to club terbaik di dunia</h1>
      <p>"Mu cupu wehh"</p>
      {/* Banner Liverpool */}
      <img
        src="https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"
        className="img-fluid my-4"
        alt="Liverpool Banner"
        style={{ maxHeight: "300px" }}
      />
    </div>
  );
}

function Team() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Team</h2>
      <div className="row">
        {/* Anggota 1 */}
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyJ__sRYOrPVJFdXCVrpvt9fbXqi1ZH3uzozu9tLk68g19rLjFP0w0VACCYxute_zhQIvVzpP-BAOYL9OJXZdeDpUy3TKmW2XJLvuEpNbGLg"
              className="card-img-top"
              alt="Mohamed Salah"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Mohamed Salah</h5>
              <p className="card-text">Forward - Liverpool FC</p>
            </div>
          </div>
        </div>

        {/* Anggota 2 */}
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQfCHuLioujTuWCHAyxGt5P2WMJ9OGYc7PN36olm7CadYB4BFGfZbZzUEXwGam0J9YgvBYje_rlBzDf9MMoAV2JjTMG-De1Z1Ekz5d8a-zsCw"
              className="card-img-top"
              alt="Virgil van Dijk"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Virgil van Dijk</h5>
              <p className="card-text">Defender - Liverpool FC</p>
            </div>
          </div>
        </div>

        {/* Anggota 3 */}
        <div className="col-md-4">
          <div className="card">
            <img
              src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTKfKYShr7_G9brAFPoqSBMGHj0m9Alekc-iP5NrWZ3HhUI0gzEAtkB7VJbXslu8Rh1iE8vzcHpMHXoeFyJsImvKjCb9_jo3EUemNf_MF-M"
              className="card-img-top"
              alt="Alisson Becker"
            />
            <div className="card-body text-center">
              <h5 className="card-title">Alisson Becker</h5>
              <p className="card-text">Goalkeeper - Liverpool FC</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form className="w-50 mx-auto">
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input type="text" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Pesan</label>
          <textarea className="form-control"></textarea>
        </div>
        <button type="submit" className="btn btn-danger">
          Kirim
        </button>
      </form>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <Home />
      <Team />
      <Contact />
    </div>
  );
}
