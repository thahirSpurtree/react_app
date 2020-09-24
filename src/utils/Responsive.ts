export const  Responsive = {
    mobile: `375px`,
    tablet: `768px`,
    desktop: `1023px`,
    mobileSm: `425px`,
    mobileValue: 375,
    tabletValue: 768,
    desktopValue: 1023,
    mobileSmValue: 425
};
export const isMobile = () => {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    return width <= Responsive.tabletValue;
}