# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-29 09:29 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

2 test 3 tarayicida da basarisiz oldu:

### 1. `should have a heading` (homepage.spec.js:9)
- **Hata:** `h1` elementi sayfada bulunamadi (5000ms beklendi).
- **Olasi sebep:** Test dosyasinda "kasitli olarak basarisiz" notu var — example.com anasayfasinda `<h1>` etiketi bulunmuyor. Bu test rutinin calismasi icin kasitli olarak eklenmiş.

### 2. `should have a login button` (homepage.spec.js:16)
- **Hata:** `button#login` elementi sayfada bulunamadi (3000ms beklendi).
- **Olasi sebep:** example.com anasayfasinda `button#login` secicisiyle eslesen bir element yok. Selector yanlis ya da sayfa yapisi degismis olabilir.

Her iki test de 3 tarayicida (chromium, firefox, webkit) 2'ser yeniden denemeyle toplam 3'er kez calistirildi ve her seferinde basarisiz oldu. "should load successfully" testi 3 tarayicida da gecti.
