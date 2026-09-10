# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-10 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 6
- Basarisiz: 3

## Sonuc

**3 test basarisiz oldu.**

### Basarisiz Test: `should have a login button` (Homepage)

**Hata:** `button#login` selector'u ile etiketlenen "Login" butonu sayfada bulunamadi.

**Olasi Sebep:** Selector degismis olmasi en muhtemel neden. Site anasayfasindaki login butonu ya:
- ID'si degistirilmis (`#login` yerine baska bir ID veya class kullaniliyor olabilir),
- Farkli bir HTML elemani turune gecilmis olabilir (`<a>` veya `<div>` gibi),
- Buton dinamik olarak yukleniyor ve 3 saniye timeout yetmiyor olabilir.

Test 2 yeniden deneme (retry) ile 3 kez calistirilmis ve hepsi basarisiz olmustur. Bu durumun gecici bir ag sorunundan degil, kalici bir selector uyumsuzlugundan kaynaklandigina isaret eder.

**Onerilen Aksiyon:** Canli sitede `button#login` selector'unun varligini tarayici gelistirici araciyla kontrol edin ve testi guncelleyin.
