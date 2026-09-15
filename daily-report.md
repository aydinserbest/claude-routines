# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-15 09:30 UTC

## Ozet
- Toplam test: 9 (3 tarayici x 3 test)
- Gecen: 6
- Basarisiz: 3

## Basarisiz Testler

### `should have a login button` — Chromium, Firefox, WebKit

**Hata:** `locator('button#login')` bulunamadi. Test, anasayfada `button#login` selectorlu bir giris butonu arar; ancak element sayfada mevcut degil.

**Olasi Sebep:** Selector degismis olmali. Sayfa basariyla yukleniyor ve baslik testi geciyor, yani site down degil. Buyuk ihtimalle login butonunun HTML'i degismis: ornegin `<button id="login">` yerine `<a id="login">` veya farkli bir id kullaniliyor olabilir. Testin selector'unu guncellemek gerekiyor.

## Sonuc

**Basarisiz testler tespit edildi.** `should have a login button` testi Chromium, Firefox ve WebKit tarayicilarinin hepsinde 2 yeniden denemeyle birlikte toplam 3 kez basarisiz oldu. Sayfanin kendisi calisiyor; sorun buyuk olasilikla degisen bir HTML selector.
