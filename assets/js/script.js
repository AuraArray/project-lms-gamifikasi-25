/* EduPionir - Script Interaksi Utama
  Dibuat untuk: Project LMS Gamifikasi
*/

// 1. Pesan Selamat Datang saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Sistem EduPionir Berhasil Dimuat!");
});

// 2. Fungsi Login Sederhana (Hanya simulasi)
function handleLogin(event) {
    event.preventDefault(); // Mencegah halaman refresh
    alert("Berhasil Masuk! Selamat datang kembali, Pejuang Ilmu! 🔥");
    window.location.href = "pages/dashboard.html";
}

// 3. Fungsi Cek PIN di Halaman Courses (Task 4)
function cekPinKursus() {
    const pinInput = document.getElementById('pinInput').value;
    const feedback = document.getElementById('pinFeedback');

    if (pinInput === "123456") {
        alert("🎉 PIN Benar! Materi telah dibuka.");
        // Di sini nanti bisa ditambahkan logika untuk membuka materi
    } else {
        alert("❌ PIN Salah, coba tanya admin ya!");
    }
}

// 4. Animasi Sederhana saat klik Lencana (Badge)
function klikBadge(namaBadge) {
    alert("🏅 Kamu mengklik lencana: " + namaBadge + "\nTerus belajar untuk koleksi lebih banyak!");
}

// 5. Fitur Simpan Postingan di Social Feed (Simulasi Task 7)
function kirimPostingan() {
    const teks = document.querySelector('textarea').value;
    if (teks.trim() === "") {
        alert("Tulis sesuatu dulu yuk sebelum posting!");
    } else {
        alert("✅ Postingan kamu berhasil dibagikan ke teman-teman!");
        document.querySelector('textarea').value = ""; // Kosongkan box
    }
}

// 6. Notifikasi Skor Battle (Task 5)
function tampilkanSkor(nama, skor) {
    console.log(`User ${nama} mendapatkan skor: ${skor}`);
    // Bisa dikembangkan untuk animasi angka naik
}
