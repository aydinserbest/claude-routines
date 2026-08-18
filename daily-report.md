# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-18 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz test:** `should have a login button` — Chromium, Firefox ve WebKit tarayicilarinin ucunde de basarisiz.

**Hata:** `button#login` secicisiyle eslesen eleman sayfada bulunamadi. Test 3 deneme sonunda da gecemedi.

**Olasi sebep:** Selector degismis olmasi en muhtemel neden. `example.com` anasayfasinda `button#login` id'sine sahip bir giris butonu bulunmuyor; sitenin HTML yapisi degismis ya da bu eleman hic var olmamis olabilir. Site erisilebilir durumda (diger testler gecti), dolayisiyla site down degil.

**Onerilen aksiyon:** `tests/homepage.spec.js` dosyasindaki login butonu selektorunu gozden gecirin; gercek HTML'deki elemana gore guncelleyin.
