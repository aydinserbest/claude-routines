# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-03 09:10 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayıcı: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

Iki test senaryosu tum tarayıcılarda basarisiz oldu:

### 1. `should have a heading` (Chromium + Firefox + WebKit)
**Hata:** `locator('h1')` elementi sayfada bulunamadı (5000ms zaman asimi).  
**Olası sebep:** Sayfanın ana başlığı `<h1>` etiketi yerine farklı bir HTML etiketi ile yazılmış olabilir ya da sayfa yapısı değişmiş olabilir. Test dosyasındaki yorum ("kasıtlı olarak başarısız") bu testin demo amaçlı yazıldığına işaret ediyor.

### 2. `should have a login button` (Chromium + Firefox + WebKit)
**Hata:** `locator('button#login')` elementi sayfada bulunamadı (3000ms zaman asimi).  
**Olası sebep:** Login butonu sayfada `button#login` seçicisiyle eşleşen bir element içermiyor. Selector değişmiş olabilir (örneğin `id="login"` yerine `class="login"` kullanılıyor) ya da login butonu kaldırılmış olabilir.

### Gecen Testler
- `should load successfully` — Chromium, Firefox, WebKit tarayıcılarında basariyla tamamlandi.

---
*Not: Test sonuclari 2026-10-02 15:45 UTC tarihli GitHub Actions calistirmasından (run #37029051674) alinmistir.*
