/*====================================================
splide輪播套件
====================================================*/
document.addEventListener('DOMContentLoaded', function () {
    new Splide('#topProductsSlider', {
        type: 'slide',
        autoplay: false,
        interval: 3000,
        arrows: false,
        pagination: false,
        perPage: 3,
        gap: '20px',
        breakpoints: {
            1199.98: {        // ~991px
                type: 'slide', 
                arrows: true,
                perPage: 2
            },
            767.98: {        // ~767px
                type: 'slide', 
                arrows: true,
                perPage: 1
            }
        }
    }).mount();
});