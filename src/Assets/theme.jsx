const size = {
    mobile: '767px',
    tablet: '768px',
    desktop: '992px'
}

const theme = {
    //primaryColor: 'blue',
    mobile: `(min-width: ${size.mobile})`,
    tablet: `(min-width: ${size.tablet})`,
    desktop: `(min-width: ${size.desktop})`
}

export default theme;