# Günlük Playwright Test Raporu
**Tarih:** 2026-10-12 09:10 UTC

## Özet
- Toplam test: 9 (3 senaryo × 3 tarayıcı: chromium, firefox, webkit)
- Geçen: 3
- Başarısız: 6

## Sonuç

İki test senaryosu üç tarayıcıda da başarısız oldu:

### 1. `should have a heading` — BAŞARISIZ (chromium, firefox, webkit)
- **Hata:** `locator('h1')` elementi 5 saniye içinde bulunamadı.
- **Olası sebep:** Sayfada `<h1>` etiketi yok ya da selector değişmiş. Test dosyasında "Bu test kasıtlı olarak başarısız — rutinin yakalaması için" yorumu mevcut; bu demo amaçlı intentional bir hata olabilir.

### 2. `should have a login button` — BAŞARISIZ (chromium, firefox, webkit)
- **Hata:** `locator('button#login')` elementi 3 saniye içinde bulunamadı.
- **Olası sebep:** Login butonu sayfada mevcut değil ya da `button#login` selektörü eski kalmış; sitenin HTML yapısı değişmiş olabilir.

### Geçen Test
- `should load successfully` — Tüm tarayıcılarda başarılı (site erişilebilir durumda).

**Not:** Site açılıyor ancak beklenen `h1` başlığı ve `button#login` login butonu DOM'da bulunamıyor. Her iki test de 2 deneme hakkı ile (retry: 2) yeniden çalıştırıldı, sonuç değişmedi.
