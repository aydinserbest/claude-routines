# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-21 09:28 UTC

## Ozet
- Toplam test: 9 (3 test senaryosu × 3 tarayıcı: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

**2 test senaryosu tüm tarayıcılarda başarısız oldu.**

### Başarısız Test 1: `should have a heading`
- **Tarayıcılar:** chromium, firefox, webkit
- **Hata:** `locator('h1')` elementi sayfada bulunamadı (5000ms beklendi)
- **Olası Sebep:** Sayfa yükleniyor (ilk test geçiyor), ancak `<h1>` etiketi DOM'da yok. Selector değişmiş olabilir ya da test kasıtlı olarak başarısız yazılmış (`// Bu test kasıtlı olarak başarısız — rutinin yakalaması için`).

### Başarısız Test 2: `should have a login button`
- **Tarayıcılar:** chromium, firefox, webkit
- **Hata:** `locator('button#login')` elementi sayfada bulunamadı (3000ms beklendi)
- **Olası Sebep:** Sayfada `id="login"` olan bir `<button>` yok. Selector değişmiş ya da bu test de kasıtlı olarak başarısız.

### Not
Test dosyasında `// Bu test kasıtlı olarak başarısız — rutinin yakalaması için` yorumu mevcut — bu başarısızlıklar muhtemelen rutinin çalışıp çalışmadığını doğrulamak için bilinçli bırakılmış.
