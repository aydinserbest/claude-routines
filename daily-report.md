# Günlük Playwright Test Raporu
**Tarih:** 2026-10-11 (UTC)

## Özet
- Toplam test: 9
- Geçen: 3
- Başarısız: 6

## Sonuç
**6 test başarısız oldu.** Aynı 2 senaryo 3 farklı tarayıcıda (Chromium, Firefox, WebKit) çalıştı.

### Başarısız Testler

**1. should have a heading** (3 tarayıcıda başarısız)
- Hata: `h1` elementi sayfada bulunamadı (5 saniye beklendi, 2 deneme yapıldı)
- Beklenen: Sayfada bir başlık (h1) görünür olmalı

**2. should have a login button** (3 tarayıcıda başarısız)
- Hata: `button#login` elementi sayfada bulunamadı (3 saniye beklendi, 2 deneme yapıldı)
- Beklenen: Login butonu görünür olmalı

### Olası Sebep Tahmini
Her iki test de farklı selector (`h1` ve `button#login`) için aynı hatayı veriyor ve tüm tarayıcılarda başarısız oldu. Bu durum şunlara işaret ediyor:

- **En olası:** Hedef site (example.com veya test edilen site) yapısını değiştirdi. `h1` elementi artık yok ya da farklı bir tag kullanılıyor; login butonu kaldırılmış, CSS sınıfı değişmiş ya da farklı bir element ID'sine taşınmış olabilir.
- **İkinci ihtimal:** Site geçici olarak erişilemez durumda (down) ve sayfa hiç yüklenmedi, dolayısıyla hiçbir element bulunamadı.
- **Düşük ihtimal:** Ağ sorunu — ancak üç farklı tarayıcı da etkilendiğinden bu ihtimal daha az olası.

### Önerilen Eylem
Test dosyalarındaki selector'ları güncel site yapısına göre güncelle: `h1` yerine gerçek başlık tag/sınıfını, `button#login` yerine mevcut login butonunun selector'ını kullan.
