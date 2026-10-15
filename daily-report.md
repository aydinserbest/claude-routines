# Günlük Playwright Test Raporu
**Tarih:** 2026-10-15 09:10 UTC

## Özet
- Toplam test: 9
- Geçen: 3
- Başarısız: 6

## Sonuç

**2 farklı test başarısız oldu** (her biri 3 tarayıcıda tekrarlandı):

### 1. `should have a heading` — H1 elementi bulunamadı
- **Seçici:** `h1`
- **Hata:** Element sayfada görünür değil (5000ms zaman aşımı)
- **Olası sebep:** Sitenin HTML yapısı değişmiş olabilir (`h1` etiketi kaldırılmış ya da farklı bir etiketle değiştirilmiş). Alternatif olarak site geçici olarak erişilemeyor olabilir.

### 2. `should have a login button` — Giriş butonu bulunamadı
- **Seçici:** `button#login`
- **Hata:** Element sayfada görünür değil (3000ms zaman aşımı)
- **Olası sebep:** Giriş butonunun ID'si değişmiş (`#login` yerine farklı bir ID kullanılıyor olabilir) ya da buton farklı bir bileşenle değiştirilmiş. Site tasarımı güncellenmiş olabilir.

### Genel Değerlendirme
Her iki test de tüm tarayıcılarda aynı şekilde başarısız oldu. Bu durum **ağ sorunundan ziyade site içeriğinin değiştiğine** işaret ediyor. example.com adresinin HTML yapısı güncellenmiş ya da testlerin beklediği elementler artık sayfada bulunmuyor olabilir.

**Önerilen aksiyon:** Testlerdeki seçicileri (`h1`, `button#login`) güncel site yapısına göre güncellemeyi değerlendirin.
