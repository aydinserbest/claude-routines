# Gunluk Playwright Test Raporu
**Tarih:** 2026-06-02 09:10 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: chromium, firefox, webkit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**3 test basarisiz oldu.**

### Basarisiz Testler

**Homepage > should have a login button** (chromium, firefox, webkit — her tarayicida 2 yeniden deneme, hepsi basarisiz)

- **Hata:** `button#login` elementi sayfada bulunamadi.
- **Beklenen:** Login butonu gorunur olmali (`toBeVisible`)
- **Gerceklesen:** Element yok (`element(s) not found`), 3000ms zaman asimina ugradi.

### Olasi Sebep Tahmini

Selector degismis olmasi cok muhtemel. `button#login` ID'li eleman artik sayfada bulunmuyor. Uc farkli tarayicide ve toplam 9 denemede ayni hatanin tekrarlanmasi, gecici bir ag sorunundan ziyade HTML yapisinin degismis olduguna isaret ediyor. Login butonu farkli bir ID/class ile yeniden adlandirilmis olabilir. Sayfanin kaynak kodunu manuel inceleyip `homepage.spec.js` dosyasindaki selector'u guncellemek gerekebilir.

### Gecen Testler
| Senaryo | Chromium | Firefox | WebKit |
|---------|----------|---------|--------|
| should load successfully | GECTI | GECTI | GECTI |
| should have a heading    | GECTI | GECTI | GECTI |
