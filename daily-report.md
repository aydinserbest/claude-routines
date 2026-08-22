# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-22 (GitHub Actions calismasi: 2026-08-21 09:49 UTC)

## Ozet
- Toplam test: 9 (3 test x 3 tarayici: Chromium, Firefox, WebKit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**"should have a login button"** testi 3 tarayicida da basarisiz oldu (her biri 2 yeniden deneme dahil 3 kez denendi).

### Hata Detayi

```
Locator: locator('button#login')
Expected: visible
Timeout: 3000ms
Error: element(s) not found
```

Test, sayfada `button#login` secicisiyle bir giris butonu aramakta, ancak bu element sayfada bulunmamaktadir.

### Olasi Sebep

**Selector degismis veya element hic mevcut degil.** Test edilen adres muhtemelen `example.com` olup bu sayfa basit bir yer tutucu sayfadir ve gercek bir giris butonu icermez. Secici (`button#login`) sayfanin HTML yapisiyla eslesmemektedir. Cozum: Test secicisini sayfanin gercek HTML yapisina gore guncellemek ya da test adresini duzeltmek gerekir.

### Etkilenen Tarayicilar
- Chromium - BASARISIZ (3 deneme)
- Firefox - BASARISIZ (3 deneme)
- WebKit - BASARISIZ (3 deneme)

### Actions Calistirmasi
[Build #32469671208](https://github.com/aydinserbest/claude-routines/actions/runs/32469671208)
