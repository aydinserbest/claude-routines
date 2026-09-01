# Gunluk Playwright Test Raporu
**Tarih:** 2026-09-01 09:10 UTC

## Ozet
- Toplam test: 9 (3 senaryo × 3 tarayici: Chromium, Firefox, WebKit)
- Gecen: 6
- Basarisiz: 3

## Sonuc

**Basarisiz Test: "should have a login button"** — 3 tarayicida da basarisiz

### Hata Aciklamasi
Test, ana sayfada `button#login` secicisiyle bir giris butonu ariyor. Ancak bu element sayfada bulunamadi. Hata, 3 farkli tarayicida da (Chromium, Firefox, WebKit) ayni sekilde tekrarlandi ve her birinde 2 yeniden deneme yapilmasina ragmen duzelmedi.

**Hata mesaji:** `locator('button#login') — element(s) not found` (3000ms zaman asimi)

### Olasi Sebepler
1. **Selector degismis olabilir:** Sitedeki giris butonu `button#login` yerine farkli bir HTML yapisina (ornegin `a.login`, `button[data-action="login"]`) tasınmis olabilir.
2. **Sayfa yapisi degismis olabilir:** Giris butonu artik ana sayfada gosterilmiyor olabilir (oturum acilmis kullanicilara farkli icerik sunuluyor gibi bir senaryo).
3. **Site guncellemesi:** example.com'da yapisal bir degisiklik yapilmis olabilir.

### Gecen Testler
- should load successfully (Chromium, Firefox, WebKit) ✅
- should have a heading (Chromium, Firefox, WebKit) ✅

### GitHub Actions Bilgisi
- Calistirma: [#33417302232](https://github.com/aydinserbest/claude-routines/actions/runs/33417302232)
- Commit: `186d62e` (report: 2026-08-31)
- Test suresi: ~42 saniye
