# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-30 09:28 UTC

## Ozet
- Toplam test: 9 (3 spec × 3 tarayici)
- Gecen: 3
- Basarisiz: 6

## Basarisiz Testler

### 1. `should have a heading` (3 tarayicida da basarisiz)
- **Hata:** `h1` elementi 5 saniye icinde bulunamadi (`locator('h1')` → element(s) not found)

### 2. `should have a login button` (3 tarayicida da basarisiz)
- **Hata:** `button#login` elementi 3 saniye icinde bulunamadi (`locator('button#login')` → element(s) not found)

## Sonuc

**2 test senaryosu basarisiz** — her iki test de tum tarayicilarda (Chromium, Firefox, WebKit) hata verdi.

**Olasi sebep tahmini:**
- Hedef site (`example.com` veya test edilen URL) yapi degisikligi yapilmis olabilir — `h1` etiketi ve `button#login` selector'leri artik mevcut degil.
- Alternatif: Site erisilebilir durumda ama sayfa yapisi degismis (eski selector'lar calismıyor).
- Daha az olasilik: Site gecici olarak down ya da ag sorunu var, ancak "element not found" hatasi sayfanin yuklendigini gosteriyor (yoksa "net::ERR_" gibi bir hata gorulurdu).

**Onerim:** Test dosyasindaki selector'leri guncellenmis sayfa yapisina gore duzeltmek gerekiyor.
