# FBTC Website

## Folder Structure

```
fbtc-site/
├── index.html                  # Single-page app entry point (all pages)
├── README.md
├── assets/
│   ├── css/
│   │   └── styles.css          # All styles
│   ├── js/
│   │   └── app.js              # Navigation logic + hash routing
│   └── images/
│       └── logo.png            # FBTC logo (transparent background)
│           hero-*.jpg          # Page hero images (download from Unsplash — see below)
└── pages/                      # Standalone page files (optional multi-page use)
    ├── home.html
    ├── about.html
    ├── construction.html
    ├── medicals.html
    ├── ohs.html
    ├── softskills.html
    ├── operator.html
    └── contact.html
```

## Usage

### Single-Page App
Open `index.html` in a browser. All pages are loaded — navigation is handled
client-side via `assets/js/app.js`. Hash routing is supported: `index.html#contact`
jumps straight to the Contact page.

### Individual Pages
Each file in `pages/` is a standalone HTML file. Useful if you want to deploy
as a traditional multi-page site. All asset references use `../assets/` paths.

## Images

Stock images are loaded from Unsplash CDN. To host them locally, download and
place in `assets/images/`, then update the `src` attributes in each page.

| Filename              | Unsplash URL                                                              |
|-----------------------|---------------------------------------------------------------------------|
| hero-team.jpg         | https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1400&q=80 |
| hero-construction.jpg | https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80 |
| hero-forklift.jpg     | https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=1400&q=80 |
| hero-medical.jpg      | https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=1400&q=80 |
| hero-ohs.jpg          | https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1400&q=80 |
| hero-softskills.jpg   | https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1400&q=80 |
| hero-contact.jpg      | https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=80 |
| mobile-medical.jpg    | https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=700&q=80  |
| showcase-forklift.jpg | https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?w=600&q=80  |
| showcase-medical.jpg  | https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80  |

## Fonts
Google Fonts — Barlow Condensed (600, 700) and Barlow (400, 500, 600, italic).
Loaded via CDN link in `<head>`.

## Colours
| Variable        | Value   | Usage                        |
|-----------------|---------|------------------------------|
| --gold          | #8B1A1A | FBTC crimson red (primary)   |
| --gold-light    | #B02020 | Hover states                 |
| --gold-bg       | #F9F0F0 | Light red tint backgrounds   |
| --gold-border   | #DDB8B8 | Red-tinted borders           |
| --text          | #1A1A1A | Primary text                 |
| --text-muted    | #606060 | Body copy / secondary text   |
| --border        | #DCDCDC | Grid / card borders          |
