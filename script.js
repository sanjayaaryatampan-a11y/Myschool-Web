const navbar = document.getElementById("navbar");
const topBtn = document.getElementById("topBtn");
const fadeElements = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
    if (scrollY > 50) navbar.classList.add("scrolled");
    else navbar.classList.remove("scrolled");

    topBtn.style.display = scrollY > 300 ? "block" : "none";
});

topBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

function fadeInOnScroll() {
    fadeElements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        if (pos < window.innerHeight - 50) el.classList.add("show");
    });
}

window.addEventListener("scroll", fadeInOnScroll);
fadeInOnScroll();

function showMessage() {
    alert(
        "Selamat datang di Sekolah Harapan Bangsa! \n\n" +
        "• Lihat profil sekolah untuk mengetahui sejarah dan visi misi.\n" +
        "• Kunjungi halaman Program untuk melihat kegiatan dan ekstrakurikuler.\n" +
        "• Buka halaman Galeri untuk melihat dokumentasi kegiatan siswa.\n" +
        "• Hubungi kami melalui halaman Kontak jika membutuhkan informasi lebih lanjut.\n\n" +
        "Terima kasih telah berkunjung!"
    );
}

