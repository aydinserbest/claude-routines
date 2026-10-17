# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-17 09:22 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

**2 test senaryosu 3 tarayicide da basarisiz oldu:**

### 1. "should have a heading" (Baslik testi)
- **Hata:** `locator('h1')` elementi bulunamadi
- **Etkilenen tarayicilar:** Chromium, Firefox, Webkit
- **Olasi sebep:** Sayfada `<h1>` etiketi yok ya da test kasten basarisiz yazilmis (test dosyasinda "Bu test kasitli olarak basarisiz" yorumu mevcut)

### 2. "should have a login button" (Giris butonu testi)
- **Hata:** `locator('button#login')` elementi bulunamadi
- **Etkilenen tarayicilar:** Chromium, Firefox, Webkit
- **Olasi sebep:** `button#login` selector artik gecerli degil — buton kaldirilmis, id'si degismis ya da yapi degismis olabilir. Test dosyasinda kasitli basarisizlik yorumu da mevcut.

### Basarili Testler
- "should load successfully" — Chromium, Firefox, Webkit: **GECTI** ✅

## Not
Test dosyasinda (homepage.spec.js satir 15) "Bu test kasitli olarak basarisiz — rutinin yakalaması icin" yorumu bulunmaktadir. Bu basarisizliklar rutin tarafından yakalanmasi icin bilerek eklenmis olabilir.

**GitHub Actions Run:** https://github.com/aydinserbest/claude-routines/actions/runs/39020780710
