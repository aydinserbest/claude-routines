# Gunluk Playwright Test Raporu
**Tarih:** 2026-07-25 UTC (Test çalışma zamanı: 2026-07-24 09:59 UTC)

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**1 test senaryosu 3 tarayicida da basarisiz oldu.**

### Basarisiz Test: `Homepage > should have a login button`

- **Tarayicilar:** Chromium, Firefox, WebKit
- **Hata:** `locator('button#login')` ile aranan element sayfada bulunamiyor.
- **Beklenen:** Login butonunun gorunur olmasi (`toBeVisible`)
- **Gerceklesen:** Element yok (`element(s) not found`), her tarayicida 3000ms zaman asimi.
- **Kod satiri:** `tests/homepage.spec.js:19`
- **Yeniden deneme:** Her tarayicida 2 kez retry yapildi (toplam 9 deneme), hicbiri gecmedi.
- **Build:** https://github.com/aydinserbest/claude-routines/actions/runs/30084509941

### Olasi Sebep Tahmini

**Selector yanlis — site veya ag sorunu degil.** Diger iki test (`should load successfully`, `should have a heading`) tum tarayicilarda basariyla gectigi icin site erisilebilir durumda. `button#login` ID'li element sayfada bulunmuyor; ya hic eklenmemis ya da ID degismis.

**KRITIK: Bu hata 37+ gundur tekrarlanmaktadir (37 acik issue). Selector bir an once duzeltilmeli.**

**Onerilen Aksiyon:** `tests/homepage.spec.js` satir 18-19'daki `button#login` selectorunu guncelle veya testi `test.skip` ile isaretle.

**Ilgili Issue:** #38 (2026-07-24 tarihli, acik)

### Gecen Testler
| Senaryo | Tarayici | Durum |
|---------|----------|-------|
| should load successfully | Chromium | GECTI |
| should load successfully | Firefox  | GECTI |
| should load successfully | WebKit   | GECTI |
| should have a heading    | Chromium | GECTI |
| should have a heading    | Firefox  | GECTI |
| should have a heading    | WebKit   | GECTI |
