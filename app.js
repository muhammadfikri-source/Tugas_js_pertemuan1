// app.js
import { lihatData, tambahData } from "./controller.js";

// render awal
lihatData(() => lihatData(() => {}));

// handle submit form
document.getElementById("formData").addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const umur = parseInt(document.getElementById("umur").value);
  const alamat = document.getElementById("alamat").value;
  const email = document.getElementById("email").value;

  tambahData({ nama, umur, alamat, email });

  // reset form
  e.target.reset();

  // tampilkan ulang
  lihatData(() => lihatData(() => {}));
});
