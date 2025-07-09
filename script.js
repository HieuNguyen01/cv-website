// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('cv-table');
  const tabs  = document.querySelector('.tabs'); // ← must include the “.”

  function buildMobileView() {
    if (document.querySelector('.mobile-cv')) return;

    // create mobile wrapper
    const mobile = document.createElement('div');
    mobile.className = 'mobile-cv';

    // clone header/image/name/profile/contact
    const hdr = document.createElement('div');
    hdr.className = 'mobile-header';
    mobile.append(hdr);

    const imgWrap = document.createElement('div');
    imgWrap.className = 'mobile-img';
    imgWrap.append(
      document.querySelector('.col-photo img').cloneNode(true)
    );
    mobile.append(imgWrap);

    const nameWrap = document.createElement('div');
    nameWrap.className = 'mobile-name';
    nameWrap.append(
      document.querySelector('.col-name h1').cloneNode(true)
    );
    mobile.append(nameWrap);

    const titleWrap = document.createElement('div');
    titleWrap.className = 'mobile-title';
    titleWrap.append(
      document.querySelector('.col-name h2').cloneNode(true)
    );
    mobile.append(titleWrap);

    const profileWrap = document.createElement('div');
    profileWrap.className = 'mobile-profile';
    profileWrap.append(
      document.querySelector('.col-profile .profile').cloneNode(true)
    );
    mobile.append(profileWrap);

    const contactWrap = document.createElement('div');
    contactWrap.className = 'mobile-contact';
    contactWrap.append(
      document.querySelector('.col-profile .contact').cloneNode(true)
    );
    mobile.append(contactWrap);

    // inject the tabbed accordions now that mobile exists
    if (tabs) {
      const tabsClone = tabs.cloneNode(true);
      tabsClone.classList.add('injected-tabs');
      mobile.append(tabsClone);
      tabs.style.display = 'none';  // hide original tabs container
    }

    // whenever any <details> toggles…
  document.body.addEventListener('toggle', e => {
    const opened = e.target;
    // only care about CV accordions
    if (!opened.matches('.cv-accordion')) return;

    // if it just opened, close the rest
    if (opened.open) {
      document.querySelectorAll('.cv-accordion')
        .forEach(acc => {
          if (acc !== opened) acc.open = false;
        })
    }
  }, /* useCapture */ true);

    // clone the remaining blocks (skills, languages, etc.)
    const cloneBlock = (selector, className) => {
      const el = document.createElement('div');
      el.className = className;
      const src = document.querySelector(selector);
      if (src) el.append(src.cloneNode(true));
      mobile.append(el);
    };

    cloneBlock('.col-skills',    'mobile-skills');
    cloneBlock('.languages',     'mobile-languages');
    cloneBlock('.courses',       'mobile-courses');
    cloneBlock('.col-certificates', 'mobile-certificates');
    cloneBlock('.software',      'mobile-software');
    cloneBlock('.hobbies',       'mobile-hobbies');

    // footer bar
    const ftr = document.createElement('div');
    ftr.className = 'mobile-footer';
    mobile.append(ftr);

    // inject & hide original table
    document.body.insertBefore(mobile, table);
    table.style.display = 'none';
  };

  function destroyMobileView() {
    const mob = document.querySelector('.mobile-cv');
    if (mob) {
      mob.remove();
      table.style.display = '';
      if (tabs) tabs.style.display = '';
    }
  };

  function handleResize() {
    if (window.innerWidth <= 768) buildMobileView();
    else destroyMobileView();
  };

  // init + watch
  handleResize();
  window.addEventListener('resize', handleResize);

  // delegated tab switching
  document.body.addEventListener('click', e => {
  if (!e.target.matches('.tab-btn')) return;  // ignore clicks off tabs

  // deactivate all tabs/panels
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.hidden = true);

  // activate the clicked tab
  e.target.classList.add('active');
  document.getElementById(e.target.dataset.target).hidden = false;

  // collapse all the accordions
  document.querySelectorAll('.cv-accordion')
    .forEach(acc => acc.open = false)
  });
});
