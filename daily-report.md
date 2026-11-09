# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-09 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 0
- Basarisiz: 9

## Sonuc

Tum testler basarisiz oldu. 3 farkli tarayicide (Chromium, Firefox, WebKit) calisan 3 test senaryosunun tamami ayni hatayla coktu.

### Hata Ozeti

**Hata:** Tarayici yuklu degil - `browserType.launch: Executable doesn't exist`

Her tarayici icin ayni hata:
- Chromium: `chromium_headless_shell-1223/chrome-headless-shell-linux64/chrome-headless-shell` bulunamadi
- Firefox: `firefox-1522/firefox/firefox` bulunamadi  
- WebKit: `webkit-2287/pw_run.sh` bulunamadi

Her test 2-3 kez yeniden denendi (retry: 2), ancak hepsi ayni hatayla basarisiz oldu.

### Basarisiz Testler
1. should load successfully (chromium, firefox, webkit)
2. should have a heading (chromium, firefox, webkit)
3. should have a login button (chromium, firefox, webkit)

### Olasi Sebep

**GitHub Actions workflow'unda `npx playwright install` adimi eksik.**

Playwright kurulduktan veya guncellendikten sonra tarayici ikili dosyalarinin ayrica indirilmesi gerekiyor. GitHub Actions runner'inda bu ikili dosyalar cachelenmemis ve workflow `npx playwright install` calistirmadan testleri baslatmis.

### Cozum Onerisi

`.github/workflows/` klasoründeki test workflow dosyasina su adim eklenmelidir:
```yaml
- name: Install Playwright Browsers
  run: npx playwright install --with-deps
```
Bu adim `npm install` ile `npx playwright test` arasina yerlestirilmelidir.
