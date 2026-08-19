# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-19 (Test calisma zamani: 2026-08-18T09:45:37Z)

## Ozet
- Toplam test: 9 (3 tarayici x 3 test)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test:** `Homepage > should have a login button`
- Etkilenen tarayicilar: Chromium, Firefox, WebKit
- Test 2 kez yeniden denendi (toplam 3 deneme), hepsi basarisiz oldu

**Hata mesaji (sade Turkce):**
`button#login` secici ile aranan "login" butonu sayfada bulunamadi.
Test, `<button id="login">` elementinin goruntu alani icinde gorunur (visible) olmasini bekliyordu, ancak bu element sayfada mevcut degil.

**Olasi sebep:**
Site down degil (diger 2 test — sayfa yuklenme ve baslik kontrolu — tum tarayicilarda basariyla gecti).
En muhtemel neden: **Selector degismis veya login butonu hic eklenmemis.** example.com uzerinde bir login butonu bulunmuyor; test, var olmayan bir elementi arıyor. Test kodunun (`homepage.spec.js`, satir 19) guncellenmesi ya da bu testin kaldirilmasi gerekiyor.

**GitHub Actions calistirma:** https://github.com/aydinserbest/claude-routines/actions/runs/32123199396
