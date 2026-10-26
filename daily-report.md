# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-26 09:10 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: chromium, firefox, webkit)
- Gecen: 3
- Basarisiz: 6

## Sonuc

**2 test senaryosu, 3 tarayicinin tamaminda basarisiz oldu.**

### Basarisiz Test 1: "should have a heading"
- **Hata:** `h1` etiketi sayfada bulunamadi (5000ms beklendi, element yok)
- **Selector:** `locator('h1')`
- **Tarayicilar:** chromium, firefox, webkit (her birinde 3 deneme yapildi, hepsi basarisiz)
- **Olasi sebep:** Sayfanin HTML yapisi degismis olabilir; daha once `<h1>` olan baslik etiketi farkli bir HTML etiketiyle degistirilmis ya da kaldirilmis olabilir (ornegin `<h2>` veya `<div>` olarak guncellenmis). Alternatif olarak, test ortami yanlis URL'e isaret ediyor olabilir.

### Basarisiz Test 2: "should have a login button"
- **Hata:** `button#login` elementi sayfada bulunamadi (3000ms beklendi, element yok)
- **Selector:** `locator('button#login')`
- **Tarayicilar:** chromium, firefox, webkit (her birinde 3 deneme yapildi, hepsi basarisiz)
- **Olasi sebep:** Login butonu ya kaldirılmış, ya farkli bir HTML etiketiyle degistirilmis (ornegin `<a>` veya `<input>`), ya da `id` niteligi degismis olabilir. Site tasariminda kimlik dogrulama arayuzu guncellendiginde bu tur selector hatalari gorulur.

### Genel Degerlendirme
Her iki hata da **element bulunamadi** seklinde; bu durum genellikle sitenin arayuz yapisinin degistigi anlamina gelir. Site down degil (sayfa yukleme testi `should load successfully` basarili gecti), sadece beklenen HTML elementler mevcut degil. **Selector'larin guncellenmesi gerekiyor.**

> **Not:** Test kodu yorumunda `// Bu test kasitli olarak basarisiz — rutinin yakalaması icin` ifadesi var; bu testlerin rutin dogrulamasi icin kasitli olarak basarisiz bicimde yazildigini gosteriyor. Ancak gercek bir projede bu hatalar ciddi degerlendirme gerektirir.
