# Günlük Playwright Test Raporu
**Tarih:** 2026-10-24 09:23 UTC

## Özet
- Toplam test (tarayıcı bazında): 9
- Geçen: 3
- Başarısız: 6

## Başarısız Testler

### 1. `should have a heading` (Chromium, Firefox, WebKit)
**Hata:** `locator('h1')` elementi sayfada bulunamadı. Test 5 saniye bekledi ama `h1` başlık etiketi hiç görünmedi.

**Olası sebep:** Testin içinde bir yorum satırı var — "Bu test kasıtlı olarak başarısız — rutinin yakalaması için". Bu nedenle bu hata **bilerek** yazılmış, rutini test etmek amaçlıdır. Gerçek bir uygulama sorunu değil.

### 2. `should have a login button` (Chromium, Firefox, WebKit)
**Hata:** `locator('button#login')` elementi sayfada bulunamadı. Test 3 saniye bekledi ama `button#login` giriş butonu bulunamadı.

**Olası sebep:** example.com sayfasında bir login butonu bulunmuyor; selector (`button#login`) bu siteyle uyumsuz. Kasıtlı başarısız test senaryosu.

## Sonuç
2 test başarısız oldu. Her test 3 tarayıcıda (Chromium, Firefox, WebKit) çalıştığından toplam 6 başarısız çalışma kaydedildi. Her iki hata da test koduna göre **kasıtlı** olarak yazılmış olup rutinin çalıştığını doğrulamak içindir. Ancak günlük takip açısından issue açıldı.
