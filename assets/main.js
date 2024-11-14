// Peringatan ketika halaman pertama dimuat
window.onload = function() {
    alert('Want to see other albums? click ">" at the end of the album name');
};

// Event listener untuk tombol >
document.querySelector('.next-page').addEventListener('click', function() {
    // Mengganti halaman dari page-1 ke page-2
    document.getElementById('page-1').classList.remove('active');
    document.getElementById('page-1').classList.add('hidden');
    document.getElementById('page-2').classList.remove('hidden');
    document.getElementById('page-2').classList.add('active');

    // Tambahkan event listener untuk tombol BUY THE ALBUM di halaman kedua
    document.querySelector('#page-2 .buy-button').addEventListener('click', function() {
        alert('Thank you for your purchase, we delivered it with ❤');
    });
});

// Event listener untuk tombol <
document.querySelector('.previous-page').addEventListener('click', function() {
    // Mengganti halaman dari page-2 ke page-1
    document.getElementById('page-2').classList.remove('active');
    document.getElementById('page-2').classList.add('hidden');
    document.getElementById('page-1').classList.remove('hidden');
    document.getElementById('page-1').classList.add('active');
});

// Event listener untuk tombol BUY THE ALBUM di halaman pertama
document.querySelector('#page-1 .buy-button').addEventListener('click', function() {
    alert('Thank you for your purchase, we delivered it with ❤');
});
