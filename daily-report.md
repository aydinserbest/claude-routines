# Günlük Playwright Test Raporu
**Tarih:** 2026-11-07 09:10 UTC

## Özet
- Toplam test: 9 (3 test × 3 tarayıcı: chromium, firefox, webkit)
- Geçen: 3
- Başarısız: 6

## Sonuç

**2 test senaryosu tüm tarayıcılarda başarısız oldu:**

### 1. `should have a heading` (homepage.spec.js:9)
- **Hata:** `h1` elementi sayfada bulunamadı (5000ms zaman aşımı)
- **Selector:** `locator('h1')`
- **Olası sebep:** Test dosyasındaki yoruma göre bu test **kasıtlı olarak başarısız** bırakılmış ("rutinin yakalaması için"). Ancak gerçek bir senaryoda: example.com ana sayfasında `<h1>` etiketi mevcut değil ya da farklı bir yapıya sahip.
- **Durum:** 2 yeniden denemede de aynı hata (toplam 3 deneme)

### 2. `should have a login button` (homepage.spec.js:16)
- **Hata:** `button#login` elementi sayfada bulunamadı (3000ms zaman aşımı)
- **Selector:** `locator('button#login')`
- **Olası sebep:** `button#login` gibi çok spesifik bir CSS selector kullanılmış. example.com sitesinde böyle bir giriş butonu zaten bulunmuyor — selector sitenin gerçek yapısına uymuyor.
- **Durum:** 2 yeniden denemede de aynı hata (toplam 3 deneme)

### Geçen Test
- `should load successfully` — Chromium, Firefox ve WebKit'te başarıyla geçti. Sayfa yükleniyor.

## Değerlendirme
Sayfa erişimi sorunsuz çalışıyor (site down değil). Başarısızlıklar selector uyumsuzluğundan kaynaklanıyor. Test dosyasındaki yorum da bunu doğruluyor: bu testler rutinin çalıştığını doğrulamak için kasıtlı olarak başarısız yapılmış.
