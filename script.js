// js/script.js

document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById('cv-table')

  function buildMobileView() {
    if (document.querySelector('.mobile-cv')) return

    const mobile = document.createElement('div')
    mobile.className = 'mobile-cv'

    // 0. Header bar
    const hdr = document.createElement('div')
    hdr.className = 'mobile-header'
    mobile.append(hdr)

    // 1. Image
    const imgWrap = document.createElement('div')
    imgWrap.className = 'mobile-img'
    imgWrap.append(
      document.querySelector('.col-photo img').cloneNode(true)
    )
    mobile.append(imgWrap)

    // 2. Name
    const nameWrap = document.createElement('div')
    nameWrap.className = 'mobile-name'
    nameWrap.append(
      document.querySelector('.col-name h1').cloneNode(true)
    )
    mobile.append(nameWrap)

    // 3. Title
    const titleWrap = document.createElement('div')
    titleWrap.className = 'mobile-title'
    titleWrap.append(
      document.querySelector('.col-name h2').cloneNode(true)
    )
    mobile.append(titleWrap)

    // 4. Profile
    const profileWrap = document.createElement('div')
    profileWrap.className = 'mobile-profile'
    profileWrap.append(
      document.querySelector('.col-profile .profile').cloneNode(true)
    )
    mobile.append(profileWrap)

    // 5. Contact
    const contactWrap = document.createElement('div')
    contactWrap.className = 'mobile-contact'
    contactWrap.append(
      document.querySelector('.col-profile .contact').cloneNode(true)
    )
    mobile.append(contactWrap)

    // 6. Education
    const eduWrap = document.createElement('div')
    eduWrap.className = 'mobile-education'
    eduWrap.append(
      document.querySelector('.col-education h3').cloneNode(true),
      document.querySelector('.col-education .nested-table').cloneNode(true)
    )
    mobile.append(eduWrap)

    // 7. Experience
    const expWrap = document.createElement('div')
    expWrap.className = 'mobile-experience'
    expWrap.append(
      document.querySelector('.col-experience h3').cloneNode(true),
      document.querySelector('.col-experience .nested-table').cloneNode(true)
    )
    mobile.append(expWrap)

    // 8. Projects
    const projWrap = document.createElement('div')
    projWrap.className = 'mobile-projects'
    projWrap.append(
      document.querySelector('.col-projects h3').cloneNode(true),
      document.querySelector('.col-projects .nested-table').cloneNode(true)
    )
    mobile.append(projWrap)

    // 9. Skills
    const skillWrap = document.createElement('div')
    skillWrap.className = 'mobile-skills'
    skillWrap.append(
      document.querySelector('.col-skills h3').cloneNode(true),
      document.querySelector('.col-skills ul').cloneNode(true)
    )
    mobile.append(skillWrap)

    // 10. Languages
    const langWrap = document.createElement('div')
    langWrap.className = 'mobile-languages'
    langWrap.append(
      document.querySelector('.languages h3').cloneNode(true),
      document.querySelector('.languages ul').cloneNode(true)
    )
    mobile.append(langWrap)

    // 11. Courses
    const courseWrap = document.createElement('div')
    courseWrap.className = 'mobile-courses'
    courseWrap.append(
      document.querySelector('.courses h3').cloneNode(true),
      document.querySelector('.courses ul').cloneNode(true)
    )
    mobile.append(courseWrap)

    // 12. Certificates
    const certWrap = document.createElement('div')
    certWrap.className = 'mobile-certificates'
    certWrap.append(
      document.querySelector('.col-certificates h3').cloneNode(true),
      document.querySelector('.col-certificates ul').cloneNode(true)
    )
    mobile.append(certWrap)

    // 13. Software
    const softWrap = document.createElement('div')
    softWrap.className = 'mobile-software'
    softWrap.append(
      document.querySelector('.software h3').cloneNode(true),
      document.querySelector('.software ul').cloneNode(true)
    )
    mobile.append(softWrap)

    // 14. Hobbies
    const hobWrap = document.createElement('div')
    hobWrap.className = 'mobile-hobbies'
    hobWrap.append(
      document.querySelector('.hobbies h3').cloneNode(true),
      document.querySelector('.hobbies .icons').cloneNode(true)
    )
    mobile.append(hobWrap)

    // 15. Footer bar
    const ftr = document.createElement('div')
    ftr.className = 'mobile-footer'
    mobile.append(ftr)

    // inject & hide original
    document.body.insertBefore(mobile, table)
    table.style.display = 'none'
  }

  function destroyMobileView() {
    const mob = document.querySelector('.mobile-cv')
    if (mob) {
      mob.remove()
      table.style.display = ''
    }
  }

  function handleResize() {
    if (window.innerWidth <= 768) buildMobileView()
    else destroyMobileView()
  }

  // init
  handleResize()
  window.addEventListener('resize', handleResize)
})
