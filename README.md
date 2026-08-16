# SRM timetable — Semester 1, 2026

Class schedule, day orders, and holidays for B.Tech UG first year, Batch 1.
Static site, no build step, no dependencies. Works offline once loaded.

## Live URLs (after enabling Pages)

| Path | What |
|---|---|
| `/` | Landing page. Auto-redirects: phones → mobile, everything else → desktop |
| `/?stay=1` | Landing page without redirect — pick a view manually |
| `/mobile/` | Phone view: day list, week list, month grid, courses. Swipe to change day |
| `/desktop/` | Original view: work-week hour grid + month, sidebar mini-calendar |
| `/calendar/srm_timetable.ics` | 250 events for Apple/Google Calendar |

## Deploy on GitHub Pages

1. Create a **public** repo, e.g. `timetable`.
2. Upload every file and folder here, keeping the structure. Commit to `main`.
3. **Settings → Pages** → Source: *Deploy from a branch* → Branch `main`, folder `/ (root)` → Save.
4. Live in ~1 min at `https://<username>.github.io/timetable/`.

Then on iPhone: open the URL in Safari → **Share → Add to Home Screen**. Launches
full-screen, works without signal.

## Editing the timetable

All schedule data lives in **`assets/data.js`** — both views read it, so edit once.

| Variable | Meaning |
|---|---|
| `TIME` | 12 hour-slot start/end times |
| `SLOTGRID` | Slot letters/codes per day order (1–5) |
| `COURSES` | Course code, name, credits, faculty, room, colours |
| `TT` | Day order → hour → `[course, "theory"\|"lab"]` |
| `RAW` | Academic calendar: `MM-DD\|dayOrder\|week` or `MM-DD\|H\|holiday name` |

After editing, bump `CACHE` in **`sw.js`** (`srm-timetable-v1` → `-v2`), otherwise
returning visitors keep the cached old version.

The `.ics` file is generated separately — regenerate it if the schedule changes,
or delete it and drop the link from `/mobile/`.

## Files

```
├── index.html                 router + landing
├── mobile/index.html          phone view
├── desktop/index.html         wide-screen view
├── assets/data.js             single source of truth
├── calendar/srm_timetable.ics calendar import
├── icons/                     app icons (180/192/512 + maskable)
├── manifest.webmanifest       installable web app
├── sw.js                      offline cache
└── .nojekyll                  disable Jekyll processing
```

`.nojekyll` matters: without it GitHub runs Jekyll, which ignores files and
folders starting with `_`.

## Notes

- Paths are all relative, so the site works at any sub-path and offline via `file://` **except** the service worker, which needs `https://`.
- `sw.js` must stay at the repo root — its scope covers everything below it.
- Term: 21 Jul – 7 Dec 2026, 19 weeks, 5-day day-order cycle.
