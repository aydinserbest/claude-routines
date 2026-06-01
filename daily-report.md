# Günlük Playwright Test Raporu
**Tarih:** 2026-06-01 11:50 UTC

## Özet
- Toplam test: 9
- Geçen: 2
- Başarısız: 7

## Sonuç

Testlerin büyük çoğunluğu başarısız oldu. İki farklı hata türü tespit edildi:

---

### Hata 1 — Chromium: "should have a login button" ❌

**Ne oldu:** `button#login` seçicisiyle eşleşen bir element sayfada bulunamadı. 3 deneme (retry) sonunda da aynı hata tekrarlandı.

**Olası sebep:** Test, example.com ana sayfasında `<button id="login">` elementinin varlığını bekliyor. Ancak bu element sayfada mevcut değil. Büyük ihtimalle selector yanlış yazılmış ya da site bu butonu hiçbir zaman sunmamıştır. Site down değil (diğer Chromium testleri geçti), dolayısıyla sorun **selector ile test kodunda**.

---

### Hata 2 — Firefox ve WebKit: Tüm testler ❌ (6 test)

**Ne oldu:** Firefox ve WebKit tarayıcı yürütülebilir dosyaları CI ortamında bulunamadı.
- Firefox: `/home/runner/.cache/ms-playwright/firefox-1522/firefox/firefox` bulunamadı
- WebKit: `/home/runner/.cache/ms-playwright/webkit-2287/pw_run.sh` bulunamadı

**Olası sebep:** GitHub Actions workflow'unda `npx playwright install` adımı eksik veya atlanmış. Chromium'un çalışması, Chromium'un önceden kurulu (ör. `--with-deps` ile) olduğunu gösteriyor; Firefox ve WebKit ise kurulmamış. Düzeltmek için workflow'a `npx playwright install --with-deps` adımı eklenmeli.

---

### Geçen testler ✅
- Chromium — "should load successfully"
- Chromium — "should have a heading"
