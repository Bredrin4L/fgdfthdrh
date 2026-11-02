# BUDA Auto Styling — Part 3 Portfolio Website

## Project overview
BUDA Auto Styling is a student website concept for an automotive styling shop featuring suspension, wheel fitment, alignment and car-care product categories. The project extends the earlier multi-page site with JavaScript interactions, on-page SEO improvements and basic technical SEO files.

## Student details
- **Student name:** [Add your name]
- **Student number:** [Add your student number]
- **Module:** [Add module name]
- **Assessment:** Website POE — Part 3

## Run locally
1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in a browser, or use the Live Server extension for a local preview.
4. Test the navigation at mobile width, the product search/sort on `shop.html`, the image lightbox on `services.html`, and the form checks on `contact.html`.

No build tools or package installation are required.

## Main features
- Five linked pages with responsive styling and descriptive page titles and meta descriptions.
- Responsive mobile navigation with an expanded/collapsed state.
- Product search and alphabetical sorting on the shop page.
- Image gallery lightbox with Escape-key and close-button support.
- Expandable service FAQs using HTML `details` and `summary`.
- Client-side form validation for name, email and message, with inline feedback and accessible status messages. The form is a front-end demo only; it does not transmit or store enquiries until connected to a form backend/service.
- Descriptive image alternative text, lazy loading for gallery images, keyboard focus styling and reduced-motion support.
- `robots.txt` and `sitemap.xml` templates.

## Folder structure
```text
Buda_Auto_Styling/
├── index.html
├── about.html
├── services.html
├── shop.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
├── robots.txt
├── sitemap.xml
├── CHANGELOG.md
└── README.md
```

## Images and credits
The supplied project archive already included the images listed below. They have been retained locally and are used in the website; the original archive did not include source URLs or photographer details, so the source of these supplied files cannot be verified from the files provided. Do not present them as externally sourced or assign a photographer without checking the original source.

- `images/logo.png` — supplied BUDA Auto Styling logo.
- `images/stance-build.jpg` — supplied vehicle/build image.
- `images/air-suspension.jpg` — supplied suspension image.
- `images/coilovers.jpg` — supplied coilover image.
- `images/wheel-alignment.jpg` — supplied wheel service image.
- `images/wheels.jpg` — supplied wheel image.
- `images/car-care.jpg` — supplied car-care image.
- `images/workshop.jpg` — supplied workshop image.

For any replacement/additional stock photos, select a specific image, download it from its source page, and record the photographer, image title, source page URL and access date here. Possible free-to-use source pages to review (check the individual image licence before use):
- Pexels, “Close-up of a Modified Car Wheel with Custom Rims”: https://www.pexels.com/photo/close-up-of-a-modified-car-wheel-with-custom-rims-31943402/
- Pexels, “Close-up of the Side and the Rim in a Modified Sports Car”: https://www.pexels.com/photo/close-up-of-the-side-and-the-rim-in-a-modified-sports-car-17594688/
- Pexels, “Tire and Rim”: https://www.pexels.com/photo/tire-and-rim-3894037/

These links are references for possible replacement images, not claims that those particular photographs are included in the local `images/` folder.

## SEO checklist
- Each page has a unique title and meta description.
- Heading hierarchy is used to organise content.
- Image filenames are descriptive and images have meaningful alt text.
- Internal links connect the main pages.
- Responsive layouts and lazy-loaded gallery images support mobile usability and performance.
- `robots.txt` and `sitemap.xml` are included as templates. Replace `YOUR-USERNAME` and `YOUR-REPOSITORY` in both files after deciding on the final public URL.
- Keep URLs short and descriptive when choosing the GitHub repository name.
- Off-page SEO tasks such as social promotion and earning genuine backlinks are ongoing tasks, not something the static website can do automatically.

## Deployment
### GitHub Pages
1. Create a GitHub repository and upload/commit the contents of this project folder.
2. In the repository, open **Settings → Pages**.
3. Choose the `main` branch and `/ (root)` as the publishing source, then save.
4. Once GitHub Pages gives you the site URL, update the sitemap URL in `robots.txt` and all URLs in `sitemap.xml`, commit the changes, and verify the published pages.

### Netlify
You can also deploy by importing the GitHub repository into Netlify. This is a static site, so no build command is needed; use the project root as the publish directory. Update the sitemap and robots URLs to match the deployed domain.

## Testing notes
Test links and navigation on every page, product search with matching and non-matching words, both sort orders, lightbox open/close and Escape behaviour, empty/invalid form submissions and a valid form submission. Test on a narrow mobile screen and desktop. Browser validation is not a substitute for server-side validation when a real submission backend is added.

## References
- Google Search Central. (n.d.). *SEO Starter Guide*. https://developers.google.com/search/docs/fundamentals/seo-starter-guide (accessed 28 October 2026).
- MDN Web Docs. (n.d.). *Constraint validation*. https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation (accessed 28 October 2026).
- MDN Web Docs. (n.d.). *HTML details element*. https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details (accessed 28 October 2026).
- Pexels. (n.d.). *Pexels License*. https://www.pexels.com/license/ (accessed 28 October 2026).
- Pexels image pages listed in “Images and credits” above (review and verify the selected image and its licence before use).

## Git commit examples
- `Add JavaScript product search and sorting`
- `Add accessible gallery lightbox`
- `Validate contact form fields`
- `Improve page metadata and technical SEO files`
- `Document Part 3 changes and deployment steps`
