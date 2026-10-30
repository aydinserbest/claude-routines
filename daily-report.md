# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-30 09:19 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

2 test senaryosu 3 tarayicinin hepsinde basarisiz oldu:

### 1. `should have a heading` (chromium, firefox, webkit)
- **Hata:** `locator('h1')` elementi bulunamadi (5 saniye beklendi)
- **Olasi sebep:** Test kasitli olarak basarisiz yazilmis (kod yorumu: "Bu test kasitli olarak basarisiz — rutinin yakalaması icin"). example.com sayfasinda `h1` elementi mevcut, ancak bu test selector dogrulamasini atlamak icin kasitli bozulmus.

### 2. `should have a login button` (chromium, firefox, webkit)
- **Hata:** `locator('button#login')` elementi bulunamadi (3 saniye beklendi)
- **Olasi sebep:** example.com sayfasinda `button#login` elementi bulunmuyor. Selector yanlis ya da test kasitli basarisiz birakilmis.

Her iki test de yeniden deneme (retry) mekanizmasini 2 kez kullandi ve yine de basarisiz oldu — gecici bir ag sorunu degil, kalici bir sorun.
