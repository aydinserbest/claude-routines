# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-20 09:27 UTC

## Ozet
- Toplam test: 9 (3 spec × 3 tarayıcı: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Basarisiz Testler

### 1. `should have a heading` (chromium, firefox, webkit)
- **Hata:** `locator('h1')` ile aranan başlık elementi sayfada bulunamadı
- **Selector:** `h1`
- **Timeout:** 5000ms — 3 deneme de başarısız
- **Dosya:** `tests/homepage.spec.js:12`
- **Olası sebep:** Sayfanın `h1` elementi ya kaldırılmış ya da farklı bir tag ile değiştirilmiş (selector değişimi). *(Not: Test kodunda bu hatanın kasıtlı olduğu belirtilmiş.)*

### 2. `should have a login button` (chromium, firefox, webkit)
- **Hata:** `locator('button#login')` ile aranan login butonu bulunamadı
- **Selector:** `button#login`
- **Timeout:** 3000ms — 3 deneme de başarısız
- **Dosya:** `tests/homepage.spec.js:19`
- **Olası sebep:** Login butonu sayfadan kaldırılmış veya ID'si değiştirilmiş olabilir (selector değişimi).

## Sonuc
2 test başarısız — her ikisi de 3 tarayıcıda (chromium, firefox, webkit) tekrar edildi ve hiçbirinde geçmedi. Sayfa yüklenmesi başarılı olduğundan site erişilebilir durumda; sorun büyük ihtimalle selector değişikliğinden kaynaklanıyor.
