# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-08 09:38 UTC

## Ozet
- Toplam test: 9 (3 tarayici x 3 test)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test:** `Homepage > should have a login button`
**Etkilenen Tarayicilar:** Chromium, Firefox, WebKit (tum tarayicilarda ayni hata)

### Hata Aciklamasi
Test, ana sayfada `button#login` selectorunu arayan bir login butonu bekliyordu. Ancak bu element 3000ms bekleme suresi icerisinde hicbir tarayicide bulunamadi. Test 2 kez yeniden denendi ve hepsinde ayni hata olustu.

**Hata mesaji:**
```
locator('button#login') — element(s) not found
Expected: visible, Timeout: 3000ms
```
**Satir:** `tests/homepage.spec.js:19`

### Olasi Sebep
Sayfanin yuklenip baslik testinin gecmesi nedeniyle site down degil. En muhtemel sebep **selector degismis olmasi**: login butonu artik `button#login` yerine farkli bir HTML etiketiyle (`<a>`, `<div>`) ya da farkli bir id/class ile render ediliyor olabilir. Alternatif olarak login butonu sayfadan tamamen kaldirilmis ya da baska bir sayfaya tasinmis olabilir.

**Onerilen Aksiyon:** `tests/homepage.spec.js:18` satirindaki `page.locator('button#login')` selectorunu guncel sayfa yapisiyla eslestirin.
