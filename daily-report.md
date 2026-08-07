# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-07 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test: "should have a login button"** — Chromium, Firefox ve WebKit tarayicilarinin hepsinde basarisiz oldu.

**Hata mesaji:** `locator('button#login')` elementi sayfada bulunamadi. Test, `button#login` seciciyle bir giris (login) butonu arar, ancak bu element 3000ms zaman asimi icerisinde hic goruntulenmedi.

**Olasi sebep:** Selector degismis ya da example.com'da hic login butonu yok. Diger testler (`should load successfully` ve `should have a heading`) tum tarayicilarda basariyla gectigi icin site down degil. Buyuk ihtimalle `button#login` secicisi sayfa HTML'i ile eslesmemektedir — login butonu ya farkli bir HTML etiketiyle (`a`, `input` gibi) ya da farkli bir `id`/`class` atributuyla tanimlanmis olabilir.

**Eylem onerileri:**
- `tests/homepage.spec.js` dosyasindaki seciciyi kontrol et ve guncelle
- example.com anasayfasini incele, login butonunun gercekten var olup olmadigini dogrula
