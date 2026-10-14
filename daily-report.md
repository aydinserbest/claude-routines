# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-14 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 3
- Basarisiz: 6

## Sonuc

**6 basarisiz test tespit edildi.**

### Basarisiz Testler

**1. Homepage > should have a heading**
- Selector: `h1`
- Hata: `h1` elementi sayfada bulunamadi (5000ms beklendi, bulunamadi)
- 3 farkli tarayici/proje konfigurasyonunda basarisiz (her birinde 3 deneme yapildi)

**2. Homepage > should have a login button**
- Selector: `button#login`
- Hata: `button#login` elementi sayfada bulunamadi (3000ms beklendi, bulunamadi)
- 3 farkli tarayici/proje konfigurasyonunda basarisiz (her birinde 3 deneme yapildi)

### Olasi Sebep Tahmini

Her iki test de farkli selector'lar arasa da ayni sekilde "element bulunamadi" hatasi veriyor. Bu durum su ihtimallere isaret ediyor:

- **En olasi:** Site yapisi degismis. `button#login` id'li bir buton standart `example.com` sayfasinda bulunmuyor; bu selector muhtemelen gercek bir login butonu icin tasarlanmis ancak test edilen site bunu sunmuyor.
- **Diger ihtimal:** Site geciici olarak down veya farkli bir sayfa donduruyor (h1 elementi bile bulunamadigi icin).
- **Dusuk ihtimal:** Ag sorunu - ancak retries (3 deneme) boyunca ayni hata devam etmis.

**Oneri:** Test dosyalarindaki selector'larin test edilen sitenin mevcut yapisiyla uyumlu olup olmadigi kontrol edilmeli.
