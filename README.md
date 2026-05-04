# Task Manager

A minimal task management app built with Angular 21. Supports adding, completing, and deleting tasks, with filters for active/completed items and counts at the top. Tasks are saved to localStorage so they persist across page refreshes.

## Features

- Add tasks with a simple text input
- Mark tasks as done with a checkbox
- Delete tasks on hover
- Filter by All / Active / Completed
- Live task counters
- Data stored in localStorage (no backend needed)

## Tech Stack

- Angular 21 (standalone components, signals)
- TypeScript
- CSS (no frameworks)

## Running locally

```bash
npm install
npm start
```

Open [http://localhost:4200](http://localhost:4200) in your browser.

## Build

```bash
npm run build
```

Output goes to the `dist/` folder.
