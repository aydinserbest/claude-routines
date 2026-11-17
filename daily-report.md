# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-17 09:17 UTC

## Ozet
- Toplam test: 9
- Gecen: 0
- Basarisiz: 9

## Sonuc

Tum testler basarisiz oldu. 3 farkli test, 3 farkli tarayicida (chromium, firefox, webkit) calistirildi - hepsi ayni hatayla durdu.

**Basarisiz testler:**
- `should load successfully` (chromium, firefox, webkit)
- `should have a heading` (chromium, firefox, webkit)
- `should have a login button` (chromium, firefox, webkit)

**Hata ozeti:**
Tarayici yuklenemedi. Playwright, test ortaminda (GitHub Actions runner) tarayici dosyalarini bulamiyor:
- Chromium: `chrome-headless-shell` bulunamadi
- Firefox: `firefox` calistirilabilir dosyasi bulunamadi
- WebKit: `pw_run.sh` bulunamadi

**Olasi sebep:**
Bu bir altyapi sorunu — testlerin kendisiyle ya da hedef siteyle ilgisi yok. GitHub Actions workflow'unda `npx playwright install` adimi eksik veya calismamis. Playwright surumu guncellendikten sonra tarayicilar yeniden indirilmesi gerekiyor ancak workflow bunu yapmadan testleri calistiriyor.

**Cozum onerisi:**
`.github/workflows` dosyasina `npx playwright install --with-deps` adimi eklenmeli.
