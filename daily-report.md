# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-15 09:14 UTC

## Ozet
- Toplam test: 9
- Gecen: 0
- Basarisiz: 9

## Sonuc

Tum testler basarisiz oldu. 3 farkli tarayicide (Chromium, Firefox, WebKit) calistirilan 3 test senaryosunun tamami ayni hatayla sonuclandi.

**Hata:** Tarayici yuklu degil — Playwright browser yuklemeleri eksik.

```
Error: browserType.launch: Executable doesn't exist at
/home/runner/.cache/ms-playwright/chromium_headless_shell-1223/...
```

**Olasi Sebep:** GitHub Actions workflow dosyasinda `npx playwright install` adimi eksik. Playwright surumu guncellenmis olabilir ve yeni browser binary'leri CI ortaminda indirilmemis. Bu bir site sorunu degil, CI yapilandirma sorunudur.

**Onerilen Cozum:** `.github/workflows` dosyasindaki workflow'a asagidaki adimi ekle:

```yaml
- name: Install Playwright Browsers
  run: npx playwright install --with-deps
```

Bu adim `npm install`'dan sonra, `npx playwright test`'ten once olmalidir.

## Basarisiz Test Listesi
| Test | Tarayici | Hata |
|------|----------|------|
| should load successfully | chromium | Tarayici binary bulunamadi |
| should have a heading | chromium | Tarayici binary bulunamadi |
| should have a login button | chromium | Tarayici binary bulunamadi |
| should load successfully | firefox | Tarayici binary bulunamadi |
| should have a heading | firefox | Tarayici binary bulunamadi |
| should have a login button | firefox | Tarayici binary bulunamadi |
| should load successfully | webkit | Tarayici binary bulunamadi |
| should have a heading | webkit | Tarayici binary bulunamadi |
| should have a login button | webkit | Tarayici binary bulunamadi |
