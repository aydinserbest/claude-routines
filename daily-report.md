# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-27 09:10 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

**2 farkli test 3 tarayicida da basarisiz oldu:**

### 1. "should have a heading" — Chromium, Firefox, Webkit
- **Hata:** `locator('h1')` elementi sayfada bulunamadi (timeout: 5000ms)
- **Dosya:** `tests/homepage.spec.js` satir 12
- **Retry:** 3 deneme sonrasi basarisiz

### 2. "should have a login button" — Chromium, Firefox, Webkit
- **Hata:** `locator('button#login')` elementi sayfada bulunamadi (timeout: 3000ms)
- **Dosya:** `tests/homepage.spec.js` satir 19
- **Retry:** 3 deneme sonrasi basarisiz

## Olasi Sebep

Site yükleniyor ("should load successfully" tüm tarayicilarda gecti), bu nedenle site down degil.

Büyük ihtimalle **selector degismis** durumu: `h1` etiketi veya `button#login` elementi sayfada mevcut degil ya da farkli bir HTML yapisi/ID ile render ediliyor. Test dosyasindaki yorum ("Bu test kasitli olarak basarisiz — rutinin yakalaması için") bu hatalarin bilinçli olarak eklenmis oldugunu gosteriyor, ancak yine de izlenmeleri onemli.
