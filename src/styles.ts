import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    text: {
      fontSize: '16px'
    },
    table: {
      width: '100%'
    },
    currencyIcon: {
      width: '35px',
      marginTop: '5px'
    }
  }),
);