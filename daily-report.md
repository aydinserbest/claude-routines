# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-06 09:10 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayıcı: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Basarisiz Testler

### 1. "should have a heading" — Tum Tarayicilar
- **Hata:** `h1` elementi sayfada bulunamadi (5 saniye beklendi)
- **Dosya:** `tests/homepage.spec.js` satir 12
- **Olasi Sebep:** Sayfada `<h1>` etiketi yok ya da selector eski yapiya gore yazilmis. Test yorumuna gore kasitli olarak basarisiz birakilan bir test (`// Bu test kasıtlı olarak başarısız — rutinin yakalaması için`).

### 2. "should have a login button" — Tum Tarayicilar
- **Hata:** `button#login` elementi sayfada bulunamadi (3 saniye beklendi)
- **Dosya:** `tests/homepage.spec.js` satir 19
- **Olasi Sebep:** `button#login` ID'li bir giris butonu sayfada bulunmuyor. Site yapisi degismis ya da bu element hic olmamis olabilir.

## Sonuc
Toplam 2 benzersiz test senaryosu 3 tarayicida da basarisiz oldu (6 basarisiz sonuc). Sayfa yukleme testi (`should load successfully`) tum tarayicilarda gecti — site erisimi sorunsuz. Sorun selector'larda: `h1` ve `button#login` elementleri sayfada mevcut degil. Test yorumu kasitli basarisizlik oldugunu belirtiyor.
