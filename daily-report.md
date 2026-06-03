# Gunluk Playwright Test Raporu
**Tarih:** 2026-06-02T10:47:14Z

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**3 test basarisiz oldu.**

### Basarisiz Testler

**Homepage > should have a login button** (3 deneme, hepsi basarisiz)

- **Hata:** `button#login` elementi sayfada bulunamadi.
- **Beklenen:** Login butonu gorunur olmali (`toBeVisible`)
- **Gerceklesen:** Element yok (`element(s) not found`), 3000ms zaman asimina ugradi.

### Olasi Sebep Tahmini

Selector degismis olmasi kuvvetle muhtemel. `button#login` ID'li eleman artik sayfada bulunmuyor. 3 farkli denemede ayni hatanin tekrarlanmasi, gecici bir ag sorunundan ziyade HTML yapisinin degismis olduguna isaret ediyor. Login butonu farkli bir ID/class ile yeniden adlandirilmis ya da `<a>` etiketine donusturulmus olabilir. Sayfanin kaynak kodu incelenmeli ve `homepage.spec.js` dosyasindaki selector guncellenmeli.

### Gecen Testler
| Senaryo | Durum |
|---------|-------|
| should load successfully | GECTI |
| should have a heading    | GECTI |
