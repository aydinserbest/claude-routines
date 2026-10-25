# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-25 09:36 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Basarisiz Testler

### 1. should have a heading (chromium, firefox, webkit)
**Hata:** `locator('h1')` elementi sayfada bulunamadi.
Test, example.com anasayfasinda `<h1>` etiketi bekliyor ancak element 5 saniye boyunca goruntu vermedi.
**Olasi sebep:** example.com sayfasinin HTML yapisi degismis olabilir ya da `h1` yerine farkli bir baslik etiketi kullanilmaya baslanmis. Ayrica test dosyasinda bu testin kasitli olarak basarisiz birakildigina dair bir not var (`// Bu test kasitli olarak basarisiz — rutinin yakalaması icin`).

### 2. should have a login button (chromium, firefox, webkit)
**Hata:** `locator('button#login')` elementi sayfada bulunamadi.
Test, `id="login"` olan bir buton bekliyor ancak example.com'da boyle bir buton hic olmadi.
**Olasi sebep:** Selector yanlis tanimlanmis ya da test yanlis bir URL uzerinde calisiyor. example.com standart bir demo sayfasidir ve login butonu icermez.

## Sonuc
2 test senaryosu 3 tarayicide de basarisiz oldu (toplam 6 basarisiz test). Her iki basarisizlik da `element(s) not found` hatasiyla 3 deneme sonrasinda kesin basarisizliga dustu. Test dosyasindaki yorum, en az bir testin kasitli olarak basarisiz birakildigini belirtiyor — bu durum rutinin dogru calistigini dogrulamak icin tasarlanmis olabilir.
