# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-08 09:10 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

2 test, 3 tarayicinin hepsinde basarisiz oldu (her birinde 2 yeniden deneme dahil 3 tur calistirildi):

### 1. `should have a heading` — `h1` elementi bulunamadi
- **Hata:** `locator('h1')` için 5000ms beklendi, element sayfada yok
- **Olasi sebep:** `example.com` anasayfasinda `<h1>` etiketi bulunmuyor; selector yanlis ya da test kasitli olarak basarisiz birakılmis (kod yorumunda "Bu test kasitli olarak basarisiz — rutinin yakalaması için" yazıyor)

### 2. `should have a login button` — `button#login` elementi bulunamadi
- **Hata:** `locator('button#login')` için 3000ms beklendi, element sayfada yok
- **Olasi sebep:** `example.com` sitesinde login butonu bulunmuyor; bu test de muhtemelen kasitli olarak basarisiz birakılmis ya da selector eski bir tasarima ait

Her iki test de tum tarayicilarda (Chromium, Firefox, WebKit) tutarli sekilde basarisiz oldu. Site `should load successfully` testini gecti, yani site erisim sorunu yok; sadece bu iki selector sayfa yapisina uymuyor.
