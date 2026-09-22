# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-22 09:24 UTC

## Ozet
- Toplam test: 9 (3 test senaryosu × 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz test:** `should have a login button` — tum tarayicilarda (chromium, firefox, webkit) basarisiz.

**Hata:** `locator('button#login')` elementi sayfada bulunamadi.

```
expect(locator).toBeVisible() failed
Locator: locator('button#login')
Expected: visible
Timeout: 3000ms
Error: element(s) not found
```

**Olasi sebep:** Selector degisimi. Test `button#login` id'li bir buton ariyor, ancak example.com anasayfasinda bu element yok. Site down degil (diger testler basariyla gecti — sayfa yuklenip baslik bulundu). Buyuk ihtimalle ya test yanlis bir sayfayi hedefliyor ya da example.com uzerinde hic login butonu bulunmuyor ve test hatali yazilmis. Selector'un guncellenmesi veya testin gozden gecirilmesi gerekiyor.

**Etkilenen dosya:** `tests/homepage.spec.js` satir 19
