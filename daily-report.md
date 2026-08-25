# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-25 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test:** `Homepage > should have a login button`

**Hata:** Test, ana sayfada `button#login` secicisiyle bir giris butonu aramaktadir ancak bu element sayfada bulunamadi.

```
Error: expect(locator).toBeVisible() failed
Locator: locator('button#login')
Expected: visible
Timeout: 3000ms
Error: element(s) not found
```

**Olasi Sebep:** Sitenin HTML yapisi degismis olmali — `button#login` elementi ya kaldirildi ya da farkli bir seciciyle (ornegin `a.login`, `#loginBtn`, vb.) yeniden isimlendirdi. Site down oldugunda genellikle farkli hatalar gorulur (connection refused, timeout); buradaki hata spesifik olarak element bulunamadigini soyluyor, bu da **selector degisikligi** ihtimalini guclu kilmaktadir.

Test 3 kez yeniden denenmis (retry) ve her seferinde ayni hatayı vermistir.

**Onerilen Eylem:** Sitenin kaynak kodunu inceleyerek login butonunun guncellenmis secicisini tespit edin ve `tests/` klasorundeki ilgili test dosyasini guncelleyin.
