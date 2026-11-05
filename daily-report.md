# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-05 09:10 UTC

## Ozet
- Toplam test: 9 (3 test senaryosu × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

### Basarisiz Testler

#### 1. `should have a heading` (Chromium, Firefox, Webkit)
- **Hata:** `h1` elementi sayfada bulunamadi (5 saniye beklendi)
- **Olasi Sebep:** Selector degismis olabilir — example.com sayfasinda `h1` etiketi yok ya da baska bir HTML yapisina gecilmis. Test kodu `locator('h1')` arıyor ancak sayfa bu elementi icermiyor.
- **Dosya:** `tests/homepage.spec.js:12`

#### 2. `should have a login button` (Chromium, Firefox, Webkit)
- **Hata:** `button#login` elementi sayfada bulunamadi (3 saniye beklendi)
- **Olasi Sebep:** Login butonu `button#login` selector'i ile eslesmıyor — ya silinmis, ya farkli bir ID verilmis (ornegin `btn-login`), ya da hicbir zaman olmayan bir selector. Muhtemelen selector degisikligi.
- **Dosya:** `tests/homepage.spec.js:19`

### Gecen Testler
- `should load successfully` — Chromium, Firefox, Webkit (sayfa basariyla yukleniyor)

### Genel Degerlendirme
Sayfa erisilebilir durumda (yuklenme testi geciyor). Sorun site down degil; selector uyumsuzlugu. `h1` ve `button#login` elementleri ya hic yok ya da farkli HTML yapisindan geliyor. Testin notunda "kasitli olarak basarisiz" yazdigina gore bu davranis bekleniyor olabilir, ancak gercek ortamda bu iki selector guncellenmeli.
