# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-09 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**1 test 3 farkli tarayicida (Chromium, Firefox, WebKit) basarisiz oldu.**

### Basarisiz Test: `should have a login button`

**Hata:** `locator('button#login')` selektoru sayfada bulunamadi.

```
Error: expect(locator).toBeVisible() failed
Locator: locator('button#login')
Expected: visible
Timeout: 3000ms
Error: element(s) not found
```

Her tarayicida 2 yeniden deneme yapildi, hicbirinde gecmedi (3 retry x 3 browser = 9 basarisiz deneme).

### Olasi Sebep

**Selector degismis olmasi cok muhtemel.** Test `button#login` ID'li bir buton ariyor ancak sayfa bu elemani icermiyor. Olasiliklar:
- Giris butonu farkli bir HTML etiketi veya ID ile yeniden tasarlandi (ornegin `a.login`, `button[data-testid="login"]` vb.)
- Giris butonu anasayfadan kaldirildi ya da baska bir sayfaya tasindi
- example.com sitesinde login butonu hic bulunmamaktadir, test yanlis bir sayfa hedefliyor olabilir

### Gecen Testler
- `should load successfully` - Chromium, Firefox, WebKit (3/3)
- `should have a heading` - Chromium, Firefox, WebKit (3/3)
