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
  
   