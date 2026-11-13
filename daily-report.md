# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-13 09:10 UTC

## Ozet
- Toplam test: 9
- Gecen: 0
- Basarisiz: 9

## Sonuc

Tum testler basarisiz oldu. 3 test senaryosu (should load successfully, should have a heading, should have a login button) 3 tarayicida da (Chromium, Firefox, WebKit) calismadi.

### Hata Mesaji
Tum hatalarda ayni sorun: tarayici calistirilabilir dosyasi bulunamadi.

```
Error: browserType.launch: Executable doesn't exist at
/home/runner/.cache/ms-playwright/chromium_headless_shell-1223/...
```

### Olasi Sebep
**GitHub Actions workflow'unda `npx playwright install` adimi eksik.** Playwright 1.60.0 surum guncellenmesi sonrasi yeni tarayici ikili dosyalari indirilmemis. Testler calistirma oncesinde `npx playwright install --with-deps` komutu calistirilmali.

Ozet: Site down degil, selector sorunu yok. Altyapi/CI yapilandirma sorunu. Workflow dosyasina `npx playwright install` eklenmesi gerekiyor.

### Etkilenen Testler
- Homepage > should load successfully (Chromium, Firefox, WebKit)
- Homepage > should have a heading (Chromium, Firefox, WebKit)
- Homepage > should have a login button (Chromium, Firefox, WebKit)

### Duzeltme Onerisi
`.github/workflows/` klasoründeki test workflow dosyasına `npx playwright install --with-deps` adimi eklenmelidir:
```yaml
- name: Install Playwright browsers
  run: npx playwright install --with-deps
```
