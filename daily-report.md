# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-06 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test: "should have a login button"** — Chromium, Firefox ve WebKit tarayicilarinda basarisiz.

**Hata:** `locator('button#login')` elementi sayfada bulunamadi.
- Beklenen: `button#login` secicisiyle eslesen bir buton gorunur olmali
- Gerceklesen: Element bulunamadi (3 sn zaman asimi)
- Konum: `tests/homepage.spec.js` satir 19
- Her tarayicida 2 kez yeniden denendi, sonuc degismedi.

**Olasi Sebep:** `example.com` ana sayfasinda `button#login` id'sine sahip bir buton bulunmuyor. Bu durum iki anlama gelebilir:
1. **Selector degismis olabilir** — Sayfanin HTML yapisi guncellenmis, login butonu artik farkli bir id veya etiketle mevcut.
2. **Test yanlis yazilmis olabilir** — `example.com` hic login butonu icermiyor; test bu siteye uygun degildir.

Diger testler (sayfa yukleme ve baslik varligi) 3 tarayicida da sorunsuz gectigi icin site down degil.
