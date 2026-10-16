# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-16 09:25 UTC

## Ozet
- Toplam test: 9
- Gecen: 3
- Basarisiz: 6

## Sonuc

**2 farkli test, 3 tarayicida (chromium, firefox, webkit) basarisiz oldu.**

### Basarisiz Testler

**1. `should have a heading` — 3 tarayicide basarisiz**
- Hata: `locator('h1')` bulunamadi. Sayfa yuklendi ancak `<h1>` etiketi gorunur degil.
- Olasi sebep: `example.com` anasayfasinda test beklenen `<h1>` elementi yok ya da selector degismis. Test dosyasindaki yorum satirina gore bu test kasitli olarak basarisiz birakilmis ("rutinin yakalaması için").

**2. `should have a login button` — 3 tarayicide basarisiz**
- Hata: `locator('button#login')` bulunamadi. `button#login` secicisiyle eslesen element yok.
- Olasi sebep: `example.com` uzerinde bu ID'ye sahip bir giris butonu bulunmuyor. Selector yanlis ya da site bu elementi hic gostermedi.

### Genel Degerlendirme
- Ana sayfa yukleme testi (`should load successfully`) tum tarayicilerde **gecti** — site erisilebilir durumda.
- Basarisizliklar sayfa yukleme sorunundan degil, **beklenen HTML elementlerinin sayfada bulunmamasindan** kaynaklanmaktadir.
- Bu durum ya test selectorlerinin guncelligini yitirmesine ya da kasitli demo hatasina isaret etmektedir.
