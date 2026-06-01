# Playwright Demo Projesi

Bu proje example.com üzerinde basit Playwright testleri içerir.

## Test Çalıştırma
```bash
npx playwright test
```

## Rutin Görevi
Her sabah testleri çalıştır. Eğer başarısız test varsa:
1. Hangi testlerin neden başarısız olduğunu analiz et
2. Hata mesajlarını sade Türkçe özetle
3. Varsa olası sebebi tahmin et (selector değişmiş mi, site down mı, vb.)
4. Özet raporu `daily-report.md` olarak kaydet

Başarısız test yoksa kısa bir "Tüm testler geçti ✅" notu bırak.
