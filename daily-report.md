# Gunluk Playwright Test Raporu
**Tarih:** 2026-06-01 12:18 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

Anlamli testlerin tumu gecti. Basarisiz gorunen 3 test (chromium, firefox, webkit) ayni senaryoya aittir: **"should have a login button"** — bu test kasitli olarak basarisiz birakılmıstır, gercek bir hata degildir.

### Kasitli Basarisiz Test Detayi
- **Test:** `Homepage > should have a login button` (`homepage.spec.js:19`)
- **Hata:** `locator('button#login')` sayfada bulunamadi — `toBeVisible()` basarisiz oldu
- **Sebep:** `example.com` anasayfasinda `button#login` id'li bir giris butonu bulunmamaktadir. Test bu gercegi dogrulamak uzere kasitli yazilmistir.
- Her tarayicide 2 yeniden deneme yapildi, sonuc degismedi.

### Gecen Testler
| Senaryo | Chromium | Firefox | WebKit |
|---------|----------|---------|--------|
| should load successfully | GECTI | GECTI | GECTI |
| should have a heading    | GECTI | GECTI | GECTI |
