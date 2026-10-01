# Günlük Playwright Test Raporu
**Tarih:** 2026-10-01 09:10 UTC

## Özet
- Toplam test: 9
- Geçen: 3
- Başarısız: 6

## Sonuç

### Başarısız Testler

**1. Homepage > should have a heading** (3 tarayıcıda başarısız)
- Hata: `h1` elementi sayfada bulunamadı (`element(s) not found`, 5000ms timeout)
- Etkilenen tarayıcılar: Chromium, Firefox, WebKit

**2. Homepage > should have a login button** (3 tarayıcıda başarısız)
- Hata: `button#login` elementi sayfada bulunamadı (`element(s) not found`, 3000ms timeout)
- Etkilenen tarayıcılar: Chromium, Firefox, WebKit

### Olası Sebep Tahmini

Her iki test de aynı anda, tüm tarayıcılarda başarısız olmuştur. Bu durum tek bir tarayıcı sorununa işaret etmez; muhtemel sebepler:

- **Selector değişmiş olabilir:** Site yeniden yapılandırılmış ve `h1` ya da `button#login` elementlerinin yapısı/id'si değişmiş olabilir.
- **Site yapısı değişmiş olabilir:** example.com sayfasında ana başlık ve giriş butonu artık mevcut olmayabilir veya farklı bir HTML yapısıyla sunuluyor olabilir.
- **Site geçici olarak erişilemez durumda olabilir:** Tüm elementlerin aynı anda bulunamadığı durum, sayfanın tam yüklenemediğine işaret edebilir.

Geçen testler (3 adet) büyük ihtimalle bağlantı ve başlık (title) testleridir; bu da sitenin tamamen down olmadığına, sadece belirli elementlerin artık beklenen biçimde bulunmadığına işaret eder.

### Önerilen Aksiyon
Testlerin selector'larını güncel site yapısına göre gözden geçirin.
