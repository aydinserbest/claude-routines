# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-31 09:35 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

**2 test 3 tarayicida da basarisiz oldu** (her birinde 2 yeniden deneme yapildi, toplam 18 basarisizlik).

### Basarisiz Testler

#### 1. `should have a heading` (homepage.spec.js:9)
- **Hata:** `locator('h1')` ile h1 etiketi sayfada bulunamadi. 5000ms beklendi, element yok.
- **Olasi sebep:** Sitenin HTML yapisi degismis olabilir — baslik elementi `h1` yerine baska bir etiketle (orn. `h2`, `div`) render ediliyor olabilir. Site yukleniyor (ilk test geciyor), yani site down degil; selector muhtemelen gecersiz.

#### 2. `should have a login button` (homepage.spec.js:16)
- **Hata:** `locator('button#login')` ile giris butonu bulunamadi. 3000ms beklendi, element yok.
- **Olasi sebep:** Giris butonunun `id` veya `tag` ozelligi degismis olabilir (orn. `button` yerine `a` etiketi, ya da `id="login"` yerine baska bir id). Yine site erisilebilir oldugu icin ag sorunu degil, selector sorunu.

### Gecen Testler
- `should load successfully` — Chromium, Firefox, Webkit uzerinde basariyla yuklendi.

### Tavsiye
Sayfanin gercek HTML kaynagini inceleyerek `h1` ve `button#login` selectorlerinin guncel karsiliklari bulunmali ve testler guncellenmeli.
