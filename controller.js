// controller.js
import { data } from "./data.js";

export function lihatData(callback) {
  // tampilkan data ke DOM
  const list = document.getElementById("daftar");
  list.innerHTML = "";

  data.map((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.nama} | ${item.umur} | ${item.alamat} | ${item.email}`;

    // tombol hapus
    const btn = document.createElement("button");
    btn.textContent = "Hapus";
    btn.addEventListener("click", () => {
      hapusData(index);
      callback();
    });

    li.appendChild(btn);
    list.appendChild(li);
  });
}

export function tambahData(obj) {
  data.push(obj);
}

export function hapusData(index) {
  data.splice(index, 1);
}
