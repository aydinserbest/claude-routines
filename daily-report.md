# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-02 09:10 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz test: "should have a login button"** — 3 tarayicide da (chromium, firefox, webkit) basarisiz.

### Hata Detayi

Test, ana sayfada `button#login` secicisiyle bir "Login" dugmesi aramaktadir. Ancak element sayfada bulunamadi:

```
Locator: locator('button#login')
Expected: visible
Timeout: 3000ms
Error: element(s) not found
```

Her tarayicide 2 yeniden deneme yapildi (toplam 3 deneme), hepsi basarisiz.

### Olasi Sebep

**Selector degismis olabilir.** `example.com` sitesinde login dugmesi yoktur veya `button#login` ID'siyle etiketlenmemistir. Test muhtemelen yanlis bir hedef URL veya yanlis bir selector ile yazilmistir. Site down degil (diger 2 test — sayfa yukleme ve baslik kontrolu — tum tarayicilarda basariyla gecti).

### Onerilen Cozum

`tests/homepage.spec.js` dosyasinin 18. satirindaki selector guncellenmeli ya da test, `example.com`'da var olmayan bir ozellik icin yazilmissa kaldirilmalidir.
