# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-28 09:36 UTC

## Ozet
- Toplam test: 9 (3 tarayici × 3 test)
- Gecen: 3
- Basarisiz: 6

## Sonuc

2 test 3 tarayicide da (chromium, firefox, webkit) basarisiz oldu.

### Basarisiz Testler

**1. should have a heading** (homepage.spec.js:12)
- Hata: `locator('h1')` — sayfa yukleniyor fakat `h1` elementi 5000ms icinde bulunamadi
- Tarayicilar: chromium, firefox, webkit (3/3)

**2. should have a login button** (homepage.spec.js:19)
- Hata: `locator('button#login')` — `button#login` elementi 3000ms icinde bulunamadi
- Tarayicilar: chromium, firefox, webkit (3/3)

### Olasi Sebep

Test dosyasinda `// Bu test kasıtlı olarak başarısız — rutinin yakalaması için` yorumu mevcut; bu testler rutinin calismasini dogrulamak icin kasitli olarak basarisiz birakilan orneklerdir. Gercek bir ortamda bu hata asagidaki sebeplerden kaynaklanabilir:
- Sayfanin HTML yapisinda `h1` etiketi kaldirilmis veya degistirilmis olabilir (ornegin `h2` ya da `<div class="title">` yapilmis)
- Login butonu `button#login` yerine farkli bir selector ile implement edilmis olabilir
- Sayfa icerigi henuz yuklenmeden selector sorgulanmis olabilir (render gecikmesi)
