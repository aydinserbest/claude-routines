# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-23 09:10 UTC

## Ozet
- Toplam test: 9 (3 test × 3 tarayıcı: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

Iki test tum tarayicilarda basarisiz oldu:

### 1. "should have a heading" — Basarisiz (chromium, firefox, webkit)
- **Hata:** `locator('h1')` elementi 5 saniye icinde sayfada bulunamadi.
- **Olasi sebep:** example.com anasayfasinda `<h1>` etiketi beklenen sekilde render edilmiyor ya da test bu elementi kasitli olarak arayarak basarisiz olmak uzere yazilmis (test kodunda yorum: "kasitli olarak basarisiz"). Gercek bir siteye uygulandiginda `h1` selector'unun sayfadaki HTML yapisiyla eslesmedigini gosterir.

### 2. "should have a login button" — Basarisiz (chromium, firefox, webkit)
- **Hata:** `locator('button#login')` elementi 3 saniye icinde sayfada bulunamadi.
- **Olasi sebep:** example.com sayfasinda `id="login"` olan bir buton bulunmuyor. Bu selector muhtemelen test amacli konulmus; gercek bir uygulamada login butonunun selector'u degismis olabilir ya da element DOM'a henuz yuklenmemis olabilir.

### Gecen Test
- "should load successfully" — Tum tarayicilarda basariyla gectı. Sayfa erisimi normal, ag sorunu yok.

**GitHub Actions Calistirma:** [#39755366859](https://github.com/aydinserbest/claude-routines/actions/runs/39755366859)
**Commit:** `1232593`
