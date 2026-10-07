# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-07 09:10 UTC

## Ozet
- Toplam test: 9 (3 tarayici × 3 test)
- Gecen: 3
- Basarisiz: 6

## Basarisiz Testler

### 1. `should have a heading` (Chromium, Firefox, WebKit)
- **Hata:** `h1` elementi sayfada bulunamadi (5 saniye beklendi)
- **Selector:** `locator('h1')`
- **Olasi sebep:** Test kodu `h1` elementi bekliyor ancak example.com bu elementi icermiyor. Test dosyasindaki yorum "kasitli olarak basarisiz" yazdigini belirtiyor — muhtemelen rutinin calismasi icin yazilmis bir demo test.

### 2. `should have a login button` (Chromium, Firefox, WebKit)
- **Hata:** `button#login` elementi sayfada bulunamadi (3 saniye beklendi)
- **Selector:** `locator('button#login')`
- **Olasi sebep:** example.com uzerinde boyle bir giris butonu yok. Selector yanlis ya da test kasitli olarak basarisiz birakilmis.

## Sonuc
2 test 3 tarayicide de basarisiz oldu (toplam 6 basarisizlik). Site erisimi normal calisıyor (should load successfully 3 tarayicide de gecti). Sorun selector hatasi — `h1` ve `button#login` elementleri example.com'da mevcut degil.
