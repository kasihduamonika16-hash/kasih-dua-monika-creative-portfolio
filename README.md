# Portofolio Kasih Dua Monika 🌟

Website portofolio interaktif, responsif, dan Progressive Web App (PWA) yang dapat berjalan baik secara **online** maupun **offline**.

---

## 🚀 Cara Menjalankan & Mengedit di Komputer Sendiri

### 1. Persiapan
Pastikan Anda sudah menginstal **Node.js** (versi 18 ke atas) di komputer Anda:
- Unduh gratis di: [nodejs.org](https://nodejs.org)

### 2. Buka Folder Proyek
Ekstrak file `.zip` ini, lalu buka foldernya di terminal atau melalui **VS Code** (*Visual Studio Code*).

### 3. Instal Dependensi
Jalankan perintah berikut di terminal:
```bash
npm install
```

### 4. Jalankan Server Pengembangan (Edit Sambil Live Preview)
```bash
npm run dev
```
Buka browser di alamat `http://localhost:5173` (atau port yang tertera). Setiap kali Anda mengubah file di folder `src/`, tampilan di browser akan otomatis terupdate!

---

## ✏️ Panduan Mengedit Konten

1. **Mengubah Data & Teks Halaman**:
   - Buka file `src/data/portfolioData.ts`.
   - Di file ini tersimpan seluruh judul, deskripsi, software, kategori, dan kontak untuk ke-18 halaman. Anda bisa mengubah teks apa pun dengan sangat mudah!

2. **Mengganti / Menambah Gambar Halaman**:
   - Gambar halaman tersimpan di folder `public/pages/`:
     - `page_01.jpg` hingga `page_18.jpg` (gambar resolusi penuh)
     - `thumb_01.jpg` hingga `thumb_18.jpg` (thumbnail cepat)
   - Anda cukup mengganti gambar dengan nama file yang sama jika ingin memperbarui desainnya.

3. **Mengubah Kontak & Sosial Media**:
   - Edit di `src/components/ContactSection.tsx` dan `src/data/portfolioData.ts`.

---

## 🌐 Cara Hosting Gratis & Online Selamanya

Anda bisa meng-online-kan website ini secara **100% GRATIS** dengan domain kustom atau domain bawaan:

### Pilihan 1: Vercel (Paling Direkomendasikan & Sangat Mudah)
1. Buat akun di [vercel.com](https://vercel.com) (bisa login menggunakan akun GitHub).
2. Upload folder proyek ini ke repositori [GitHub](https://github.com) Anda.
3. Di dashboard Vercel, klik **"Add New Project"** lalu pilih repositori GitHub Anda.
4. Klik **Deploy**. Dalam 1 menit website Anda sudah online dengan URL seperti `https://monika-portfolio.vercel.app`.

### Pilihan 2: Netlify
1. Buka [netlify.com](https://netlify.com).
2. Jalankan perintah `npm run build` di komputer Anda, ini akan menghasilkan folder `dist`.
3. Cukup seret (*drag and drop*) folder `dist` ke dashboard Netlify. Website langsung online seketika!

### Pilihan 3: GitHub Pages
1. Jalankan `npm run build`.
2. Deploy folder `dist` ke branch `gh-pages` di repositori GitHub Anda.

---

## 📱 Cara Kerja Mode Offline & Online (PWA)

- **Online**: Pengunjung membuka URL website seperti biasa melalui browser.
- **Offline**:
  - Website ini sudah dilengkapi teknologi **Service Worker** dan **Web App Manifest**.
  - Saat pertama kali dibuka online, seluruh halaman dan gambar akan tersimpan di *browser cache* secara otomatis.
  - Setelah itu, meskipun internet dimatikan atau ponsel dalam mode pesawat, website tetap bisa dibuka!
  - Pengunjung dan Anda dapat menekan tombol **"Install App"** di pojok kanan atas untuk memasang portofolio ini sebagai aplikasi mandiri di layar utama ponsel Android, iPhone/iPad, maupun laptop.
