# Günlük Playwright Test Raporu
**Tarih:** 2026-06-01 10:37 UTC

## Özet
- Toplam test: 0
- Geçen: 0
- Başarısız: 0
- Derleme/Yapılandırma Hatası: 2

## Sonuç

Testler çalıştırılamadı — test dosyasında **derleme hatası** var.

### Hatalar

**1. `ReferenceError: test is not defined`**
- Dosya: `tests/homepage.spec.js`, 1. satır
- `test.describe(...)` kullanılmış ancak `test` Playwright'tan import edilmemiş.
- Dosyanın başına şu satır eklenmeli:
  ```js
  const { test, expect } = require('@playwright/test');
  ```

**2. `Error: No tests found`**
- Yukarıdaki import hatası nedeniyle hiçbir test keşfedilemedi.

### Olası Sebep

Kod hatası — `@playwright/test` modülünden `test` nesnesi import edilmemiş. Site ile veya ağ ile ilgili bir sorun değil; test dosyası düzeltilmeden testler çalışmayacak.
