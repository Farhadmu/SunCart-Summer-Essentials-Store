# SunCart – Summer Essentials Store


A modern summer e-commerce Single Page Application (SPA) where users can
explore and purchase seasonal products — sunglasses, breezy outfits,
sunscreen, beach accessories, swimwear and more. Built with React 18, Vite,
Firebase Authentication, Tailwind CSS and DaisyUI.

## 🌐 Live URL

> https://your-app.vercel.app 

---

## ✨ Key Features

- 🛍️ **16 curated summer products** across 9 categories: sunglasses, outfits,
  skincare, beach gear, swimwear, footwear, hydration, accessories, tech
- 🎠 **Animated hero slider** using Swiper.js
- 🔍 **Search, category filter & price sort** on the Products page
- 🔐 **Firebase Authentication** — Email/Password + Google Sign-In
- 🔑 **Forgot password** flow with email reset
- 👤 **My Profile & Update Profile** — live name/photo preview
- 🔒 **Protected routes** — Product Details requires login, redirects back after sign-in
- 📱 **Fully responsive** — mobile, tablet, desktop
- 🍞 **Toast notifications** via `react-hot-toast`
- ✨ **Animations** with `animate.css` and Tailwind CSS custom keyframes
- 🔏 **Privacy Policy** and **Terms of Service** pages
- 🚫 **404 Not Found** page

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite 5 |
| Routing | react-router-dom v6 (createBrowserRouter) |
| Styling | Tailwind CSS 3 + DaisyUI 4 (custom `suncart` theme) |
| Auth | Firebase 10 (Email/Password + Google) |
| Slider | Swiper 11 |
| Notifications | react-hot-toast |
| Icons | react-icons (Feather + Font Awesome) |
| Animations | animate.css + Tailwind keyframes |

---

## 📦 NPM Packages Used

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.26.0",
  "firebase": "^10.13.0",
  "tailwindcss": "^3.4.17",
  "daisyui": "^4.12.14",
  "swiper": "^11.1.14",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.3.0",
  "animate.css": "^4.1.1"
}
```

---

## 🚀 Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/Farhadmu/SunCart-Summer-Essentials-Store
cd suncart

# 2. Install dependencies
npm install

# 3. Set up environment variables (see below)
cp .env.example .env.local

# 4. Start the development server
npm run dev
```

Open <http://localhost:5173> in your browser.

---

## 🔐 Environment Variables

Create a `.env.local` file in the project root with your Firebase web app
config. **Never commit this file to Git.**

```env
{
  apiKey: "AIzaSyCy5t6Nh0z580WMyfKa81dpyRCZ-UB86Nk",
  authDomain: "[suncart-6bc91.firebaseapp.com](http://suncart-6bc91.firebaseapp.com)",
  projectId: "suncart-6bc91",
  storageBucket: "[suncart-6bc91.firebasestorage.app](http://suncart-6bc91.firebasestorage.app)",
  messagingSenderId: "766746348436",
  appId: "1:766746348436:web:b1d4415fc4a103df825d81",
  measurementId: "G-SVBVJ56MR9"
}

---

## 🔥 Firebase Console Setup

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a project.
2. **Enable sign-in methods:**
   Authentication → Sign-in method → enable **Email/Password** and **Google**.
3. **Authorize your domain:**
   Authentication → Settings → Authorized domains → add `localhost` and your
   live URL (e.g. `your-app.vercel.app`).
4. Copy the web app config into `.env.local`.

---

## 🌍 Deployment

### Vercel (Recommended)

1. Push your code to GitHub.
2. Import the repo on [vercel.com](https://vercel.com).
3. Add all `VITE_FIREBASE_*` environment variables in the Vercel dashboard.
4. The included `vercel.json` handles SPA routing so reloads never 404.

### Netlify

1. Push your code to GitHub.
2. Import the repo on [netlify.com](https://netlify.com).
3. Add all `VITE_FIREBASE_*` environment variables in Site Settings → Environment.
4. The included `public/_redirects` handles SPA routing.

---

## 📁 Folder Structure

```
suncart/
├── public/
│   ├── favicon.svg
│   └── _redirects          ← Netlify SPA routing fix
├── src/
│   ├── components/         ← Navbar, Footer, HeroSlider, ProductCard,
│   │                          Loading, PrivateRoute
│   ├── context/            ← AuthContext (Firebase auth state)
│   ├── data/               ← products.json (16 items)
│   ├── firebase/           ← firebase.config.js
│   ├── pages/              ← Home, Products, ProductDetails, Login,
│   │                          Register, MyProfile, UpdateProfile,
│   │                          Privacy, Terms, NotFound
│   ├── index.css
│   ├── main.jsx
│   └── router.jsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── vercel.json             ← Vercel SPA routing fix
```

---

## 🏗️ Build for Production

```bash
npm run build
npm run preview
```

---

## 👨‍💻 Author

**md farhad**
- 📧 Email: mi0223937@gmail.com
- 📞 Phone: +880 1945-321285
- 📍 Location: Comilla, Bangladesh

- Privacy Policy + Terms of Service pages
- Fully responsive (mobile, tablet, desktop)
- 404 / Not Found page
- Toast notifications (`react-hot-toast`)
- Animations powered by `animate.css` and Tailwind keyframes

## Tech Stack

- **React 18** + **Vite 5**
- **react-router-dom v6** (createBrowserRouter)
- **Tailwind CSS 3** + **DaisyUI 4** (custom `suncart` theme)
- **Firebase 10** (Authentication)
- **swiper** (hero slider)
- **react-hot-toast** (notifications)
- **react-icons** (Feather + Font Awesome icons)
- **animate.css** (entrance animations)

## NPM Packages Used

```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-router-dom": "^6.27.0",
  "firebase": "^10.14.0",
  "tailwindcss": "^3.4.13",
  "daisyui": "^4.12.10",
  "swiper": "^11.1.14",
  "react-hot-toast": "^2.4.1",
  "react-icons": "^5.3.0",
  "animate.css": "^4.1.1"
}
```

## Local Setup

```bash
npm install
npm run dev
```

Open <http://localhost:5173> in the browser.

## Environment Variables

Create a `.env.local` file in the project root with your Firebase web app
config:

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=000000000000
VITE_FIREBASE_APP_ID=1:000000000000:web:abcdef
```

## Firebase Console Setup

1. **Enable sign-in methods**
   Authentication → Sign-in method → enable **Email/Password** and
   **Google**.

2. **Authorize your domain**
   Authentication → Settings → Authorized domains → add your local + live
   URL (e.g. `localhost`, `your-app.vercel.app`).

## Folder Structure

```
src/
├── components/    Layout, Navbar, Footer, HeroSlider, ProductCard, Loading, PrivateRoute
├── context/       AuthContext (Firebase auth)
├── data/          products.json (16 items)
├── firebase/      firebase.config.js
├── pages/         Home, Products, ProductDetails, Login, Register,
│                  MyProfile, UpdateProfile, Privacy, Terms, NotFound
├── index.css
├── main.jsx
└── router.jsx
```

## Build for Production

```bash
npm run build
npm run preview
```

## Author

**Md Imran**
- Email: mi0223937@gmail.com
- Phone: +880 1945-321285
- Location: Comilla, Bangladesh
"feat(product-details): create ProductDetails page protected by login with redirect-back flow"
"feat(auth-ui): build Login and Register pages with form validation and toast notifications"
"init: scaffold Vite + React 18 project with Tailwind CSS and DaisyUI"
 "feat(auth): configure Firebase with env variables for API key security"
 "feat(auth): implement AuthContext with email/password, Google sign-in and forgot password"
  "feat(routing): set up createBrowserRouter with protected PrivateRoute for ProductDetails"
   "feat(home): build Home page with Swiper hero slider, popular products and summer tips sections"
    "feat(profile): add MyProfile and UpdateProfile pages with live name and photo preview"
    "fix(deploy): add vercel.json and Netlify _redirects for SPA route reload fix"
    "docs: complete README with setup guide, env vars, Firebase config and folder structure"