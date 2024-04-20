document.addEventListener("DOMContentLoaded", function () {
     // Mengambil semua tautan kategori
     var kategoriLinks = document.querySelectorAll(".kategori-link");
   
     // Menambahkan penanganan klik ke setiap tautan kategori
     kategoriLinks.forEach(function (link) {
       link.addEventListener("click", function (event) {
         // Menghentikan perilaku default dari tautan
         event.preventDefault();
   
         // Mendapatkan id target dari href
         var targetId = link.getAttribute("href").substring(1);
   
         // Menyembunyikan semua produk
         var semuaProduk = document.querySelectorAll(".produk-semua > div");
         semuaProduk.forEach(function (produk) {
           produk.style.display = "none";
         });
   
         // Menampilkan semua produk jika tautan "Semua" diklik
         if (targetId === "semua") {
           semuaProduk.forEach(function (produk) {
             produk.style.display = "block";
           });
         } else {
           // Menampilkan produk yang sesuai dengan id target
           var targetProduk = document.getElementById(targetId);
           if (targetProduk) {
             targetProduk.style.display = "block";
           }
         }
       });
     });
   });

// collor navbar
   document.addEventListener("DOMContentLoaded", function () {
    // Mengambil semua tautan kategori
    var kategoriLinks = document.querySelectorAll(".kategori-link");
  
    // Menambahkan penanganan klik ke setiap tautan kategori
    kategoriLinks.forEach(function (link) {
      link.addEventListener("click", function (event) {
        // Menghentikan perilaku default dari tautan
        event.preventDefault();
  
        // Mendapatkan id target dari href
        var targetId = link.getAttribute("href").substring(1);
  
        // Menambahkan kelas 'active' pada kategori yang sesuai dengan id target
        document.querySelectorAll('.menu > div').forEach(function(elem) {
          elem.classList.remove('active');
        });
        document.querySelector('.menu .' + targetId).classList.add('active');
      });
    });
  });
  
  // algoritma search product
  document.addEventListener("DOMContentLoaded", function () {
    var inputCari = document.getElementById('cari');
    inputCari.addEventListener('input', function () {
      var kataKunci = inputCari.value.toLowerCase(); // Mengambil nilai input dan mengonversi menjadi lowercase
      
      var semuaProduk = document.querySelectorAll('.all-product'); // Mengambil semua produk
      
      semuaProduk.forEach(function(produk) {
        var namaProduk = produk.querySelector('#nama-product').textContent.toLowerCase(); // Mengambil teks nama produk dan mengonversi menjadi lowercase
        
        // Memeriksa apakah teks nama produk mengandung kata kunci
        if (namaProduk.includes(kataKunci)) {
          produk.style.display = 'block'; // Menampilkan produk jika cocok
        } else {
          produk.style.display = 'none'; // Menyembunyikan produk jika tidak cocok
        }
      });
    });
  });
  
  
  // card  
document.addEventListener("DOMContentLoaded", function () {
  var cardContainer = document.getElementById('card');
  var uangBayarInput = document.getElementById('uang-bayar');
  var hitungKembalianButton = document.getElementById('hitung-kembalian');
  var hasilBayarContainer = document.getElementById('hasil-bayar');
  var hasilBayarElement = document.getElementById('hasil');

  hitungKembalianButton.addEventListener('click', function() {
    // Mengambil total harga dari keranjang
    var totalHarga = 0;
    var hargaProduk = cardContainer.querySelectorAll('#rp');
    hargaProduk.forEach(function(harga) {
      var hargaString = harga.textContent.replace('Rp ', '').replace(',', '');
      totalHarga += parseInt(hargaString);
    });

    // Mengambil jumlah uang yang dibayar
    var uangBayar = parseFloat(uangBayarInput.value);

    // Menghitung kembalian atau menampilkan pesan khusus
    if (uangBayar < totalHarga) {
      var kurang = totalHarga - uangBayar;
      hasilBayarElement.textContent = 'Uang yang kurang: Rp ' + kurang.toLocaleString();
    } else if (uangBayar > totalHarga) {
      var kembalian = uangBayar - totalHarga;
      hasilBayarElement.textContent = 'Kembalian: Rp ' + kembalian.toLocaleString();
    } else {
      hasilBayarElement.textContent = 'Pembayaran sukses';
    }

    // Menampilkan hasil bayar container
    hasilBayarContainer.style.display = 'block';
  });
});


  document.addEventListener("DOMContentLoaded", function () {
    var addToCartButtons = document.querySelectorAll('.add-to-cart');
    var cardContainer = document.getElementById('card');
  
    addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
        event.preventDefault();
  
        var productId = button.getAttribute('data-product-id');
        var productElement = document.getElementById(productId);
  
        if (productElement) {
          // Clone elemen produk
          var clonedProduct = productElement.cloneNode(true);
  
          // Menghilangkan tombol tambah ke keranjang dari klon produk
          var addToCartButton = clonedProduct.querySelector('.add-to-cart');
          if (addToCartButton) {
            addToCartButton.parentNode.removeChild(addToCartButton);
          }
  
          // Menambahkan klon produk ke dalam keranjang
          cardContainer.appendChild(clonedProduct);
  
          // Menghitung total harga
          var totalHarga = 0;
          var hargaProduk = cardContainer.querySelectorAll('#rp');
          hargaProduk.forEach(function(harga) {
            var hargaString = harga.textContent.replace('Rp ', '').replace(',', '');
            totalHarga += parseInt(hargaString);
          });
  
          // Menampilkan total harga di dalam keranjang
          var totalHargaElement = document.createElement('p');
          totalHargaElement.textContent = 'Total Harga: Rp ' + totalHarga.toLocaleString();
          cardContainer.appendChild(totalHargaElement);
        }
      });
    });
  });

  // semuvunyikan card jika belum di klik
  // jika sudah di klik sembunyikan produk
  document.addEventListener("DOMContentLoaded", function () {
    var toggleCardLink = document.getElementById('toggle-card');
    var cardDiv = document.getElementById('card');
    var semuaDiv = document.getElementById('semua');
  
    // Fungsi untuk menampilkan atau menyembunyikan elemen card
    function toggleCardVisibility(event) {
      event.preventDefault(); // Mencegah navigasi ke "#card"
      if (cardDiv.style.display === 'none') {
        cardDiv.style.display = 'block';
        semuaDiv.style.display = 'none'; // Menyembunyikan elemen dengan ID "semua"
      } else {
        cardDiv.style.display = 'none';
        semuaDiv.style.display = 'block'; // Menampilkan elemen dengan ID "semua"
      }
    }
  
    // Menambahkan event listener untuk tautan
    toggleCardLink.addEventListener('click', toggleCardVisibility);
  });
  

  // pembayaran
  document.addEventListener("DOMContentLoaded", function () {
    var cardContainer = document.getElementById('card');
    var uangBayarInput = document.getElementById('uang-bayar');
    var hitungKembalianButton = document.getElementById('hitung-kembalian');
    var hasilBayarContainer = document.getElementById('hasil-bayar');
    var hasilBayarElement = document.getElementById('hasil');
  
    hitungKembalianButton.addEventListener('click', function() {
      // Memeriksa apakah input uang-bayar tidak kosong
      if (uangBayarInput.value.trim() === '') {
        alert('Mohon masukkan jumlah uang yang dibayar.');
        return; // Keluar dari fungsi jika input kosong
      }
  
      // Mengambil total harga dari keranjang
      var totalHarga = 0;
      var hargaProduk = cardContainer.querySelectorAll('#rp');
      hargaProduk.forEach(function(harga) {
        var hargaString = harga.textContent.replace('Rp ', '').replace(',', '');
        totalHarga += parseInt(hargaString);
      });
  
      // Mengambil jumlah uang yang dibayar
      var uangBayar = parseFloat(uangBayarInput.value);
  
      // Menghitung kembalian atau menampilkan pesan khusus
      if (uangBayar < totalHarga) {
        var kurang = totalHarga - uangBayar;
        hasilBayarElement.textContent = 'Uang yang kurang: Rp ' + kurang.toLocaleString();
        hasilBayarElement.style.color = 'red'; // Teks berwarna merah
        hasilBayarContainer.style.display = 'block'; // Menampilkan hasil bayar container
      } else if (uangBayar > totalHarga) {
        var kembalian = uangBayar - totalHarga;
        hasilBayarElement.textContent = 'Kembalian: Rp ' + kembalian.toLocaleString();
        hasilBayarElement.style.color = 'green'; // Teks berwarna hijau
        hasilBayarContainer.style.display = 'block'; // Menampilkan hasil bayar container
      } else {
        hasilBayarElement.innerHTML = 'Pembayaran sukses <br> Pesanan Segera Diantar';

        hasilBayarElement.style.color = 'green'; // Teks berwarna hijau
        hasilBayarContainer.style.display = 'block'; // Menampilkan hasil bayar container
      }
    });
  });

  // efek getar saat memasukan produk ke keranjang
  document.addEventListener("DOMContentLoaded", function() {
    var toggleCardButton = document.getElementById('toggle-card');
    
    toggleCardButton.addEventListener('click', function() {
      // Lakukan efek getar
      toggleCardButton.style.animation = 'shake 0.5s';
  
      // Setel waktu tertentu untuk menghapus animasi getar
      setTimeout(function() {
        toggleCardButton.style.removeProperty('animation');
      }, 500); // 0.5 detik
    });
  });
  
  