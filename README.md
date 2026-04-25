# Kalkulator Takdir

## Deploy ke Vercel (static site)

Project ini adalah **website statis** (tanpa backend), jadi konfigurasi Vercel yang aman:

1. **Framework Preset**: `Other`
2. **Build Command**: kosongkan
3. **Output Directory**: kosongkan (root project)
4. Pastikan file `vercel.json` ikut terbaca saat deploy.

Jika muncul error seperti:

`404: NOT_FOUND Code: NOT_FOUND ID: sin1:...`

biasanya salah satu penyebab ini:

- URL deployment yang dibuka bukan URL deployment aktif terbaru.
- Project di Vercel menunjuk ke root folder yang salah.
- Route clean URL (mis. `/tentang`) belum dipetakan ke file `.html`.

Setelah deploy sukses, coba akses:

- `/`
- `/tentang`
- `/arsip`
