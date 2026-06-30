# Gunluk Playwright Test Raporu
**Tarih:** 2026-06-30 (Test Calisma Zamani: 2026-06-29 10:48 UTC)

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici: Chromium, Firefox, WebKit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**1 test senaryosu 3 tarayicida da basarisiz oldu. Bu hata 2026-06-02'den beri kesintisiz her gun tekrar etmektedir (29 gun).**

### Basarisiz Test: `Homepage > should have a login button`

- **Tarayicilar:** Chromium, Firefox, WebKit
- **Hata:** `locator('button#login')` ile aranan element sayfada bulunamadi.
- **Beklenen:** Login butonunun gorunur olmasi (`toBeVisible`)
- **Gerceklesen:** Element yok (`element(s) not found`), her tarayicida 3000ms zaman asimi.
- **Kod satiri:** `tests/homepage.spec.js:19`

### Olasi Sebep Tahmini

**Selector yanlis (kesin ihtimal) — site veya ag sorunu degil.** Diger iki test (`should load successfully`, `should have a heading`) tum tarayicilarda basariyla gectigi icin site erisilebilir durumda. Ayrica test dosyasindaki yorum satiri bu testin **kasitli olarak basarisiz birakildigini** belirtiyor ("Bu test kasıtlı olarak başarısız — rutinin yakalaması için"). Yani bu, rutinin calistigini dogrulamak icin eklenmis bilinen/beklenen bir hata.

### GitHub Issue

Yeni issue ACILMADI — ayni hata icin halihazirda **23 acik duplicate issue** mevcut (#2'den #24'e kadar, 2026-06-02 - 2026-06-29 arasi), en sonuncusu (#24) dun acilmis ve hala cozulmemis. Tekrar issue acmak yerine mevcut issue'lara (ozellikle #24) atif yapiliyor.

**Onerilen Aksiyon:** Bu kasitli test gercek bir bug degilse, gelecekteki gurultuyu onlemek icin testi `test.skip` ile isaretlemek ya da rutin talimatlarini (CLAUDE.md / bu rutin) guncelleyerek bu bilinen hatayi her gun yeni issue acmadan raporlamak faydali olabilir. Issue #2-#24 arasindaki 23 duplicate'in kapatilmasi/birlestirilmesi de degerlendirilebilir.

### Gecen Testler
| Senaryo | Tarayici | Durum |
|---------|----------|-------|
| should load successfully | Chromium | GECTI |
| should load successfully | Firefox  | GECTI |
| should load successfully | WebKit   | GECTI |
| should have a heading    | Chromium | GECTI |
| should have a heading    | Firefox  | GECTI |
| should have a heading    | WebKit   | GECTI |
