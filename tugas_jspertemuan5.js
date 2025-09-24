// app-cli.js

// Data produk awal (minimal 5)
let products = [
  { id: 1, name: "Laptop", price: 12000000 },
  { id: 2, name: "Smartphone", price: 5000000 },
  { id: 3, name: "Headphone", price: 750000 },
  { id: 4, name: "Keyboard", price: 350000 },
  { id: 5, name: "Mouse", price: 200000 }
];

// Fungsi menampilkan semua produk
function showProducts() {
  console.log("\nDaftar Produk:");
  products.forEach(({ id, name, price }) => { // destructuring
    console.log(`${id}. ${name} - Rp${price}`);
  });
}

// Fungsi menambah produk (spread operator)
function addProduct(newProduct) {
  products = [...products, newProduct];
  console.log(`Produk "${newProduct.name}" berhasil ditambahkan!`);
  showProducts();
}

// Fungsi hapus produk (rest parameter)
function deleteProduct(...ids) {
  products = products.filter(p => !ids.includes(p.id));
  console.log(`Produk dengan ID ${ids.join(", ")} berhasil dihapus!`);
  showProducts();
}

// Simulasi penggunaan
showProducts();

addProduct({ id: 6, name: "Printer", price: 1500000 });

deleteProduct(2, 4);
