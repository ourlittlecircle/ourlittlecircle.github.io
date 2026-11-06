OUR LITTLE CIRCLE — PANDUAN MENJALANKAN
=======================================

ISI FOLDER
- index.html : struktur dan isi website
- style.css  : seluruh desain dan tampilan
- script.js  : animasi dan interaksi
- assets/    : tempat menyimpan foto/logo milik komunitas

CARA MENJALANKAN DI WINDOWS
1. Ekstrak file ZIP ini.
2. Buka folder "our-little-circle".
3. Klik dua kali file index.html.
4. Website akan terbuka di browser (Chrome/Edge).

Tidak perlu menginstal PHP, Laravel, Node.js, atau database.

CARA MENGEDIT TEKS
1. Klik kanan index.html > Open with > Notepad (atau VS Code).
2. Cari teks contoh seperti "Nama Teman 01", "Si paling punya ide",
   "CHAPTER 01", lalu ganti dengan cerita komunitas kalian.
3. Simpan file (Ctrl + S), lalu refresh browser (F5).

CARA MENAMBAHKAN FOTO
1. Salin foto ke folder assets/.
2. Buka index.html.
3. Cari bagian "YOUR PHOTO GOES HERE".
4. Ganti elemen placeholder terkait dengan contoh:
   <div class="memory-placeholder placeholder-a">
     <img src="assets/foto-kumpul.jpg" alt="Momen kumpul bersama">
     <b>01</b>
   </div>
5. Agar foto memenuhi kotak, tambahkan aturan ini di bagian paling bawah style.css:

   .memory-placeholder img {
     width: 100%;
     height: 100%;
     object-fit: cover;
     position: absolute;
     inset: 0;
   }

Untuk foto anggota, kamu bisa mengganti isi .member-visual dengan tag img,
lalu gunakan CSS yang sama. Pastikan nama file foto sama persis.

PENTING
- Font dari Google Fonts membutuhkan internet. Jika offline, website tetap
  terbuka dan akan memakai font cadangan.
- Foto yang belum ditambahkan akan tetap tampil sebagai kotak desain contoh.
- Karena website ini publik jika diunggah ke hosting, jangan masukkan nomor
  telepon, alamat rumah, atau informasi pribadi teman tanpa izin mereka.

CARA MEMBUAT WEBSITE ONLINE GRATIS
Pilihan sederhana: Netlify
1. Buka https://www.netlify.com/ dan buat akun.
2. Setelah login, cari fitur untuk menambahkan/deploy site secara manual
   (biasanya tersedia opsi drag-and-drop).
3. Seret folder hasil ekstrak "our-little-circle" ke area upload Netlify.
4. Tunggu proses selesai. Netlify akan memberi alamat website sementara
   seperti nama-acak.netlify.app.
5. Kamu bisa mengubah nama subdomain melalui pengaturan site jika masih tersedia.

Catatan: alamat dan tampilan menu Netlify dapat berubah. Domain sendiri tidak
wajib untuk mulai membagikan website.
