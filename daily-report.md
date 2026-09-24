# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-24 09:27 UTC

## Ozet
- Toplam test: 9 (3 tarayici x 3 test)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test:** `should have a login button` — Chromium, Firefox ve WebKit tarayicilarinin hepsinde basarisiz oldu.

**Hata:** `locator('button#login')` elementi sayfada bulunamadi. Test, `button#login` secicisiyle bir giris butonu aradi fakat element sayfada mevcut degil.

**Olasi Sebep:** example.com anasayfasinda `id="login"` olan bir buton bulunmuyor. Bu durum su sebeplerden kaynaklanabilir:
1. **Selector degismis olabilir** — Site guncellenerek butonun ID'si veya etiketi degismis olabilir.
2. **Test yanlis yazilmis olabilir** — example.com zaten bir login butonu icermeyen statik bir demo sitesidir; test muhtemelen yanlis bir URL ya da yanlis bir selector kullaniyor.

**Gecen Testler:**
- `should load successfully` — Tum tarayicilarda gecti (site erisebilir)
- `should have a heading` — Tum tarayicilarda gecti (baslik mevcut)

**Onerim:** `homepage.spec.js` dosyasindaki login butonu testini inceleyin. example.com'da boyle bir element yok; test ya farkli bir siteye aitmis ya da selector guncellenmeli.
