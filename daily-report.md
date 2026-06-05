# Gunluk Playwright Test Raporu
**Tarih:** 2026-06-05 09:10 UTC (Test calistirma zamani: 2026-06-04 10:28 UTC)

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici: Chromium, Firefox, WebKit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**1 test senaryosu 3 tarayicida da basarisiz oldu.**

### Basarisiz Test: `Homepage > should have a login button`

- **Tarayicilar:** Chromium, Firefox, WebKit
- **Hata:** `locator('button#login')` ile aranan element sayfada bulunamadi.
- **Beklenen:** Login butonunun gorunur olmasi (`toBeVisible`)
- **Gerceklesen:** Element yok (`element(s) not found`), her tarayicida 3000ms zaman asimi.
- **Deneme sayisi:** Her tarayicida 3 kez yeniden denendi, sonuc degismedi.
- **Kod satiri:** `tests/homepage.spec.js:19`

### Olasi Sebep Tahmini

**Selector yanlis veya degismis (en kuvvetli ihtimal).** Diger iki test (`should load successfully`, `should have a heading`) tum tarayicilarda basariyla gectigi icin site erisilebilir durumda — ag sorunu veya site down degil. Hata yalnizca `button#login` elementinin bulunamamasindan kaynaklaniyor. example.com bir demo/placeholder sitesidir ve gercek bir login butonu icermez; dolayisiyla test muhtemelen yanlis bir URL veya yanlis bir selector ile yazilmis.

### Onerilen Aksiyon

`tests/homepage.spec.js` dosyasindaki 18. satirda bulunan `button#login` selectorunu silinmeli ya da example.com icin anlamli bir selector ile degistirilmeli. Alternatif olarak test, login butonu olan gercek bir test ortami URL'sine yonlendirilmeli.

### Gecen Testler
| Senaryo | Tarayici | Durum |
|---------|----------|-------|
| should load successfully | Chromium | GECTI |
| should load successfully | Firefox  | GECTI |
| should load successfully | WebKit   | GECTI |
| should have a heading    | Chromium | GECTI |
| should have a heading    | Firefox  | GECTI |
| should have a heading    | WebKit   | GECTI |
