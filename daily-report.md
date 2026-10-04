# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-04 09:10 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

**2 test tum tarayicilarda basarisiz oldu:**

### 1. `should have a heading` (homepage.spec.js:9)
- **Hata:** `locator('h1')` elementi sayfada bulunamadi — `toBeVisible()` beklentisi karsilanilamadi
- **Etkilenen tarayicilar:** chromium, firefox, webkit
- **Olasi sebep:** `example.com` anasayfasinda `<h1>` elementi yok veya farkli bir selector kullaniliyor. Selector degismis olabilir. (Not: Test dosyasindaki yoruma gore bu test kasitli olarak basarisiz birakilmis — `// Bu test kasıtlı olarak başarısız — rutinin yakalaması için`)

### 2. `should have a login button` (homepage.spec.js:16)
- **Hata:** `locator('button#login')` elementi bulunamadi — `toBeVisible()` beklentisi karsilanilamadi
- **Etkilenen tarayicilar:** chromium, firefox, webkit
- **Olasi sebep:** `example.com` sitesinde `button#login` id'li bir buton mevcut degil. Sitenin arayuzu degismis ya da bu selector yanlis tanimlanmis olabilir.

### Gecen Testler
- `should load successfully` — chromium, firefox, webkit (tum tarayicilarda basarili)
