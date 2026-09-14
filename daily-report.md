# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-14 09:10 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayıcı)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test:** `should have a login button` — Chromium, Firefox ve WebKit tarayıcılarının tamamında başarısız.

**Hata:** `button#login` seçicisi sayfada bulunamadı.
```
locator('button#login') için element bulunamadı (timeout: 3000ms)
```
Test 2 kez yeniden denendi, her seferinde aynı hata alındı.

**Olası Sebep:** example.com sayfasında `button#login` ID'sine sahip bir giriş butonu yok. Site yüklenip heading testi geçiyor; dolayısıyla site erişilebilir durumda. Büyük olasılıkla **selector değişmiş veya yanlış tanımlanmış** — test, üzerinde login butonu olmayan bir placeholder sayfayı (example.com) test ediyor. Testin güncellenerek gerçek bir login sayfasına yönlendirilmesi veya selector'ın sayfanın mevcut HTML yapısına göre düzeltilmesi gerekiyor.
