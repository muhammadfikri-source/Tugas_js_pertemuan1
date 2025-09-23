// Class Kendaraan (superclass)
class Kendaraan {
    constructor(merk, tahun) {
        this.merk = merk;
        this.tahun = tahun;
    }

    deskripsi() {
        return `${this.merk} (${this.tahun})`;
    }
}

// Class Mobil (subclass)
class Mobil extends Kendaraan {
    constructor(merk, tahun, kapasitas) {
        super(merk, tahun);
        this.kapasitas = kapasitas;
    }

    deskripsi() {
        return `Mobil ${this.merk} (${this.tahun}), kapasitas ${this.kapasitas} orang`;
    }
}

// Class Motor (subclass)
class Motor extends Kendaraan {
    constructor(merk, tahun, tipe) {
        super(merk, tahun);
        this.tipe = tipe;
    }

    deskripsi() {
        return `Motor ${this.merk} (${this.tahun}), tipe ${this.tipe}`;
    }
}

// Class Pelanggan
class Pelanggan {
    constructor(nama, nomorTelepon) {
        this.nama = nama;
        this.nomorTelepon = nomorTelepon;
        this.kendaraanDisewa = null;
    }

    sewaKendaraan(kendaraan) {
        this.kendaraanDisewa = kendaraan;
        console.log(`${this.nama} menyewa ${kendaraan.deskripsi()}`);
    }

    info() {
        return `${this.nama} (${this.nomorTelepon}) menyewa ${this.kendaraanDisewa.deskripsi()}`;
    }
}

// Sistem Manajemen Transportasi
class SistemTransportasi {
    constructor() {
        this.daftarPelanggan = [];
    }

    tambahPelanggan(pelanggan) {
        this.daftarPelanggan.push(pelanggan);
    }

    tampilkanPelanggan() {
        console.log("Daftar pelanggan yang sedang menyewa kendaraan:");
        this.daftarPelanggan.forEach(p => {
            if (p.kendaraanDisewa) {
                console.log(p.info());
            }
        });
    }
}

// ----------------- CONTOH PENGGUNAAN -----------------

// Buat kendaraan
const mobil1 = new Mobil("Toyota Avanza", 2022, 7);
const motor1 = new Motor("Honda Beat", 2021, "Matic");

// Buat pelanggan
const pelanggan1 = new Pelanggan("Fikri", "08123456789");
const pelanggan2 = new Pelanggan("Songmin", "08987654321");

// Transaksi sewa
pelanggan1.sewaKendaraan(mobil1);
pelanggan2.sewaKendaraan(motor1);

// Buat sistem transportasi
const sistem = new SistemTransportasi();
sistem.tambahPelanggan(pelanggan1);
sistem.tambahPelanggan(pelanggan2);

// Tampilkan daftar pelanggan
sistem.tampilkanPelanggan();