# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-19 09:22 UTC

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz test:** `should have a login button` — Chromium, Firefox ve WebKit tarayicilarinin hepsinde basarisiz oldu.

**Hata mesaji:** `locator('button#login')` elementi bulunamadi. Test, anasayfada `<button id="login">` etiketinin gorunur olmasi beklentisiyle calisti; ancak bu element sayfada mevcut degil.

**Olasi sebep:** example.com statik bir tanitim sayfasidir ve icinde login butonu bulunmaz. Test `button#login` gibi olmayan bir selector'u arıyor. Buyuk ihtimalle:
- Test yanlis bir selector kullanıyor (ornegin buton baska bir id/class ile tanimlanmis olabilir), veya
- Test example.com icin degil baska bir site icin yazilmis ve hedef URL guncellenmemis.

**Onerim:** `tests/homepage.spec.js` dosyasindaki selector'u inceleyin. example.com'da login butonu olmadigından bu test kalici olarak basarisiz kalacaktir.
