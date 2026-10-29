# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-29 09:20 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

Iki test senaryosu tum tarayicilarda basarisiz oldu.

### Basarisiz Test 1: `should have a heading`
- **Hata:** `locator('h1')` elementi sayfada bulunamadi.
- **Detay:** Test, ana sayfa basligini (`<h1>` etiketi) 5000ms icinde bekledi ancak element hic goruntu vermedi.
- **Olasi Sebep:** Sayfa yapisi degismis olabilir — `<h1>` etiketi baska bir etikete (ornegin `<h2>` veya `<div>`) donusturulmus ya da farkli bir selector ile erisiliyor olmali. Test dosyasindaki yorum da bu testin kasitli olarak basarisiz oldugunu gosteriyor (demo amacli).

### Basarisiz Test 2: `should have a login button`
- **Hata:** `locator('button#login')` elementi sayfada bulunamadi.
- **Detay:** Login butonu `button#login` selectoruyla 3000ms icinde aranmis ama bulunamamis.
- **Olasi Sebep:** Login butonu HTML'den kaldirilmis, ID'si degismis (`#login` yerine baska bir ID), ya da butona JavaScript tarafindan gecikmeli yukleniyor olabilir. Yine test notlarina gore bu kasitli bir basarisizlik.

### Gecen Testler
- `should load successfully` — Chromium, Firefox, Webkit — Sayfa basariyla yuklendi.

---
*Rapor otomatik olarak Claude rutini tarafindan olusturulmustur.*
