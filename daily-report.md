# Gunluk Playwright Test Raporu
**Tarih:** 2026-06-03 10:49 UTC (GitHub Actions calistirma zamani)

## Ozet
- Toplam test: 9 (3 senaryo x 3 tarayici: Chromium, Firefox, WebKit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**3 test basarisiz oldu.**

### Basarisiz Testler

**Homepage > should have a login button** — Chromium, Firefox ve WebKit tarayicilarinin hepsinde basarisiz.

- **Hata:** `button#login` elementi sayfada bulunamadi.
- **Beklenen:** Login butonu gorunur olmali (`toBeVisible`)
- **Gerceklesen:** Element yok (`element(s) not found`), 3000ms zaman asimina ugradi.
- **Deneme sayisi:** Her tarayicida 3 deneme yapildi, hepsi basarisiz.

### Olasi Sebep Tahmini

**Selector degismis olmasi kuvvetle muhtemel.** Diger iki test (`should load successfully`, `should have a heading`) tum tarayicilarda basariyla gecti — bu nedenle site erisilebilir durumda, ag sorunu veya site down degil. Yalnizca `button#login` elementinin bulunamamas, sitenin anasayfasinda bir guncelleme yapildigini ve login butonunun HTML yapisinin degistigini gosteriyor. `button#login` ID'li eleman artik sayfada yok; baska bir ID/class ile yeniden adlandirilmis ya da `<a>` etiketine donusturulmus olabilir.

### Onerilen Aksiyon

`homepage.spec.js` satir 18'deki `button#login` selektorunu guncel HTML yapisina gore guncellenmeli.

### Gecen Testler
| Senaryo | Tarayici | Durum |
|---------|----------|-------|
| should load successfully | Chromium | GECTI |
| should load successfully | Firefox  | GECTI |
| should load successfully | WebKit   | GECTI |
| should have a heading    | Chromium | GECTI |
| should have a heading    | Firefox  | GECTI |
| should have a heading    | WebKit   | GECTI |
