# Personal Portfolio & Resume Website

A modern, fast, responsive personal portfolio and resume website built with clean **HTML5**, **CSS3**, and **Vanilla JavaScript**. No build tools, external frameworks, or installations required.

---

## 🚀 How to View the Website

You can view this website immediately in two simple ways:

### Option 1: Double-click to open (Fastest)
1. Navigate to your project folder: `c:\Users\Amie\Desktop\Sem 1`
2. Double-click on `index.html` to open it in your default web browser (Chrome, Edge, Firefox, Safari).

### Option 2: Run a local development server (View on iPhone & other devices)
If you have Python installed, open PowerShell or Command Prompt in this folder and run:
```bash
python -m http.server 8000 --bind 0.0.0.0
```
Then:
- On your PC: visit `http://localhost:8000`
- On your iPhone (connected to the same Wi-Fi network): visit `http://<YOUR_PC_IP_ADDRESS>:8000` (e.g. `http://192.168.1.50:8000`).

### Option 3: Browser DevTools Mobile Emulation
In Chrome or Edge on your PC, press `F12` (or right-click > **Inspect**), then click the **Toggle Device Toolbar** icon (`Ctrl + Shift + M`) and select **iPhone 14 Pro** / **iPhone 12 Pro** to preview the exact iPhone layout, notch handling, and touch interactions.

---

## ✨ Features Included

- **🌗 Dark / Light Mode**: Theme toggle with automatic system theme detection and `localStorage` persistence.
- **📱 Fully Responsive**: Fluid layouts that adapt beautifully across smartphones, tablets, laptops, and desktop monitors.
- **🧭 Sticky Navigation**: Sleek glassmorphism header with active section tracking as you scroll.
- **💼 Comprehensive Sections**:
  - **Hero**: Catchy introduction, headline, avatar card, and social links.
  - **About Me**: Personal bio and quick highlight metrics.
  - **Technical Skills**: Categorized skill pills for frontend, tools, and computer science foundations.
  - **Projects Showcase**: Interactive cards featuring tags, live demo, and GitHub links.
  - **Education & Milestones**: Clean timeline layout.
  - **Interactive Contact Form**: Client-side validation and simulated instant feedback.
- **⚡ Zero Dependencies**: Works offline without CDNs or heavy npm packages.

---

## ✏️ How to Customize

All files are straightforward and beginner-friendly:

- **Change Name & Bio**: Open `index.html` and update the text in the `#hero` and `#about` sections.
- **Add Your Own Projects**: Update the `<article class="project-card">` blocks inside the `#projects` section in `index.html`.
- **Update Contact Info**: Change the email, location, and social links in `index.html`.
- **Change Colors & Fonts**: In `style.css`, modify the CSS variables in the `:root` and `[data-theme="dark"]` selectors at the top of the file.

---

## 🌐 Free Deployment Options

When you're ready to share your portfolio with recruiters, teachers, or friends:
1. **GitHub Pages**: Push this folder to a GitHub repository, go to **Settings > Pages**, and select the `main` branch.
2. **Netlify**: Drag and drop the folder directly into [Netlify Drop](https://app.netlify.com/drop) for an instant live URL.
3. **Vercel**: Import your repository or deploy with the Vercel CLI.
