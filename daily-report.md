# Gunluk Playwright Test Raporu
**Tarih:** 2026-11-14 09:14 UTC

## Ozet
- Toplam test: 9
- Gecen: 0
- Basarisiz: 9

## Sonuc

Tum testler basarisiz oldu. 3 farkli tarayicide (Chromium, Firefox, WebKit) ayni hata tekrarlandi.

**Hata:** Playwright tarayici yuklu degil — calistirilamadi.

**Hata mesaji (Turkce):**  
Playwright'in beklettigi tarayici dosyalari GitHub Actions ortaminda bulunamadi.  
Chromium icin: `chrome-headless-shell` yok  
Firefox icin: `firefox` yok  
WebKit icin: `pw_run.sh` yok

**Olasi sebep:**  
GitHub Actions workflow dosyasinda `npx playwright install` adimi eksik veya atlanmis. Playwright yeni yuklendikten/guncellendikten sonra tarayici binary'lerini indirmek icin bu komutun calistirilmasi gerekiyor. Workflow'a `npx playwright install --with-deps` eklenmesi sorunu cozecektir.

**Onerilen duzeltme:**  
`.github/workflows/` altindaki workflow dosyasina su satiri ekleyin:
```yaml
- name: Install Playwright browsers
  run: npx playwright install --with-deps
```
