# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-13 09:10 UTC

## Ozet
- Toplam test: 9 (3 test senaryosu x 3 tarayici)
- Gecen: 3
- Basarisiz: 6

## Sonuc

2 test senaryosu 3 tarayicida da (chromium, firefox, webkit) basarisiz oldu:

### 1. should have a heading
- **Hata:** `locator('h1')` elementi sayfada bulunamadi (5000ms zaman asimi)
- **Basarisiz tarayicilar:** Chromium, Firefox, WebKit
- **Olasi sebep:** Sayfa `h1` HTML etiketi icermeyebilir; farkli bir baslik yapisi (ornegin `h2` veya ozel bir component) kullaniliyor olabilir. *Not: Test dosyasinda bu testin kasitli olarak basarisiz birakildigi belirtilmistir.*

### 2. should have a login button
- **Hata:** `locator('button#login')` elementi sayfada bulunamadi (3000ms zaman asimi)
- **Basarisiz tarayicilar:** Chromium, Firefox, WebKit
- **Olasi sebep:** Giris butonu `button#login` selector'i ile eslesmeyebilir; farkli bir ID veya element tipi (orn. `<a id="login">`) kullaniliyor olabilir. *Not: Test dosyasinda bu testin kasitli olarak basarisiz birakildigi belirtilmistir.*

### Gecen testler
- `should load successfully` — Chromium, Firefox, WebKit (hepsi basarili)
