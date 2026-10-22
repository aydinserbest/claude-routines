# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-22 09:27 UTC

## Ozet
- Toplam test (spec): 3
- Gecen: 1
- Basarisiz: 2

## Sonuc

Bugunku testlerde **2 basarisiz test** tespit edildi. Her iki test de Chromium, Firefox ve WebKit tarayicilarinin hepsinde basarisiz oldu.

### Basarisiz Test 1: `should have a heading`
- **Hata:** `h1` elementi sayfada bulunamadi (5 saniye beklendi, timeout)
- **Locator:** `locator('h1')`
- **Olasi Sebep:** Sitenin HTML yapisi degismis olabilir — `h1` etiketi yerine baska bir baslik etiketi (ornegin `h2` veya `div`) kullaniliyor olabilir. Ya da sayfa icerigi dinamik olarak yukleniyor ve `h1` henuz DOM'a eklenmemis.

### Basarisiz Test 2: `should have a login button`
- **Hata:** `button#login` elementi sayfada bulunamadi (3 saniye beklendi, timeout)
- **Locator:** `locator('button#login')`
- **Olasi Sebep:** Login butonu CSS selector'u degismis olabilir (ornegin `id="login"` yerine baska bir ID veya class kullaniliyor), ya da buton tamamen kaldirilmis.

### Gecen Test
- `should load successfully` — Chromium, Firefox ve WebKit'te basariyla geri dondu.

### Genel Degerlendirme
Sayfa yukleniyor ancak beklenen HTML elemanlari (`h1`, `button#login`) DOM'da yok. Bu durum ya sitenin yeniden yapilandirildigina ya da belirli elementlerin kaldirildigina isaret ediyor. Site down degil; erisim basarili.
