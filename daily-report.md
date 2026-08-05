# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-05 09:10 UTC

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**1 test senaryosu tum tarayicilarda basarisiz oldu: "should have a login button"**

### Hata Aciklamasi

Test, `button#login` selector'iyle bir "Login" butonu aramis ancak bulamadi.

```
Locator: locator('button#login')
Expected: visible
Error: element(s) not found
```

Her tarayicida 3 deneme yapilmis (ilk deneme + 2 retry), hicbirinde buton bulunamamistir.

- **Tarayicilar:** Chromium, Firefox, WebKit
- **Kod satiri:** `tests/homepage.spec.js:19`
- **Build:** https://github.com/aydinserbest/claude-routines/actions/runs/30899058138

### Olasi Sebep Tahmini

**Selector yanlis — site veya ag sorunu degil.** Diger iki test (`should load successfully`, `should have a heading`) tum tarayicilarda basariyla gectigi icin site erisilebilir durumda. `button#login` ID'li element example.com anasayfasinda bulunmuyor; ya hic eklenmemis ya da ID degismis. Bu hata **birden fazla gundur** devam ediyor — acilen selector guncellenmeli.

**Onerilen Aksiyon:** `tests/homepage.spec.js` satir 18-19'daki `button#login` selectorunu guncelle veya testi `test.skip` ile isaretle.

### Gecen Testler
| Senaryo | Tarayici | Durum |
|---------|----------|-------|
| should load successfully | Chromium | GECTI |
| should load successfully | Firefox  | GECTI |
| should load successfully | WebKit   | GECTI |
| should have a heading    | Chromium | GECTI |
| should have a heading    | Firefox  | GECTI |
| should have a heading    | WebKit   | GECTI |

---
_Rapor otomatik olarak Claude rutini tarafindan olusturulmustur._
