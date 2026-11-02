/* BUDA Auto Styling: navigation, product filtering, gallery and form checks. */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    });
  }

  // Search and sort the product categories without reloading the page.
  const search = document.querySelector('#product-search');
  const sort = document.querySelector('#product-sort');
  const grid = document.querySelector('#product-grid');
  if (search && sort && grid) {
    const cards = Array.from(grid.querySelectorAll('.product-card'));
    const count = document.querySelector('#product-count');
    const empty = document.querySelector('#no-products');
    const updateProducts = () => {
      const term = search.value.trim().toLowerCase();
      const visible = cards.filter(card => {
        const matches = (card.dataset.name + ' ' + card.dataset.category + ' ' + card.textContent).toLowerCase().includes(term);
        card.hidden = !matches;
        return matches;
      });
      visible.sort((a, b) => {
        if (sort.value === 'az') return a.dataset.name.localeCompare(b.dataset.name);
        if (sort.value === 'za') return b.dataset.name.localeCompare(a.dataset.name);
        return cards.indexOf(a) - cards.indexOf(b);
      });
      visible.forEach(card => grid.appendChild(card));
      count.textContent = `Showing ${visible.length} of ${cards.length} product categories`;
      empty.hidden = visible.length !== 0;
    };
    search.addEventListener('input', updateProducts);
    sort.addEventListener('change', updateProducts);
  }

  // Reusable accessible lightbox for gallery images.
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.hidden = true;
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Expanded image');
  lightbox.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image">×</button><img alt=""><p class="lightbox-caption"></p>';
  document.body.appendChild(lightbox);
  const lightboxImage = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  const closeButton = lightbox.querySelector('.lightbox-close');
  let previousFocus = null;
  const closeLightbox = () => {
    lightbox.hidden = true;
    document.body.style.overflow = '';
    if (previousFocus) previousFocus.focus();
  };
  document.querySelectorAll('.gallery-trigger').forEach(button => {
    button.addEventListener('click', () => {
      const image = button.querySelector('img');
      if (!image) return;
      previousFocus = button;
      lightboxImage.src = image.currentSrc || image.src;
      lightboxImage.alt = image.alt;
      caption.textContent = image.alt;
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      closeButton.focus();
    });
  });
  closeButton.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && !lightbox.hidden) closeLightbox(); });

  // Client-side form validation. No enquiry is sent to a server in this demo.
  const form = document.querySelector('#contact-form');
  if (form) {
    const status = document.querySelector('#form-status');
    const fields = [
      { input: document.querySelector('#name'), error: document.querySelector('#name-error'), check: value => value.trim().length >= 2, message: 'Please enter a name with at least 2 characters.' },
      { input: document.querySelector('#email'), error: document.querySelector('#email-error'), check: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()), message: 'Please enter a valid email address.' },
      { input: document.querySelector('#message'), error: document.querySelector('#message-error'), check: value => value.trim().length >= 10, message: 'Please add a little more detail (at least 10 characters).' }
    ];
    fields.forEach(field => field.input.addEventListener('input', () => {
      field.input.removeAttribute('aria-invalid');
      field.error.textContent = '';
      status.textContent = '';
      status.className = 'form-status';
    }));
    form.addEventListener('submit', event => {
      event.preventDefault();
      let valid = true;
      fields.forEach(field => {
        if (!field.check(field.input.value)) {
          field.input.setAttribute('aria-invalid', 'true');
          field.error.textContent = field.message;
          valid = false;
        } else {
          field.input.removeAttribute('aria-invalid');
          field.error.textContent = '';
        }
      });
      if (!valid) {
        status.textContent = 'Please check the highlighted fields and try again.';
        status.className = 'form-status error';
        form.querySelector('[aria-invalid="true"]').focus();
        return;
      }
      status.textContent = 'Your details passed the form checks. This is a portfolio demo, so the enquiry has not been sent. Connect a form service before using this on a live website.';
      status.className = 'form-status success';
    });
  }
});
