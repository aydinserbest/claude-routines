# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-14 (Test calistirma zamani: 2026-08-13T10:19:44Z)

## Ozet
- Toplam test: 9 (3 test x 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz test: "should have a login button"** — Chromium, Firefox ve WebKit tarayicilarinin ucunda da basarisiz oldu. Her tarayici 2 kez yeniden denedi, toplam 9 deneme yapildi, hepsi basarisiz.

### Hata Detayi

```
Locator: locator('button#login')
Beklenen: element gorune olarak mevcut
Hata: element bulunamadi (timeout: 3000ms)
Dosya: tests/homepage.spec.js satir 19
```

Test, sayfada `button#login` ID'li bir login butonu aradi ancak bu element sayfada bulunmuyor.

### Olasi Sebep

**Selector/element kaybolmus ya da hic olmamis olabilir.** Diger iki test (`should load successfully` ve `should have a heading`) tum tarayicilarda basariyla gecti; bu da sitenin (example.com) erisilebiliginin sorunlu olmadigini gosteriyor. Sorun yalnizca `button#login` elementinin sayfada var olmamasi. example.com standart bir demo sayfasidir ve login butonu icermez — testin yanlis bir siteye ya da artik degismis bir selector'e karsi yazilmis olmasi muhtemel.

**Onerilen eylem:** `tests/homepage.spec.js` dosyasini inceleyerek `button#login` selector'unun guncel sayfa yapisindan kaynaklanip kaynaklanmadigini kontrol edin.
