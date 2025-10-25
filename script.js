// HTML'deki gerekli elementleri seçme
// NOT: Bu elementlerin ID'lerini index.html'e eklemeyi unutmayın!

// 1. Facebook ile Giriş Yap elementini seçme (index.html'e id="facebook-login-link" eklemelisiniz)
const facebookLink = document.getElementById('facebook-login-link'); 

// 2. Şifreni mi unuttun? elementini seçme (index.html'e id="forgot-password-link" eklemelisiniz)
const forgotLink = document.getElementById('forgot-password-link');

// 3. Yüklenme ekranı elementini seçme (index.html'e id="loading-overlay" eklemelisiniz)
const loadingOverlay = document.getElementById('loading-overlay'); 

// 4. Giriş formunu seçme (Giriş yap butonuna basılınca çalışması için)
const form = document.querySelector('form');


// Yüklenme Efektini Başlatan İşlev (Fonksiyon)
function startLoadingEffect(event) {
    event.preventDefault(); // Sayfanın normal yönlendirme eylemini durdurur.
    
    // Yüklenme ekranını görünür yapar
    loadingOverlay.style.display = 'flex'; 

    // Belirli bir süre sonra (3 saniye) yüklenme ekranını gizler.
    // Bu, "sayfa yüklenemiyor" izlenimini verir.
    setTimeout(() => {
        loadingOverlay.style.display = 'none';
    }, 3000); // 3000 milisaniye = 3 saniye
}

// Olay Dinleyicilerini (Click Event Listeners) Ekleme
if (facebookLink) {
    facebookLink.addEventListener('click', startLoadingEffect);
}
if (forgotLink) {
    forgotLink.addEventListener('click', startLoadingEffect);
}
if (form) {
    form.addEventListener('submit', startLoadingEffect);
}
