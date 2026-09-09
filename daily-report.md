# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-09 09:10 UTC

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici)
- Gecen: 6
- Basarisiz: 3

## Basarisiz Testler

### "should have a login button" — Chromium, Firefox, Webkit

**Hata:** `locator('button#login')` elementi sayfada bulunamadi.

Test, ana sayfada `button#login` selectoruyle bir giris butonu aramaktadir. Bu element 3 tarayicida da 3 deneme (retry) sonrasinda hic gorulmedi.

**Olasi Sebep:** Sitenin HTML yapisi degismis olmali — giris butonu ya kaldirilmis, ya ID'si degistirilmis (`#login` yerine baska bir ID/class), ya da farkli bir etiketle (`<a>`, `<input>` gibi) gosteriliyor. Site down olsaydi "sayfa yuklendi" ve "baslik var" testleri de basarisiz olurdu; ama onlar gecti. Bu nedenle **selector degisikligi** en olasiliklı sebeptir.

**Onerilecek Eylem:** `tests/homepage.spec.js` satir 18'deki `button#login` selectorunu sitenin guncel HTML yapisiyla eslestirin.
