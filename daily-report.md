# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-04 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test:** `Homepage > should have a login button`
**Etkilenen Tarayicilar:** Chromium, Firefox, WebKit (her 3 tarayici)

### Hata Ozeti
Test, `example.com` ana sayfasinda `button#login` CSS secicisiyle bir giris dugmesi aradi. Eleman 3 saniye boyunca beklendi ancak sayfada bulunamadi. Her tarayicide 2 yeniden deneme (retry) yapildi, hepsi basarisiz oldu.

```
Locator: locator('button#login')
Beklenen: gorunur olmasi
Hata: element(s) not found
```

### Olasi Sebep
**Selector degismis veya sayfa yanlislikla secilmis.** `example.com` yalnizca basit bir yer tutucu sayfadir; iceriginde hicbir zaman `button#login` elementi bulunmamistir. Bu test muhtemelen yanlis URL veya yanlis CSS secicisiyle yazilmistir.

**Onerim:** Testi gozden gecirerek ya dogru URL'yi (login butonu iceren bir sayfa) ya da dogru CSS secicisini guncellemeniz gerekiyor.

### Test Kosusu Bilgisi
- Test zamani: 2026-09-03 13:32 UTC
- GitHub Actions: [Run #33761602795](https://github.com/aydinserbest/claude-routines/actions/runs/33761602795)
- Commit: `9c95023`
