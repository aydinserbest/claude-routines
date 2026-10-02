# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-02 09:10 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Basarisiz Testler

### 1. `should have a heading` (chromium, firefox, webkit)
**Hata:** `locator('h1')` elementi sayfada bulunamadi. 5 saniye beklenmesine ragmen `h1` etiketi gorunur hale gelmedi.
**Olasi sebep:** Sayfanin HTML yapisi degismis olabilir — `h1` elementi kaldirilmis ya da farkli bir etiketle (orn. `h2`, `div`) degistirilmis olabilir. Test kasitli olarak basarisiz birakilmis (kod yorumu: "rutinin yakalaması için").

### 2. `should have a login button` (chromium, firefox, webkit)
**Hata:** `locator('button#login')` elementi sayfada bulunamadi. 3 saniye beklenmesine ragmen `button#login` goruntu alamadi.
**Olasi sebep:** Giris dugmesinin ID'si veya etiket tipi degismis olabilir (orn. `a#login` veya `button.login`). Bu test de kasitli olarak basarisiz birakilmis.

## Sonuc
2 farkli test senaryosu, 3 tarayicide de basarisiz oldu (toplam 6 basarisiz calistirma). Her iki test de test dosyasindaki yoruma gore **kasitli olarak basarisiz** birakilmis (`// Bu test kasıtlı olarak başarısız — rutinin yakalaması için`). Ancak uretim ortaminda bu selectorlerin calismasi bekleniyor; gercek bir sorun olup olmadigi kontrol edilmeli.

CI calistirmasi: https://github.com/aydinserbest/claude-routines/actions/runs/36843040610
