# Peter Hille — Portfolio Site

Personal portfolio and resume site built with Next.js 14, TypeScript, and Tailwind CSS.
Hosted on a Mac Mini M4 via PM2 + Caddy, mirroring the little-pog-site setup.

---

## Local Development

```bash
npm install
npm run dev
# → http://localhost:3000
```

---

## Production Setup (Mac Mini)

### 1. Clone the repo

```bash
git clone https://github.com/prhille13/peter-hille-portfolio
cd peter-hille-portfolio
npm install
npm run build
```

### 2. Start with PM2

```bash
pm2 start ecosystem.config.js
pm2 save
```

This runs the app on **port 3001** (little-pog uses 3000).

### 3. Add to Caddyfile

```
yourdomain.com {
    reverse_proxy localhost:3001
}
```

Then reload Caddy:
```bash
caddy reload --config /path/to/Caddyfile
```

### 4. Make deploy script executable

```bash
chmod +x deploy.sh
```

Wire `deploy.sh` into your existing GitHub webhook listener — same approach as little-pog.

---

## Customization Checklist

- [ ] Update email in `components/Contact.tsx`
- [ ] Update LinkedIn URL in `components/Contact.tsx`
- [ ] Adjust role dates/descriptions in `components/Experience.tsx`
- [ ] Update bio copy in `components/About.tsx`
- [ ] Update metadata (title, description) in `app/layout.tsx`
- [ ] Add your domain to `Caddyfile` and `ecosystem.config.js`

---

## Project Structure

```
peter-hille-portfolio/
├── app/
│   ├── layout.tsx       # Root layout, fonts, metadata
│   ├── page.tsx         # Main page — assembles all sections
│   └── globals.css      # Tailwind base + custom animations
├── components/
│   ├── Nav.tsx          # Fixed nav with mobile hamburger
│   ├── Hero.tsx         # Full-height hero section
│   ├── About.tsx        # Bio + stats
│   ├── Experience.tsx   # Work history
│   ├── Skills.tsx       # Skills grid
│   └── Contact.tsx      # Contact links
├── ecosystem.config.js  # PM2 config (port 3001)
├── deploy.sh            # Webhook deploy script
├── tailwind.config.ts
└── next.config.js
```
# peter-hille-site
