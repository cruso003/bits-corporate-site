# BITS Corporate Website

Modern corporate website for Building Innovative Technical Solutions, Limited built with Next.js 15 and Tailwind CSS v4.

## 🚀 Quick Start
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure
```
├── app/
│   ├── (marketing)/        # Marketing pages
│   │   ├── page.tsx        # Homepage
│   │   ├── about/
│   │   ├── products/
│   │   ├── solutions/
│   │   ├── portfolio/
│   │   ├── partners/
│   │   ├── technologies/
│   │   ├── blog/
│   │   ├── careers/
│   │   └── contact/
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── ui/                 # UI components
│   ├── layout/             # Layout components
│   └── sections/           # Homepage sections
├── lib/
│   ├── utils.ts
│   └── constants.ts
└── public/
```

## 🎨 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **TypeScript:** Full type safety

## 📝 Content Management

### Adding Products

Edit `lib/constants.ts` to add new products, stats, or services.

### Adding Blog Posts

Create new files in `app/(marketing)/blog/[slug]/page.tsx`.

### Updating Company Info

Edit `lib/constants.ts` for company details, address, and contact info.

## 🔧 Configuration

### Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=https://bits-innovate.com
```

### Tailwind Colors

Customize colors in `app/globals.css` under the `@theme` directive.

## 📦 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📄 License

© 2026 Building Innovative Technical Solutions, Limited. All rights reserved.
```

