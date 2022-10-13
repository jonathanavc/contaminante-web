import { createTheme } from '@mui/material/styles';

export const ThemeApp = createTheme({
    palette: {
        primary: {
            light: '#ffa477',
            main: '#FF724A',
            dark: '#c6411f',
            contrastText: '#fff',
        },
        secondary: {
            light: '#ffffff',
            main: '#d9d9d9',
            dark: '#a8a8a8',
            contrastText: '#000',
        },
        white: {
            main: '#ffff'
        }
    },
});