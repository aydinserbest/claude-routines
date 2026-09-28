# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-28 09:38 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz test: "should have a login button"** — 3 tarayicide da (Chromium, Firefox, WebKit) basarisiz.

### Hata Mesaji
```
locator('button#login') bulunamadi.
Beklenen: gorunur olmasi
Zaman asimi: 3000ms
Hata: element(s) not found
```

### Olasi Sebep
Test, ana sayfada `button#login` CSS selektoru ile bir login dugmesi ariyor. Hata **3 tarayicide de tutarli bicimde** ve **2'ser yeniden denemeye ragmen** tekrarlandigina gore, bu gecici bir ag sorunu degil. Buyuk ihtimalle:

- **Selector degismis**: Login dugmesinin HTML'i degistirilmis olabilir (ornegin `<a>` veya farkli bir `id`/`class` kullanilmis).
- Site hala yukleniyor (diger testler gecti, bu nedenle site down degil).

### Etkilenen Dosya
`tests/homepage.spec.js` satir 19
