import "styled-components";

const theme = {
    font: {
        family: {
            primary: "HelveticaNowDisplay, sans-serif",
            secondary: "'SangBleu'",
            mobile: {
                h1: "'Quicksand', serif;",
                h2: "'Quicksand', serif;",
                h3: "'Quicksand', serif;",
                h4: "'Quicksand', serif;",
                h5: "'Quicksand', serif;",
                h6: "'Quicksand', serif;",
                p: "'Quicksand', sans-serif",
            },
            tablet: {
                h1: "'Quicksand', serif;",
                h2: "'Quicksand', serif;",
                h3: "'Quicksand', serif;",
                h4: "'Quicksand', serif;",
                h5: "'Quicksand', serif;",
                h6: "'Quicksand', serif;",
                p: "'Quicksand', sans-serif",
            },
            desktop: {
                h1: "'Quicksand', serif;",
                h2: "'Quicksand', serif;",
                h3: "'Quicksand', serif;",
                h4: "'Quicksand', serif;",
                h5: "'Quicksand', serif;",
                h6: "'Quicksand', serif;",
                p: "'Quicksand', sans-serif",
            },
        },
        sizes: {
            mobile: {
                h1: "2.25rem",
                h2: "1.875rem",
                h3: "1.375rem",
                h4: "1.125rem",
                h5: "1rem",
                h6: "0.875rem",
                large: "1rem",
                p: "1rem",
            },
            tablet: {
                h1: "2.5rem",
                h2: "1.875rem",
                h3: "1.375rem",
                h4: "1.125rem",
                h5: "1rem",
                h6: "0.875rem",
                large: "1rem",
                p: "1rem",
            },
            desktop: {
                h1: "3.25rem",
                h2: "2.5rem",
                h3: "1.75rem",
                h4: "1.25rem",
                h5: "1.125rem",
                h6: "1rem",
                large: "1.125rem",
                p: "1rem",
            }
        },
        weights: {
            mobile: {
                h1:     "700",
                h2:     "700",
                h3:     "700",
                h4:     "700",
                h5:     "700",
                h6:     "400",
                bold:   "600",
                p:      "300",
            },
            tablet: {
                h1:     "700",
                h2:     "700",
                h3:     "700",
                h4:     "700",
                h5:     "700",
                h6:     "400",
                bold:   "600",
                p:      "300",
            },
            desktop: {
                h1:     "700",
                h2:     "700",
                h3:     "700",
                h4:     "700",
                h5:     "700",
                h6:     "400",
                bold:   "600",
                p:      "300",
            }
        },
        colors: {
            mobile: {
                default:'#FFF',
                h1: '#FFF',
                h2: '#FFF',
                h3: "#FFF",
                h4: "#FFF",
                h5: "#FFF",
                h6: "#333333",
                p:  "#fff",
                a: "#0063B0"
            },
            tablet: {
                default: '#FFF',
                h1: '#FFF',
                h2: '#FFF',
                h3: "#FFF",
                h4: "#FFF",
                h5: "#FFF",
                h6: "#333333",
                p:  "#fff",
                a: "#0063B0"
            },
            desktop: {
                default: '#FFF',
                h1: '#FFF',
                h2: '#FFF',
                h3: "#FFF",
                h4: "#FFF",
                h5: "#FFF",
                h6: "#333333",
                p:  "#fff",
                a: "#0063B0"
            }
        },
    },
    colors: {
        primary: '#102039',
        primaryText: '#102039',
        secondary: '#D69368',
        secondaryText: '#D69368',
        third: '#FF5460',
        thirdText: '#FF5460',
        black: '#000000',
        white: '#ffffff',
        blackText: '#000000',
        gray: '#FEFEFE',
        colorText: '#ffffff',
        whiteText: '#ffffff',
    },
    button: {
        radius: '0px'
    },
    spacing: {
        none: '0px',
        gutter: '24px',
        xxsmall: '4px',
        xsmall: '8px',
        small: '12px',
        medium: '20px',
        large: '32px',
        xlarge: '100px',
        xxlarge: '180px',
    },
    breakPoints: {
        mobile: '639px',
        tablet: '768px',
        desktop: '992px',
        notebook: '1280px',
        large: '1366px',
        wide: '1440px',
        xwide: '1920px',
    },
    border: {
        radius: '4px',
        width: {
            standard: "1px"
        },
        color: {
            standard: '#BDBDBD',
            active: '#FFF'
        }
    },
};


export default theme;