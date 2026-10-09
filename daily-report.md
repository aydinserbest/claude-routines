# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-09 09:42 UTC

## Ozet
- Toplam test: 9 (3 test senaryosu × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3 (her tarayicide "should load successfully")
- Basarisiz: 6 (her tarayicide "should have a heading" ve "should have a login button")

## Sonuc

Iki farkli test senaryosu, uc tarayicide de (chromium, firefox, webkit) basarisiz oldu.

### Basarisiz Test 1: "should have a heading"
- **Hata:** `locator('h1')` ile arama yapildi, element sayfada bulunamadi.
- **Detay:** 5 saniye beklendi, `h1` etiketi hic gorulmedi.
- **Olasi Sebep:** Test dosyasindaki yorum bu testin *kasitli olarak basarisiz birakildigi*ni acikliyor (`// Bu test kasitli olarak basarisiz — rutinin yakalaması icin`). example.com anasayfasinda standart HTML `h1` elementi bulunmuyor ya da farkli bir selector kullanilmasi gerekiyor.

### Basarisiz Test 2: "should have a login button"
- **Hata:** `locator('button#login')` ile arama yapildi, element sayfada bulunamadi.
- **Detay:** 3 saniye beklendi, `button#login` etiketi hic gorulmedi.
- **Olasi Sebep:** example.com adresinde login butonu bulunmuyor. Selector yanlis ya da test kasitli olarak basarisiz yapilmis (rutin testleri icin).

### Genel Degerlendirme
Her iki test de 2 yeniden deneme (retry) sonrasinda bile basarisiz oldu. Sayfa yuklenme testi (`should load successfully`) tum tarayicilerde basariyla gecti, bu nedenle site down degil. Sorun buyuk ihtimalle selector'lerin yanlis olmasi veya kasitli basarisizlik senaryosu.
