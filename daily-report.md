# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-27 (Testler 2026-08-26T09:54 UTC'de calistirildi)

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test:** `should have a login button` — Chromium, Firefox ve WebKit tarayicilarinin hepsinde basarisiz oldu.

**Hata:** `button#login` secicisiyle eslesen bir eleman sayfada bulunamadi (3000ms beklendi, 2 yeniden deneme yapildi, sonuc degismedi).

**Olasi Sebep:** example.com anasayfasinda `<button id="login">` etiketli bir buton bulunmuyor. Site bir yer tutucu (placeholder) sayfasidir ve hicbir zaman gercek bir giris butonu icermemistir. Test, gercekte var olmayan bir HTML elemanini aradi. Bu bir **selector hatasi** — test kodu guncellenmeli ya da test kaldirilmali.

**Etkilenen Dosya:** `tests/homepage.spec.js` satir 19
