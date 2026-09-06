# 🎬 Movie Explorer

אתר React לסקירה של סדרות וסרטים, המבוסס על ה- API של TVmaze

---

## ✨ תכונות עיקריות

- חיפוש וסינון סדרות בזמן אמת
- הוספה/הסרה ממועדפים, נשמר לצמיתות (localStorage דרך Zustand persist)
- עמוד פרטים מלא לכל סדרה
- מסך התחברות בסיסי — עמודי האתר מוגנים מאחורי Route Guard

---

## איך מריצים

התקנה

```bash
git clone https://github.com/shlomiKa1/movie-explorer.git
cd movie-explorer
npm install
```

הרצה

```bash
npm run dev
```

---

# מבנה התיקייה

```
movie-explorer/
├── src/
│ ├── components/ # קומפוננטות UI לשימוש חוזר
│ │ ├── Header.tsx
│ │ ├── Footer.tsx
│ │ ├── LoginPage.tsx
│ │ ├── MovieCard.tsx
│ │ ├── MovieDetailsPage.tsx
│ │ ├── MovieList.tsx
│ │ ├── SearchBar.tsx
│ │ └── styles/ # קבצי CSS לכל קומפוננטה
│ │
│ ├── pages/ # עמודים שמחוברים ל-Routes
│ │ ├── Movies.tsx # רשימת הסדרות הראשית
│ │ ├── MovieDetails.tsx # עמוד פרטי סדרה בודדת
│ │ ├── Favorites.tsx # עמוד המועדפים
│ │ └── NotFoundPage.tsx # דף 404
│ │
│ ├── layout/ # מבנה עטיפה כללי לאתר
│ │ ├── MainLayout.tsx # Header + Outlet + Footer לכל העמודים
│ │ ├── Protected.tsx # Route Guard להתחברות
│ │ └── style.css
│ │
│ ├── store/ # ניהול state גלובלי (Zustand)
│ │ ├── FavoritesStore.tsx # מועדפים + שמירה ב-localStorage
│ │ └── MoviesStore.tsx # Caching לרשימת הסדרות שנטענה
│ │
│ ├── hooks/
│ │ └── useFetch.ts # Hook גנרי לשליפת נתונים מה-API
│ │
│ ├── utils/
│ │ └── types.ts # כל ה-Interfaces + מיפוי TVmaze → מבנה פנימי
│ │
│ ├── App.tsx # הגדרת כל ה-Routes
│ ├── main.tsx # נקודת הכניסה לאפליקציה
│ └── index.css
│
├── package.json
└── vite.config.ts
```
