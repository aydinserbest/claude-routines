# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-04 09:36 UTC

## Ozet
- Toplam test: 9
- Gecen: 3
- Basarisiz: 6

## Sonuc

6 test basarisiz oldu. Hata detaylari:

### Basarisiz Testler

1. **should have a heading** (3 tarayici x1) — `h1` elementi sayfada bulunamadi (5000ms timeout)
2. **should have a login button** (3 tarayici x1) — `button#login` elementi sayfada bulunamadi (3000ms timeout)

### Hata Ozeti

Her iki test de "element(s) not found" hatasiyla kapaniyor. Selector beklenen DOM elemanini sayfada bulamiyor.

### Olasi Sebep Tahmini

**Selector degismis veya yanlis yazilmis olabilir.** `example.com` sayfasinda `h1` etiketleri normalde mevcut olabilir; ancak `button#login` gibi bir eleman bu sitede bulunmuyor. Testlerin farkli bir hedef site icin yazilmis olmasi ya da `example.com` uzerinde bu selectörlerin var olmamasi kuvvetle muhtemel.

Onerilen aksiyon:
- Testleri acip hangi URL ve selector kullanildıgina bakiniz
- `example.com` yerine dogru hedef siteye yonlendirin
- `button#login` yerine gercek sayfadaki login elementinin selectorunu kullanin
