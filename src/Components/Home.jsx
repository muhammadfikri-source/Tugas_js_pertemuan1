<section
  style={{
    width: "100%",          // penuh kanan-kiri
    height: "100vh",        // penuh 1 layar ke bawah
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "linear-gradient(to right, #2196f3, #21cbf3)", // full background
    color: "white",
    padding: "0 20px",
    margin: 0,
  }}
>
  <h1 style={{ fontSize: "3.5rem", fontWeight: "bold", marginBottom: "20px" }}>
    📚 Selamat Datang di <span style={{ color: "#ffeb3b" }}>BookSales</span>
  </h1>

  <p style={{ fontSize: "1.3rem", marginBottom: "30px", maxWidth: "700px" }}>
    Temukan berbagai buku menarik untuk dibaca, mulai dari pemrograman,
    teknologi, hingga literatur klasik ✨
  </p>

  <a
    href="/books"
    style={{
      backgroundColor: "#ffeb3b",
      color: "#000",
      padding: "14px 30px",
      borderRadius: "30px",
      fontWeight: "bold",
      textDecoration: "none",
      fontSize: "1.1rem",
      transition: "0.3s",
    }}
  >
    🔎 Lihat Koleksi Buku
  </a>
</section>
