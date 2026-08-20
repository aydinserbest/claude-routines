# Gunluk Playwright Test Raporu
**Tarih:** 2026-08-20 09:46 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**3 test basarisiz oldu** — hepsi ayni test senaryosu, 3 farkli tarayicida (Chromium, Firefox, WebKit).

### Basarisiz Test: "should have a login button"

**Hata:** `locator('button#login')` seçicisiyle eşleşen element sayfada bulunamadi.
Test, ana sayfada `<button id="login">` etiketli bir giris butonu bekliyor, ancak bu element mevcut degil.
2 yeniden denemeye ragmen hata devam etti (yani gecici bir ag sorunu degil).

**Olasi Sebep:** Sayfanin HTML yapisi degismis olmali. Site erisilebilir durumda (diger testler basariyla gecti), bu yuzden site down degil. Buyuk ihtimalle:
- Login butonunun HTML etiketi veya ID'si degistirilmis (`<a>` etiketi veya farkli bir ID kullaniliyor olabilir)
- Veya giris butonu artik farkli bir URL altinda bulunuyor

**Onerim:** `tests/homepage.spec.js` dosyasindaki `button#login` seçicisini guncelle.
