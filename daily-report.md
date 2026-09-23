# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-23 09:27 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**1 test 3 tarayicide da basarisiz oldu.**

### Basarisiz Test: `should have a login button` (Homepage)

**Etkilenen tarayicilar:** Chromium, Firefox, Webkit

**Hata:** `locator('button#login')` elementi sayfada bulunamadi.

```
Locator: locator('button#login')
Expected: visible
Error: element(s) not found
```

Test, `button#login` CSS secicisiyle bir giris butonu aramaktadir. 3 denemeye (retry) ragmen hicbir tarayicide element bulunamadi.

### Olasi Sebep Tahmini

**En muhtemel neden: Selector degismis veya element hic mevcut degil.**

- example.com, basit bir yer tutucu (placeholder) sayfasidir ve gercek bir "Login" butonu icermez.
- `button#login` secicisi sayfadaki herhangi bir elemente eslesmemektedir.
- Diger 2 test (sayfa yuklenme ve baslik kontrolu) basariyla gectigi icin site erismekte sorun yok; sadece bu spesifik element eksik.
- Testin yanlis bir sayfayi veya yanlis bir selectoru hedefledigini dusunmek mantiklidir.

### Onerilen Aksiyon

Test dosyasindaki `button#login` selectoru gozden gecirilmeli ve example.com'da gercekten var olan bir elemente guncellenmelidir.
