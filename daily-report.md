# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-18 09:26 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**1 senaryo, 3 tarayicide de basarisiz oldu.**

### Basarisiz Test: `should have a login button` (homepage.spec.js:16)

**Hata:** `locator('button#login')` elementi sayfada bulunamadi.

```
Error: expect(locator).toBeVisible() failed
Locator: locator('button#login')
Expected: visible
Timeout: 3000ms
Error: element(s) not found
```

Test, her tarayicide 2 yeniden denemeyle birlikte toplam 3 kez denendi ve hepsinde basarisiz oldu. Bu durum gecici bir ag sorunu olmadigini gosteriyor.

### Olasi Sebep

**Selector degismis olabilir.** Test, `button#login` id'li bir butonu ariyor. `example.com` IANA'nin tanitim sayfasidir ve gercekte bir giris butonu icermez — test ya yanlis bir siteye yaziyor, ya da sitenin HTML yapisi degismis ve `#login` id'li buton artik mevcut degil ya da farkli bir selector kullaniyor.

**Onerilen eylem:** `tests/homepage.spec.js:18` satirindaki selector'u guncelle ya da testin dogru URL'yi test ettigini dogrula.
