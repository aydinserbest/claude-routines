# Günlük Playwright Test Raporu
**Tarih:** 2026-09-25 09:41 UTC

## Özet
- Toplam test: 9 (3 test dosyası × 3 browser)
- Geçen: 6
- Başarısız: 3

## Sonuç

**Başarısız test:** `Homepage > should have a login button` — 3 browser'da da başarısız (chromium, firefox, webkit).

**Hata:** `button#login` seçicisi sayfada bulunamadı (3000ms timeout).

**Olası sebep:** `example.com` anasayfasında `id="login"` olan bir buton hiçbir zaman bulunmamaktadır. Büyük ihtimalle bu test, gerçek bir login butonu olan farklı bir siteye yazılmış, ancak yanlışlıkla `example.com` üzerinde çalıştırılmaktadır. Alternatif olarak, sitenin yapısı değişmiş ve login butonu kaldırılmış ya da ID'si değiştirilmiş olabilir.

**Önerilen aksiyon:** Test dosyasındaki URL ve selector'ın doğru siteyi ve doğru elementi hedef aldığı kontrol edilmelidir.
