# Gunluk Playwright Test Raporu
**Tarih:** 2026-06-28 (Test kosma zamani: 2026-06-27 09:53 UTC)
**Build:** https://github.com/aydinserbest/claude-routines/actions/runs/28285737121

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici: Chromium, Firefox, WebKit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**1 test senaryosu 3 tarayicida da basarisiz oldu. Bu hata 2026-06-14'ten beri her gun tekrar etmektedir (22+ acik issue).**

### Basarisiz Test: `Homepage > should have a login button`

- **Tarayicilar:** Chromium, Firefox, WebKit
- **Hata:** `locator('button#login')` ile aranan element sayfada bulunamadi.
- **Beklenen:** Login butonunun gorunur olmasi (`toBeVisible`)
- **Gerceklesen:** Element yok (`element(s) not found`), her tarayicida 3000ms zaman asimi.
- **Deneme sayisi:** Her tarayicida 3 kez yeniden denendi (2 retry), sonuc degismedi.
- **Kod satiri:** `tests/homepage.spec.js:19`

### Olasi Sebep Tahmini

**Selector yanlis (kesin ihtimal).** Diger iki test (`should load successfully`, `should have a heading`) tum tarayicilarda basariyla gectigi icin site erisilebilir — ag sorunu veya site down degil. `example.com` minimal bir taslak sayfasidir ve `button#login` elementi icermez. Hata 2026-06-14'ten bu yana her gun tekrar ediyor; kalici bir sorun.

### Onerilen Aksiyon

`tests/homepage.spec.js` dosyasindaki 18-19. satirlardaki `button#login` selectorunu guncelle ya da `example.com` uzerinde var olan bir eleman ile degistir. Acik issue'lar (#14-#23) kapatilmali.

### Gecen Testler
| Senaryo | Tarayici | Durum |
|---------|----------|-------|
| should load successfully | Chromium | GECTI |
| should load successfully | Firefox  | GECTI |
| should load successfully | WebKit   | GECTI |
| should have a heading    | Chromium | GECTI |
| should have a heading    | Firefox  | GECTI |
| should have a heading    | WebKit   | GECTI |

**Not:** Tekrarlayan hata icin acik issue: #23 (toplam 22+ acik issue)
