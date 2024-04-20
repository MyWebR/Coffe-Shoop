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
// ------------- js nontifikasi -------------------------
// Memeriksa apakah DOM telah dimuat sebelum menambahkan event listener
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Fungsi yang berisi kode untuk dijalankan setelah DOM dimuat
function ready() {
  var cardContainer = document.getElementById('card');
  var toggleCardLink = document.getElementById('toggle-card');
  var uangBayarInput = document.getElementById('uang-bayar');
  var hitungKembalianButton = document.getElementById('hitung-kembalian');
  var hasilBayarContainer = document.getElementById('hasil-bayar');
  var hasilBayarElement = document.getElementById('hasil');

// Fungsi untuk menampilkan notifikasi jumlah produk
function updateJumlahProduk() {
  // Menghitung jumlah produk yang sudah ada di dalam keranjang
  var jumlahProduk = cardContainer.querySelectorAll('.all-product').length;

  // Jika jumlah produk lebih dari 1 sampai dengan 60, kurangi jumlahnya -1
  if (jumlahProduk > 1) {
    jumlahProduk--;
}
if (jumlahProduk > 2) {
  jumlahProduk--;
}
if (jumlahProduk > 3) {
jumlahProduk--;
}
if (jumlahProduk > 4) {
jumlahProduk--;
}
if (jumlahProduk > 5) {
jumlahProduk--;
}
if (jumlahProduk > 6) {
jumlahProduk--;
}
if (jumlahProduk > 7) {
jumlahProduk--;
}
if (jumlahProduk > 8) {
jumlahProduk--;
}
if (jumlahProduk > 9) {
jumlahProduk--;
}
if (jumlahProduk > 10) {
jumlahProduk--;
}
if (jumlahProduk > 11) {
jumlahProduk--;
}
if (jumlahProduk > 12) {
jumlahProduk--;
}
if (jumlahProduk > 13) {
jumlahProduk--;
}
if (jumlahProduk > 14) {
jumlahProduk--;
}
if (jumlahProduk > 15) {
jumlahProduk--;
}
if (jumlahProduk > 16) {
jumlahProduk--;
}
if (jumlahProduk > 17) {
jumlahProduk--;
}
if (jumlahProduk > 18) {
jumlahProduk--;
}
if (jumlahProduk > 19) {
jumlahProduk--;
}
if (jumlahProduk > 20) {
jumlahProduk--;
}
if (jumlahProduk > 21) {
jumlahProduk--;
}
if (jumlahProduk > 22) {
jumlahProduk--;
}
if (jumlahProduk > 23) {
jumlahProduk--;
}
if (jumlahProduk > 24) {
jumlahProduk--;
}
if (jumlahProduk > 25) {
jumlahProduk--;
}
if (jumlahProduk > 26) {
jumlahProduk--;
}
if (jumlahProduk > 27) {
jumlahProduk--;
}
if (jumlahProduk > 28) {
jumlahProduk--;
}
if (jumlahProduk > 29) {
jumlahProduk--;
}
if (jumlahProduk > 30) {
jumlahProduk--;
}
if (jumlahProduk > 31) {
jumlahProduk--;
}
if (jumlahProduk > 32) {
jumlahProduk--;
}
if (jumlahProduk > 33) {
jumlahProduk--;
}
if (jumlahProduk > 34) {
jumlahProduk--;
}
if (jumlahProduk > 35) {
jumlahProduk--;
}
if (jumlahProduk > 36) {
jumlahProduk--;
}
if (jumlahProduk > 37) {
jumlahProduk--;
}
if (jumlahProduk > 38) {
jumlahProduk--;
}
if (jumlahProduk > 39) {
jumlahProduk--;
}
if (jumlahProduk > 40) {
jumlahProduk--;
}
if (jumlahProduk > 41) {
jumlahProduk--;
}
if (jumlahProduk > 42) {
jumlahProduk--;
}
if (jumlahProduk > 43) {
jumlahProduk--;
}
if (jumlahProduk > 44) {
jumlahProduk--;
}
if (jumlahProduk > 45) {
jumlahProduk--;
}
if (jumlahProduk > 46) {
jumlahProduk--;
}
if (jumlahProduk > 47) {
jumlahProduk--;
}
if (jumlahProduk > 48) {
jumlahProduk--;
}
if (jumlahProduk > 49) {
jumlahProduk--;
}
if (jumlahProduk > 50) {
jumlahProduk--;
}
if (jumlahProduk > 51) {
jumlahProduk--;
}
if (jumlahProduk > 52) {
jumlahProduk--;
}
if (jumlahProduk > 53) {
jumlahProduk--;
}
if (jumlahProduk > 54) {
jumlahProduk--;
}
if (jumlahProduk > 55) {
jumlahProduk--;
}
if (jumlahProduk > 56) {
jumlahProduk--;
}
if (jumlahProduk > 57) {
jumlahProduk--;
}
if (jumlahProduk > 58) {
jumlahProduk--;
}
if (jumlahProduk > 59) {
jumlahProduk--;
}


  // Membuat elemen notifikasi jumlah produk
  var notifikasiJumlahProduk = document.createElement('span');
  notifikasiJumlahProduk.textContent = jumlahProduk;
  notifikasiJumlahProduk.classList.add('jumlah-produk-notifikasi');

  // Memeriksa apakah notifikasi sudah ada sebelumnya
  var existingNotification = toggleCardLink.querySelector('.jumlah-produk-notifikasi');
  if (existingNotification) {
      // Jika sudah ada, cukup perbarui teksnya
      existingNotification.textContent = jumlahProduk;
  } else {
      // Jika belum ada, tambahkan notifikasi baru
      toggleCardLink.appendChild(notifikasiJumlahProduk);
  }
}




  // Tambahkan event listener pada setiap tombol "Add to Cart"
  var addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function(event) {
          event.preventDefault();

          var productId = button.getAttribute('data-product-id');
          var productElement = document.getElementById(productId);

          if (productElement) {
              // Clone elemen produk
              var clonedProduct = productElement.cloneNode(false);

              // Menghilangkan tombol tambah ke keranjang dari klon produk
              var addToCartButton = clonedProduct.querySelector('.add-to-cart');
              if (addToCartButton) {
                  addToCartButton.parentNode.removeChild(addToCartButton);
              }

              // Menambahkan klon produk ke dalam keranjang
              cardContainer.appendChild(clonedProduct);

              // Update notifikasi jumlah produk
              updateJumlahProduk();
          }
      });
  });

  // Event listener untuk menghitung kembalian
  hitungKembalianButton.addEventListener('click', function() {
      // ...
  });
}




// ------------- js tanpa nontifikasi-------------------
  // document.addEventListener("DOMContentLoaded", function () {
  //   var cardContainer = document.getElementById('card');
  //   var uangBayarInput = document.getElementById('uang-bayar');
  //   var hitungKembalianButton = document.getElementById('hitung-kembalian');
  //   var hasilBayarContainer = document.getElementById('hasil-bayar');
  //   var hasilBayarElement = document.getElementById('hasil');
  
  //   hitungKembalianButton.addEventListener('click', function() {
  //     // Memeriksa apakah input uang-bayar tidak kosong
  //     if (uangBayarInput.value.trim() === '') {
  //       alert('Mohon masukkan jumlah uang yang dibayar.');
  //       return ; // Keluar dari fungsi jika input kosong
  //     }
  
  //     // Mengambil total harga dari keranjang
  //     var totalHarga = 0;
  //     var hargaProduk = cardContainer.querySelectorAll('#rp');
  //     hargaProduk.forEach(function(harga) {
  //       var hargaString = harga.textContent.replace('Rp ', '').replace(',', '');
  //       totalHarga += parseInt(hargaString);
  //     });
  
  //     // Mengambil jumlah uang yang dibayar
  //     var uangBayar = parseFloat(uangBayarInput.value);
  
  //     // Menghitung kembalian atau menampilkan pesan khusus
  //     if (uangBayar < totalHarga) {
  //       var kurang = totalHarga - uangBayar;
  //       hasilBayarElement.textContent = 'Uang yang kurang: Rp ' + kurang.toLocaleString();
  //     } else if (uangBayar > totalHarga) {
  //       var kembalian = uangBayar - totalHarga;
  //       hasilBayarElement.textContent = 'Kembalian: Rp ' + kembalian.toLocaleString();
  //     } else {
  //       hasilBayarElement.textContent = 'Pembayaran sukses';
  //     }
  
  //     // Menampilkan hasil bayar container
  //     hasilBayarContainer.style.display = 'block';
  //   });
  // });
  


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
    var toggleCardIcon = document.getElementById('toggle-card-icon'); // Menambahkan referensi ke elemen gambar
    var cardDiv = document.getElementById('card');
    var semuaDiv = document.getElementById('semua');
  
    // Fungsi untuk menampilkan atau menyembunyikan elemen card
    function toggleCardVisibility(event) {
      event.preventDefault(); // Mencegah navigasi ke "#card"
      if (cardDiv.style.display === 'none') {
        cardDiv.style.display = 'block';
        semuaDiv.style.display = 'none'; // Menyembunyikan elemen dengan ID "semua"
        toggleCardIcon.src = 'icon/navbar/plus-button.webm'; // Mengubah ikon menjadi "close.png"
      } else {
        cardDiv.style.display = 'none';
        semuaDiv.style.display = 'block'; // Menampilkan elemen dengan ID "semua"
        toggleCardIcon.src = 'icon/navbar/cart.webm'; // Mengembalikan ikon ke aslinya
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

  // efek getar saat klik keranjang
  document.addEventListener("DOMContentLoaded", function() {
    var toggleCardButton = document.getElementById('toggle-card');
    
    toggleCardButton.addEventListener('click', function() {
      // Periksa apakah perangkat mendukung fitur getar
      if ("vibrate" in navigator) {
        // Getar perangkat selama 200ms
        navigator.vibrate(500);
      } else {
        // Tampilkan pesan jika perangkat tidak mendukung getar
        console.log("Perangkat Anda tidak mendukung fitur getar.");
      }
    });
  });
  
  // getar di add to card
  document.addEventListener("DOMContentLoaded", function() {
    var toggleCardButton = document.getElementById('add-to-card');
    
    toggleCardButton.addEventListener('click', function() {
      // Periksa apakah perangkat mendukung fitur getar
      if ("vibrate" in navigator) {
        // Getar perangkat selama 200ms
        navigator.vibrate(500);
      } else {
        // Tampilkan pesan jika perangkat tidak mendukung getar
        console.log("Perangkat Anda tidak mendukung fitur getar.");
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    var addToCartButton = document.querySelector('.add-to-cart');
    var originalIcon = addToCartButton.querySelector('img').src;
    var shoppingIcon = 'animasi/shopping.gif'; // Ganti dengan lokasi gambar ikon belanja

    addToCartButton.addEventListener('click', function(event) {
        event.preventDefault();
        addToCartButton.querySelector('img').src = shoppingIcon;

        // Setelah 2 detik, kembalikan gambar ke aslinya
        setTimeout(function() {
            addToCartButton.querySelector('img').src = originalIcon;
        }, 2000);
    });
});

  

  // pop uo video help
  document.addEventListener("DOMContentLoaded", function() {
    var helpLink = document.getElementById('help-link');
    var popupOverlay = document.getElementById('popup-overlay');
    var closeButton = document.getElementById('close-btn');
  
    helpLink.addEventListener('click', function(event) {
      event.preventDefault();
      popupOverlay.style.display = 'block';
    });
  
    closeButton.addEventListener('click', function() {
      popupOverlay.style.display = 'none';
    });
  });
  
  // animasi selesai
  document.addEventListener("DOMContentLoaded", function() {
    var selesaiButton = document.getElementById('selesaiButton');
    var loadingImage = document.getElementById('loadingImage');
  
    selesaiButton.addEventListener('click', function(event) {
      event.preventDefault();
      loadingImage.style.display = 'flex';
  
      setTimeout(function() {
        window.location.href = 'index.html'; // Mengalihkan ke halaman index.html setelah 2 detik
      }, 4000);
    });
  });
  