# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-03 09:10 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayıcı: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

2 test senaryosu tum tarayicilarda (chromium, firefox, webkit) basarisiz oldu:

### 1. "should have a heading"
- **Hata:** `locator('h1')` ile aranan baslik elementi sayfada bulunamadi. 5000ms beklendi, element hic gelmedi.
- **Etkilenen tarayicilar:** chromium, firefox, webkit
- **Olasi sebep:** example.com anasayfasinda `h1` elementi yok ya da sayfa yapisi degismis olabilir. Test dosyasindaki yorum bu testin kasitli olarak basarisiz birakildigi bilgisini veriyor (`// Bu test kasıtlı olarak başarısız — rutinin yakalaması için`).

### 2. "should have a login button"
- **Hata:** `locator('button#login')` ile aranan giris butonu sayfada bulunamadi. 3000ms beklendi, element hic gelmedi.
- **Etkilenen tarayicilar:** chromium, firefox, webkit
- **Olasi sebep:** example.com sayfasinda hicbir zaman `button#login` selectorune uyan bir buton bulunmamaktadir. Bu test de kasitli olarak basarisiz birakılmis olabilir.

### Gecen Testler
- "should load successfully" — chromium, firefox, webkit icin basariyla tamamlandi. Sayfa erisilebilir durumda.

### Genel Degerlendirme
Sayfa erisimi saglikli (should load successfully testleri gecti), ancak iki test senaryosu tum tarayicilarda tutarli sekilde basarisiz. Site down degil; selector/element uyumsuzlugu sozu konusu.
