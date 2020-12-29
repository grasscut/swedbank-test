export const monetaryFormat = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
};

export const isMobile = () => {
    return window.innerWidth < 600;
};
