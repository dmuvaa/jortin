# Jortin Limited replacement image pack

Drop-in replacements for broken screenshot-crop images in `public/images/`. Same filenames and folder layout as the app expects.

## Install (one line)
```
cp -R /path/to/jortin-replacement-images/* /Users/la/jortin/public/images/
```
(Extras `README.md`, `CREDITS.txt`, `PREVIEW.jpg`, `logos/`, `favicon/` are harmless in public/images; delete them after copying if you prefer.)

## What replaces what

| Pack file | Overwrites live file | Content |
|---|---|---|
| logo.png (780x168, transparent) | /Users/la/jortin/public/images/logo.png | Navy JORTIN wordmark + amber mark, for white navbar |
| logo-white.png | /Users/la/jortin/public/images/logo-white.png | White wordmark for navy footer |
| logo-footer.png | /Users/la/jortin/public/images/logo-footer.png | Same as logo-white.png |
| logo.svg | new file (optional) | SVG master of logo.png |
| client-periurban.png | .../client-periurban.png | Text badge: PP, Periurban Properties, Real Estate |
| client-dapan.png | .../client-dapan.png | Text badge: DE, Dapan Engineering Limited, Structural & Construction |
| client-bn-architects.png | .../client-bn-architects.png | Text badge: BN, BN Architects, Architecture |
| client-art-tic.png | .../client-art-tic.png | Text badge: AT, ART.TIC Studio, Architectural Design |
| client-kirrn.png | .../client-kirrn.png | Text badge: K, KIRRN LTD., Real Estate Developer |
| hero-home-bg.jpg | /Users/la/jortin/public/images/hero-home-bg.jpg | Photo: Construction in Nairobi.JPG |
| hero-about-bg.jpg | /Users/la/jortin/public/images/hero-about-bg.jpg | Photo: Aerial view of the Nairobi skyline from the KICC rooftop at golden hour.jpg |
| building-construction.jpg | /Users/la/jortin/public/images/building-construction.jpg | Photo: Construction in Nairobi area.JPG |
| building-crane.jpg | /Users/la/jortin/public/images/building-crane.jpg | Photo: Construction of New Hazina Towers-Nairobi, Kenya EA.jpg |
| city-street.jpg | /Users/la/jortin/public/images/city-street.jpg | Photo: Magadi Road Works, Ongata Rongai, Kenya.jpg |
| consultancy-design.jpg | /Users/la/jortin/public/images/consultancy-design.jpg | Photo: IMAGES-1501 20.jpg |
| consulting.jpg | /Users/la/jortin/public/images/consulting.jpg | Photo: Electricity workers.jpg |
| electrical-mechanical.jpg | /Users/la/jortin/public/images/electrical-mechanical.jpg | Photo: Electrician Working.jpg |
| procurement-maintenance.jpg | /Users/la/jortin/public/images/procurement-maintenance.jpg | Photo: Water tanks - Rongai, Kenya.jpg |
| project-management.jpg | /Users/la/jortin/public/images/project-management.jpg | Photo: Magadi Road works supervised, Ongata Rongai, Kenya.jpg |
| rebar-worker.jpg | /Users/la/jortin/public/images/rebar-worker.jpg | Photo: Rebar worker.jpg |
| road-works.jpg | /Users/la/jortin/public/images/road-works.jpg | Photo: Steam Rolling the Asphalt (1) 476084.jpg |
| structural-civil.jpg | /Users/la/jortin/public/images/structural-civil.jpg | Photo: Rebar before concrete (7187872035).jpg |
| water-sanitation.jpg | /Users/la/jortin/public/images/water-sanitation.jpg | Photo: Drilling for Water Manually in Kenya.jpg |
| workers-ppe.jpg | /Users/la/jortin/public/images/workers-ppe.jpg | Photo: African women at building work, source, KIAMBU COUNTY, KENYA.jpg |
| projects/project-building.jpg | /Users/la/jortin/public/images/projects/project-building.jpg | Photo: Building Walls.jpg |
| projects/project-roads.jpg | /Users/la/jortin/public/images/projects/project-roads.jpg | Photo: Construction of a pedestrians cross way at Kenyatta University.JPG |
| projects/project-water.jpg | /Users/la/jortin/public/images/projects/project-water.jpg | Photo: Water tank tower.jpg |
| projects/project-structural.jpg | /Users/la/jortin/public/images/projects/project-structural.jpg | Photo: Assembling rebar cages for installing concrete foundations. 11-08-2019 (49070775561).jpg |
| projects/project-process.jpg | /Users/la/jortin/public/images/projects/project-process.jpg | Photo: Suspended-slab-formwork.jpg |

## Optional extras (not referenced by the app today)
- `logos/logo.svg`, `logos/logo-white.svg`, `logos/mark.svg`: SVG masters (text uses Inter/Montserrat/Arial fallback; outline text in a vector editor if you need exact rendering everywhere).
- `favicon/favicon.ico`, `icon-32.png`, `icon-180.png` (apple-touch), `icon-512.png`. To use: copy favicon.ico to `app/favicon.ico` or `public/`.

## Notes
- Every service image and all 5 project images were screenshot crops (rounded card frames, white margins, baked UI text), so all were replaced. Old heroes were website screenshots; replaced.
- Client badges are text only (initials + name + sector). They are not the clients' real logos.
- No NCA grade claims; no em/en dashes in baked text.
- Photos are Wikimedia Commons CC BY / CC BY-SA / public domain. Attribution required: see CREDITS.txt.
