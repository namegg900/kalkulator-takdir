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

## Kenapa bisa `404: NOT_FOUND` di Vercel?

### Root cause (yang terjadi)
- Request kamu menuju resource/deployment yang tidak ditemukan oleh edge Vercel.
- Ini bisa terjadi walaupun kodenya benar, kalau URL deployment salah atau deployment lama sudah tidak aktif.

### Mental model yang benar
- Vercel melayani file dari **deployment tertentu**.
- Kalau deployment atau path tidak ada, Vercel mengembalikan `NOT_FOUND` untuk mencegah request nyasar ke resource yang tidak valid.

### Warning signs
- URL yang dibuka bukan domain deployment aktif terbaru.
- Di dashboard, **Root Directory** salah (bukan folder repo yang berisi `index.html`).
- Route bersih seperti `/tentang` belum dipetakan ke file `.html`.

### Alternatif pendekatan
1. **Multi-page statis** (dipakai sekarang): pakai `rewrites` `/tentang -> /pages/tentang.html`.
2. **Single-page app**: semua path di-rewrite ke `index.html` lalu routing ditangani JS framework.
3. **Tanpa clean URL**: akses langsung `/pages/tentang.html` (paling sederhana, tapi URL kurang rapi).
