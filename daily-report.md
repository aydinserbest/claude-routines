# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-02 09:10 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

**2 test 3 tarayicida da basarisiz oldu (toplamda 6 hata):**

### 1. `should have a heading` (chromium, firefox, webkit)
- **Hata:** `locator('h1')` elementi sayfada bulunamadi
- **Dosya:** `tests/homepage.spec.js` satir 12
- **Detay:** Sayfa yuklendi ancak `<h1>` elementi 5 saniye icinde gorunur hale gelmedi. 2 kez yeniden denendi, sonuc degismedi.
- **Olasi sebep:** Selector degismis olabilir (sayfada `h1` yerine baska bir baslik elementi kullaniliyor olabilir) ya da bu test kasitli olarak basarisiz birakilmis (test kodunda yorum var: "Bu test kasitli olarak basarisiz — rutinin yakalaması icin").

### 2. `should have a login button` (chromium, firefox, webkit)
- **Hata:** `locator('button#login')` elementi sayfada bulunamadi
- **Dosya:** `tests/homepage.spec.js` satir 19
- **Detay:** `button#login` id'li giris butonu 3 saniye icinde bulunamadi. 2 kez yeniden denendi, sonuc degismedi.
- **Olasi sebep:** Login butonu farkli bir id veya selector ile implemente edilmis olabilir. Ya da bu da kasitli basarisiz bir test.

### Gecen Testler
- `should load successfully` — chromium, firefox, webkit (3/3 gecti)

---
**Not:** Test kodu icinde "Bu test kasitli olarak basarisiz — rutinin yakalaması icin" yorumu bulunmakta. Bu testler rutin izleme amaciyla kasitli olarak basarisiz birakilmis olabilir.
