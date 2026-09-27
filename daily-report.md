# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-27 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

Asagidaki test 3 tarayicida (muhtemelen Chromium, Firefox, WebKit) basarisiz oldu:

### Basarisiz Test: "should have a login button" (Homepage)

**Hata:** `button#login` elementi sayfada bulunamadi.

**Teknik detay:** Test, `locator('button#login')` ile sayfada bir login butonu arar ancak element 3000ms timeout suresi icerisinde goruntulenemedi.

**Olasi Sebepler:**
- **Selector degismis olabilir:** `example.com` sitesi `button#login` id'sini kaldirmis veya degistirmis olabilir. Ornegin butonun id'si `btn-login`, `login-btn` gibi farkli bir isim almis olabilir.
- **HTML yapisi degismis olabilir:** Login butonu artik farkli bir etiket altinda (orn. `<a>` linki, `<input type="submit">`) bulunuyor olabilir.
- **Site down veya yanit vermiyor olabilir:** Sayfaya erisim sorunu nedeniyle element yuklenmemis olabilir, ancak diger 6 testin gecmesi bu ihtimali dusuk kilmaktadir.

**Oneri:** `example.com` anasayfasini manuel kontrol ederek login butonunun mevcut selector'unu tespit edin ve testi guncelleyin.
