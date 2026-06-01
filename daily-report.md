# Gunluk Playwright Test Raporu
**Tarih:** 2026-06-01 12:18 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**3 test basarisiz oldu.**

### Basarisiz Testler

**Homepage > should have a login button** (3 tarayici × 2 yeniden deneme, hepsi basarisiz)

- **Hata:** `button#login` elementi sayfada bulunamadi.
- **Beklenen:** Login butonu gorunur olmali (`toBeVisible`)
- **Gerceklesen:** Element yok (`element(s) not found`), 3000ms zaman asimina ugradi.

### Olasi Sebep Tahmini

Selector degismis olmasi cok muhtemel. `button#login` ID'li eleman artik `example.com` sayfasinda bulunmuyor. Uc farkli tarayicide (chromium, firefox, webkit) ve toplam 9 denemede ayni hatanin tekrarlanmasi, gecici bir ag sorunundan ziyade HTML yapisinin degismis olduguna isaret ediyor. Login butonu farkli bir ID/class ile yeniden adlandirilmis olabilir. Sayfanin kaynak kodunu manuel inceleyip test dosyasindaki selector'u guncellemek gerekebilir.

### Gecen Testler
| Senaryo | Chromium | Firefox | WebKit |
|---------|----------|---------|--------|
| should load successfully | GECTI | GECTI | GECTI |
| should have a heading    | GECTI | GECTI | GECTI |
