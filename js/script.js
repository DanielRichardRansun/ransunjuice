// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
//Ketika hamburger-menu diclick
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//click diluar side bar untuk menghilangkan navbar
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//function untuk kirim pesan di kontak kami
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (event) {
    event.preventDefault();

    // Ambil nilai dari input
    const name = encodeURIComponent(
      document.querySelector("input[placeholder='nama']").value
    );
    const alamat = encodeURIComponent(
      document.querySelector("input[placeholder='alamat']").value
    );
    const phone = encodeURIComponent(
      document.querySelector("input[placeholder='no hp']").value
    );

    // Buat link WhatsApp dengan pesan terisi otomatis
    const whatsappLink = `https://wa.me/628990899432?text=Halo%20Ransun%20Juice,%20saya%20ingin%20memesan%20jus.%0A%0ANama:%20${name}%0ANo%20HP:%20${phone}%0AAlamat:%20${alamat}%0ADeskripsi:%20`;

    // Redirect ke WhatsApp
    window.open(whatsappLink, "_blank");
  });
});
