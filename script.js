
window.addEventListener('load', () => {
    //header sticky
    const headerSticky = document.querySelector('.header_main');
    const topBar = headerSticky.offsetTop;
    window.addEventListener('scroll', () => {
        if (window.scrollY >= topBar) {
            headerSticky.classList.add('sticky')
        } else {
            headerSticky.classList.remove('sticky')
        }
    })

    // search
    const searchIcon = document.querySelector('.header_main__right a img.search')
    const inputText = document.querySelector('.header_main .input_text')
    searchIcon.addEventListener('click', () => {
        inputText.classList.toggle('is_active')
    })

    // add margin top dynamically on main 
    const main_div = document.querySelector('main')
    const main_top = document.querySelector('main').offsetTop;
    const header_height = headerSticky.offsetHeight;

    main_div.style.marginTop = `${header_height}px`;


    // menu asidebar
    const hamburger = document.querySelector('.header_main__left a img');
    const aside = document.querySelector('.asidebar');
    const closeBtn = document.querySelector('.asidebar_header__close_btn');
    const body = document.querySelector('body')
    aside.style.marginTop = `${header_height}px`;

    window.addEventListener('scroll', () => {
        const headerSticky = document.querySelector('.header_main');
        const topBar = headerSticky.offsetTop;
        const header_height = headerSticky.offsetHeight;
        const topbar_height = document.querySelector('.header_topbar').offsetHeight
        console.log(topBar, header_height);
        if (topBar == 0) {
            console.log('hi');
            aside.style.marginTop = `${header_height - topbar_height}px`;
        } else {
            console.log('hello');
            aside.style.marginTop = `${header_height}px`;
        }
    })


    // hamburger 
    hamburger.addEventListener('click', function () {
        aside.classList.toggle('open');
        body.classList.toggle('overflow-h')
    });

    closeBtn.addEventListener('click', function () {
        aside.classList.remove('open')
        body.classList.remove('overflow-h')
    })
})