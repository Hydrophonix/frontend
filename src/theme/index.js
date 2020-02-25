const buttonStyles = {
    cursor:  'pointer',
    border:  'none',
    outline: 'none',
    padding: '0px',
};

export const themes = {
    lightTheme: {
        appStyles: {
            backgroundColor: '#e5e5e5',
        },
        buttonStyles,
        logoColor: '#eb5b78',
        text:      {
            color: '#212121',
        },
    },

    darkTheme: {
        appStyles: {
            backgroundColor: '#292929',
        },
        buttonStyles,
        logoColor: '#e1e1e1',
        text:      {
            color: '#e1e1e1',
        },
    },
};
