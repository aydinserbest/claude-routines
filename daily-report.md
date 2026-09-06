# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-06 09:10 UTC

## Ozet
- Toplam test: 9 (3 test senaryosu × 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test: "should have a login button"** — 3 tarayicide da basarisiz (chromium, firefox, webkit)

### Hata Aciklamasi
Test, ana sayfada `button#login` selector'u ile bir giris butonu aradi ancak bulamadi. Hata mesaji:

> `locator('button#login')` — element(s) not found (3000ms timeout)

Her tarayicide 2 yeniden deneme (retry) yapildi, hicbirinde basarimadi.

### Olasi Sebep Tahmini
**Selector degismis olmasi en muhtemel sebep.** "should load successfully" ve "should have a heading" testleri tum tarayicilarda basariyla gecti, yani site erisimde; sadece `button#login` elementi bulunamadi. Bu durum su anlama gelebilir:

- Giris butonu HTML'de farkli bir id/class ile tanimlanmis (ornegin `button#signin`, `.login-btn`)
- Giris butonu sayfadan kaldirilmis ya da baska bir sayfaya tasimis olabilir
- example.com'un HTML yapisi degismis olabilir

### Onerim
`tests/homepage.spec.js` satir 18-19'u kontrol et. `button#login` selector'unu guncellemeyi ya da test senaryosunu example.com'un guncel yapisiyla uyumlu hale getirmeyi dusun.
