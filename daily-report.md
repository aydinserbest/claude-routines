# Gunluk Playwright Test Raporu
**Tarih:** 2026-10-06 (UTC)

## Ozet
- Toplam test: 9
- Gecen: 3
- Basarisiz: 6

## Basarisiz Testler

| Test | Hata |
|------|------|
| Homepage > should have a heading | `h1` elementi bulunamadi (3 tarayicida) |
| Homepage > should have a login button | `button#login` elementi bulunamadi (3 tarayicida) |

## Sonuc

**6 test basarisiz.** Iki farkli test chromium, firefox ve webkit tarayicilarinin ucunde de ayni sekilde basarisiz oluyor:

1. **`should have a heading`** — `locator('h1')` ile aranan baslik elementi sayfada yok. 5000ms beklenmis, element hic goruntulenmemis.
2. **`should have a login button`** — `locator('button#login')` ile aranan giris butonu sayfada yok. 3000ms beklenmis, element hic goruntulenmemis.

### Olasi Sebepler
- **Sayfa yapisi degismis olabilir:** `should load successfully` testleri 3 tarayicida da gectigi icin site erisilebilir durumda. Ancak `h1` ve `button#login` elementleri artik sayfada bulunmuyor. Buyuk ihtimalle HTML yapisi degismis ya da bu elementlerin selector'leri guncellenmis olmali.
- **Testte kullanilan selector'ler eskimis:** Sitenin yeni surumunde `h1` yerine farkli bir tag/class kullaniliyor olabilir, login butonu da farkli bir ID/class almis olabilir.

### Onerilen Aksiyon
Test dosyalarindaki selector'lerin guncellenmesi gerekiyor. Oncelikle example.com sayfasinin HTML yapisi incelenmeli ve `h1` ile login butonunun guncel selector'leri tespit edilmeli.
