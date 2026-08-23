# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-23 09:10 UTC

## Ozet
- Toplam test: 9 (3 tarayici x 3 test)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz test:** `Homepage > should have a login button` — Chromium, Firefox ve WebKit tarayicilarinin tamaminda basarisiz oldu (her birinde 2 yeniden deneme de dahil).

**Hata:** `locator('button#login')` — Sayfada `button#login` secicisiyle eslesen bir eleman bulunamadi. Test, ana sayfada gorунур bir giris butonunun varligini bekliyor; ancak bu eleman sayfada mevcut degil.

**Olasi sebep:** Selector degismis olmasi en muhtemel neden. `example.com` anasayfasinda hicbir zaman `button#login` kimlikli bir buton bulunmamaktadir. Testin yanlis bir selector kullandigini ya da baska bir URL hedeflemesi gerektigini dusunmek yerinde olacaktir. Site erisiminde bir sorun oldugu ihtimali dusuk; zira "should load successfully" ve "should have a heading" testleri tum tarayicilarda basariyla gecmektedir.

**Onerim:** `homepage.spec.js` satir 18'deki `'button#login'` selectorunu guncellemeyi veya testi doğru sayfaya yonlendirmeyi dusunun.

---
_CI calistirmasi: [GitHub Actions #32565420217](https://github.com/aydinserbest/claude-routines/actions/runs/32565420217)_
