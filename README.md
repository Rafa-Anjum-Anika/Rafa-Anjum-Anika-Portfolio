# Rafa Anjum Anika – Academic Portfolio

A minimalist, responsive academic portfolio website built with **HTML5**, **CSS3**, and **vanilla JavaScript**.

## Overview

This portfolio showcases:
- Personal information (name, degree, university)
- Education timeline with specific details (B.Pharm and HSC only)
- Research interests with evolving exploration areas
- Leadership experience (Executive Committee Member, MIUDC)
- Awards & achievements (Pharma Carnival 2026)
- Skills organized into categories
- Contact & professional links (specific email and LinkedIn)

## File Structure

```
rafa-anjum-anika-portfolio/
├── index.html          # Main HTML document with updated factual content
├── style.css           # All styling (colours, layout, responsive design)
├── script.js           # Mobile navigation toggle & smooth scroll
├── assets/
│   ├── images/         # Profile photo (profile.jpeg)
│   └── pdfs/           # (Optional) Certificate PDFs and CV if needed
└── README.md           # This file
```

## Colour Palette (as specified)

| Variable       | Hex      | Description        |
|----------------|----------|--------------------|
| `--space-cadet`| `#2e3a62`| Primary dark colour|
| `--slate-gray` | `#4a5568`| Secondary text colour|
| `--tan`        | `#c4a674`| Accent colour      |
| `--coffee`     | `#7b5a36`| Link/button accent |
| `--caput-mortuum`| `#57284c`| Secondary dark     |
| `--light-bg`   | `#f7fafc`| Background         |
| `--text-primary`| `#2d3748`| Main text          |
| `--text-secondary`| `#4a5568`| Secondary text    |

## How to Edit

### 1. Personal Information (Hero Section)
- Open `index.html` and update the hero section:
  - `<p class="hero__tagline">Bachelor of Pharmacy</p>` – your degree
  - `<h1 class="hero__name">Rafa Anjum Anika</h1>` – your name
  - `<p class="hero__subtitle">Pharmaceutical Sciences · Research · Clinical Practice</p>` – subtitle
- Update the profile photo: replace `assets/images/profile.jpg` with your own photo
- The email and LinkedIn are already updated in the Contact section

### 2. About Me
- The text is written in first-person professional tone based on your provided background.
- Edit the paragraphs inside `<section id="about">` if you want to modify the introduction.
- The tone is confident, authentic, thoughtful, and professional – avoiding exaggerated claims.

### 3. Education
- Specific institutions and details are already included in the timeline (B.Pharm and HSC only):
  - **Manarat International University** – Bachelor of Pharmacy (2025–Present), Grade: 3.99
  - **Barishal Government Women's College** – HSC (2020–2022), Grade: 5.00
- The timeline layout uses appropriate academic icons (timeline dots).
- SSC section has been removed per your requirements.
- If you need to add more education entries, follow the same `.timeline__item` structure.

### 4. Research Interests
- Your specific research interest areas are already listed:
  - Pharmacology and Therapeutics
  - Drug Discovery and Development
  - Natural Products and Phytopharmaceuticals
  - Women's and Reproductive Health
  - Evidence-Based Medicine and Healthcare Research
- Your introductory statement is included: *"My research interests are evolving as I explore different areas of pharmaceutical sciences. I am particularly curious about understanding how medicines work, discovering therapeutic possibilities, and exploring diverse approaches to healthcare."*
- Edit the `<ul class="research__list">` items or the introductory `<p>` if your interests evolve.

### 5. (Section removed)
The Academic & Research Projects section has been removed per your requirements. If you wish to add projects later, you can insert a `.projects__grid` grid within a new `<section id="projects">` element.

### 6. Leadership & Experience
- Your role as **Executive Committee Member, MIUDC** (Manarat International University Debate Club) is already included.
- The list highlights participation in extracurricular activities, development of communication/leadership abilities, collaborative teamwork, and engagement in debating/public speaking.
- Do not add invented specific responsibilities or dates – the existing content stays factual.

### 7. Awards & Achievements
- Your two awards from Pharma Carnival 2026 are already displayed:
  - **Champion – Pharma Debate Competition**, Pharma Carnival 2026, Manarat International University
  - **2nd Runner-Up – Public Speaking Competition**, Pharma Carnival 2026, Manarat International University
- Subtle trophy/award icons are used.
- Add more awards following the same `<li>` structure if needed.

### 8. (Section removed)
The Certificates & Credentials section has been removed per your requirements. If you wish to add certificates later, you can insert certificate cards within a new `<section id="certificates">` element.

### 9. Skills
- Skills are organized into three columns:
  - **Communication & Expression**: Public Speaking & Presentation, Debate, Storytelling, Content Writing
  - **Leadership & Collaboration**: Leadership, Teamwork, Collaborative Problem-Solving
  - **Digital & Technical**: Presentation Design, Canva (Basic), Microsoft Excel (Foundational)
- No fabricated percentages or expert-level ratings – skills are listed honestly.
- Add/remove list items within each `.skills__list` as needed.

### 10. (Section removed)
The Downloadable CV section has been removed per your requirements. If you wish to add a CV later, place a PDF in `assets/pdfs/rafa-anjum-anika-cv.pdf` and add a download link within a new `<section id="cv">` element.

### 11. Contact & Professional Links
- **Email**: `anjumanika638@gmail.com` – already set as `mailto:` link
- **LinkedIn**: `https://www.linkedin.com/in/rafa-anjum-anika-b2a987399?utm_source=share_via&utm_content=profile&utm_medium=member_android` – already set as clickable profile
- The contact section includes a simple call-to-action: "I welcome collaborations, research discussions, and opportunities."
- Do not add phone numbers, addresses, or other social media accounts.

## How to Publish on GitHub Pages

1. **Push this repository to GitHub** (or create a new repo and upload these files).
2. In your GitHub repo, go to **Settings → Pages**.
3. Under "Source", select the **`main`** (or `master`) branch and the `/(root)` folder.
4. Click **Save**. GitHub will build and deploy your site.
5. Your site will be available at `https://<your-username>.github.io/<repo-name>/`.

### Tips for GitHub Pages
- Keep image and PDF files inside the `assets/` folder so they are served correctly.
- All file paths in the HTML are **relative** (e.g., `assets/images/profile.jpg`), so they work out‑of‑the-box on GitHub Pages.
- If you add new pages, ensure they are linked from the navigation.

## Accessibility Notes
- Semantic HTML5 elements (`header`, `section`, `nav`, `footer`, `main`, `figure`, `figcaption`).
- Colour contrast meets WCAG AA for normal text.
- Mobile navigation is keyboard‑accessible (Escape closes it, Tab/Shift+Tab moves focus).
- SVG icons in the contact section have `aria-label` for screen readers.
- Focus outlines are preserved for keyboard navigation.

## Customisation
- To change the colour palette, edit the `:root` variables in `style.css`.
- To add Google Fonts, link them in `<head>` and update the `font-family` declarations.
- For more animations, the CSS already includes subtle `transition` effects on buttons, cards, and hover states.
- All text and images are easy to replace – just edit the relevant HTML elements or replace the files in `assets/`.

## Important Instructions (as requested)
- **Do not invent** academic publications, research projects, internships, certifications, or professional experience.
- **Do not exaggerate** skills or achievements.
- **Do not create** fake statistics or testimonials.
- **Maintain factual accuracy** throughout – all content reflects the information you provided.
- Write all website content in polished professional English.
- Make all text and images easy to replace later.
- Use a clearly labeled placeholder for the profile photograph – replace `assets/images/profile.jpeg` with your actual photo.
- **Do not use** random stock photos of people as the profile picture.

## Final Deliverables
- `index.html` – complete HTML with your specific factual content (education: B.Pharm + HSC only; no projects, certificates, or CV sections by default)
- `style.css` – styling with the specified colour palette and responsive design
- `script.js` – functional mobile navigation, smooth scroll, and accessibility
- `assets/images/` – folder for your profile photo (profile.jpeg)
- `README.md` – explanation of how to run and edit the website

## Design Goal
A distinctive, elegant, research-oriented academic portfolio that reflects a curious pharmacy undergraduate with strong communication skills, leadership experience (MIUDC), and evolving interests in pharmaceutical research – suitable for university networking, research opportunities, and academic collaborations. The portfolio includes Education (B.Pharm + HSC), Research Interests, Leadership & Experience, and Awards & Achievements, with a clean minimalist aesthetic.