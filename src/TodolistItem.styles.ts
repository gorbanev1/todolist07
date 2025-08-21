import {SxProps, Theme} from '@mui/material/styles';

export const containerSx: SxProps<Theme> = (theme) => ({
    display: "flex",
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: '1980px',
    margin: 0,
    [theme.breakpoints.up('xl')]: { // xl соответствует 1536px в стандартной теме
        // Ваши стили для 1536px+
        maxWidth: "100%", // пример изменения
    }
});

export const getListItemSx = (isDone: boolean): SxProps=>({
    p: 0,
    justifyContent: 'space-between',
    opacity: isDone? 0.5: 1,
})