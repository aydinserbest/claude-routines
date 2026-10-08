# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-08 09:10 UTC

## Ozet
- Toplam test: 9 (3 tarayici x 3 test)
- Gecen: 3
- Basarisiz: 6

## Sonuc

2 test, tum tarayicilarda (Chromium, Firefox, WebKit) basarisiz oldu:

### 1. "should have a heading" — `h1` elementi bulunamadi
- **Hata:** `locator('h1').toBeVisible()` beklentisi karsilanmadi; 5 saniye beklemesine ragmen `h1` sayfada gorunmedi.
- **Olasi sebep:** `example.com` anasayfasinda `<h1>` etiketi bulunmuyor veya test `baseURL` olarak farkli bir sayfa kullaniyor. Test dosyasindaki yorum "kasitli olarak basarisiz" olarak isaretlenmis, dolayisiyla bu bilinen bir durum olabilir.

### 2. "should have a login button" — `button#login` elementi bulunamadi
- **Hata:** `locator('button#login').toBeVisible()` beklentisi karsilanmadi; `button#login` secicisine uyan bir element sayfada yok.
- **Olasi sebep:** `example.com` uzerinde boyle bir buton hic olmadi. Selector degismis ya da test yanlis bir URL hedefliyor olabilir. Test dosyasindaki yorum bu testin de kasitli olarak basarisiz birakildigini gosteriyor.

### Gecen Testler
- `should load successfully` — Chromium, Firefox, WebKit uzerinde basarili (sayfa aciliyor).

### CI Bilgisi
- GitHub Actions calistirmasi: https://github.com/aydinserbest/claude-routines/actions/runs/37651551467
- Commit: `5fdeda0` — report: 2026-10-07
