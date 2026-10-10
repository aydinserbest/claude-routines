# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-10 09:10 UTC

## Ozet
- Toplam test: 3
- Gecen: 1
- Basarisiz: 2

## Sonuc

**2 test basarisiz oldu.**

### Basarisiz Testler

**1. `should have a heading` (homepage.spec.js:9)**
- Hata: `locator('h1')` ile aranan baslik elementi sayfada bulunamadi (5000ms beklenip zaman asimi yasandi).
- Tum tarayicilarda (Chromium, Firefox, WebKit) tekrar deneme (2 retry) ile de basarisiz oldu.
- **Olasi sebep:** Testin kendi yorumuna gore (`// Bu test kasitli olarak basarisiz`) bu test rutinin calismasi icin kasitli olarak basarisizlastirilmis. Aksi halde site yapisi degismis veya `h1` elementi kaldirilmis olabilir.

**2. `should have a login button` (homepage.spec.js:16)**
- Hata: `locator('button#login')` ile aranan giris butonu elementi sayfada bulunamadi (3000ms beklenip zaman asimi yasandi).
- Tum tarayicilarda (Chromium, Firefox, WebKit) tekrar deneme (2 retry) ile de basarisiz oldu.
- **Olasi sebep:** `button#login` selector'u degismis olmali ya da buton farkli bir ID/class ile render ediliyordur. Site tasariminda login butonunun HTML yapisi guncellenmis olabilir.

### Gecen Test
- `should load successfully` — Sayfa basariyla yuklendi (tum 3 tarayicide).

---
*Rapor otomatik olarak olusturuldu. Ayrintilar icin test-results.json dosyasina bakiniz.*
