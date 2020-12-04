document.addEventListener( 'DOMContentLoaded', function () {
    new Splide( '#image-slider', {
        type   : 'loop',
        padding: {
            right: '5rem',
            left : '5rem',
        },
        } ).mount();

        new Splide( '#image-slider-2', {
            type   : 'loop',
            padding: {
                right: '5rem',
                left : '5rem',
            },
            } ).mount();
});
