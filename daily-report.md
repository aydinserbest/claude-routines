# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-23 09:39 UTC

## Ozet
- Toplam test: 9 (3 tarayici x 3 test)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test:** `should have a login button` (Chromium, Firefox, WebKit - 3 tarayicide de basarisiz)

### Hata Ozeti
Test, ana sayfada `button#login` ID'li bir giris butonu aranmasini bekliyor, ancak bu element sayfada bulunamadi. Hata 3 retry sonrasinda da devam etti.

```
Locator: locator('button#login')
Expected: visible
Error: element(s) not found
```

### Olasi Sebep
**Selector degismis olmasi en muhtemel neden.** Test `button#login` selectorunu arıyor, ancak example.com anasayfasinda boyle bir buton bulunmuyor. Bu muhtemelen:
- Test yanlis bir site veya sayfa icin yazilmis (example.com'da login butonu yoktur)
- Ya da sitenin HTML yapisi degismis ve login elementinin ID veya tag'i farklilasmis olabilir

### Gecen Testler
- `should load successfully` - Chromium, Firefox, WebKit (3/3)
- `should have a heading` - Chromium, Firefox, WebKit (3/3)
