# guslwl's Blog

My personal blog — built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Read it live at [guslwl.dev](https://guslwl.dev).

---

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/guslwl/blog.git
cd blog

# Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🛠️ Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm start` | Start the production server |
| `npm run lint` | Run ESLint |
| `npm run generate:rss` | Generate the RSS feed |

---

## 📁 Project Structure

```
blog/
├── public/          # Static assets
├── src/
│   ├── scripts/     # Utility scripts (e.g., RSS generation)
│   └── ...          # App source code
├── .env.example     # Example environment variables
├── next.config.js   # Next.js configuration
├── tailwind.config.ts
└── tsconfig.json
```

---

## 📡 RSS Feed

An RSS feed is available for the blog. To regenerate it locally, run:

```bash
npm run generate:rss
```

---

## 📄 License

This project is licensed under the [MIT License](./LICENSE).
