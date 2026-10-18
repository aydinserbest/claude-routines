# Günlük Playwright Test Raporu
**Tarih:** 2026-10-18 09:36 UTC

## Özet
- Toplam test (spec): 3
- Geçen: 1
- Başarısız: 2
- Tarayıcılar: chromium, firefox, webkit (her test 3 tarayıcıda çalıştırıldı)

## Sonuç

**2 başarısız test tespit edildi.**

### Başarısız Test 1: `should have a heading`
- **Hata:** `locator('h1')` 5000ms içinde bulunamadı — "element(s) not found"
- **Olası sebep:** Sayfada `<h1>` elementi yok veya DOM'a yüklenmedi. Test kodu yorumuna göre bu test kasıtlı olarak başarısız bırakılmış ("rutinin yakalaması için").
- **Tüm tarayıcılarda başarısız** (chromium, firefox, webkit) — 3 deneme yapıldı, hepsi aynı hatayı verdi.

### Başarısız Test 2: `should have a login button`
- **Hata:** `locator('button#login')` 3000ms içinde bulunamadı — "element(s) not found"
- **Olası sebep:** `button#login` seçicisi artık mevcut değil. Buton kaldırılmış, id'si değiştirilmiş (`#login` yerine başka bir id) veya farklı bir DOM yapısı kullanılıyor olabilir.
- **Tüm tarayıcılarda başarısız** (chromium, firefox, webkit) — 3 deneme yapıldı, hepsi aynı hatayı verdi.

### Geçen Test
- `should load successfully` — Tüm tarayıcılarda başarılı (sayfa yüklemesi çalışıyor, site erişilebilir).
