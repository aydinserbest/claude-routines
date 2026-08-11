# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-11 09:10 UTC

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test:** `should have a login button` — chromium, firefox ve webkit uzerinde hepsi basarisiz.

**Hata:** Sayfa yuklendi ancak `button#login` secicisi hicbir tarayicida bulunamadi. Her tarayicida 2 yeniden deneme yapildi, sonuc degismedi.

**Hata mesaji (ozet):** `locator('button#login')` beklendi ancak element sayfada mevcut degil. (element(s) not found)

**Olasi sebep:** Test, `button#login` ID'li bir giris butonu bekliyor; ancak bu element example.com anasayfasinda hic mevcut degildi. Olasilikla:
1. Test yanlis bir selector kullanarak yazilmis — example.com'un giris butonu yok.
2. Selector degismis olabilir (orn. `a[href='/login']` gibi farkli bir eleman).

**Tavsiye:** Test senaryosunu gozden gecirin; `button#login` selectoru gercek sayfayla eslesmiyorsa guncelleyin.
