import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

// Coins table components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
      width: 170
    },
    table: {
      width: '100%'
    },
    currencyIcon: {
      width: '35px',
      marginTop: '5px'
    },
    text: {
      fontSize: 18
    }
  }),
);

type TCoin = {
  name: string,
  fullName: string,
  imageUrl: string,
  price: number,
  volume24Hour: number,
}

function App() {
  const classes = useStyles();
  const [allCoins, setAllCoins] = React.useState<TCoin[]>([]);

  React.useEffect(() => {
    axios.get('https://min-api.cryptocompare.com/data/top/totalvolfull?limit=10&tsym=USD')
      .then(({ data }) => {
        const coins: TCoin[] = data.Data.map((objCoin: any) => {
          const obj: TCoin = {
            name: objCoin.CoinInfo.Name,
            fullName: objCoin.CoinInfo.FullName,
            imageUrl: `https://www.cryptocompare.com/${objCoin.CoinInfo.ImageUrl}`,
            price: objCoin.RAW.USD.PRICE.toFixed(3),
            volume24Hour: parseInt(objCoin.RAW.USD.VOLUME24HOUR)
          }
          return obj;
        })
        setAllCoins(coins);
        console.log(coins);
      })
  }, [classes])

  return (
    <div className="wrapper">
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">

          <TableHead >
            <TableRow className="table__head">
              <TableCell align="right">Coin</TableCell>
              <TableCell align="right">Init</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">24 hour</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {allCoins.map(coin => (
              <TableRow key={coin.name}>
                <TableCell align="right">
                  <img className={classes.currencyIcon} src={coin.imageUrl} alt="" />
                </TableCell>
                <TableCell align="right">{coin.name}</TableCell>
                <TableCell align="right">{coin.fullName}</TableCell>
                <TableCell align="right">{coin.price} $</TableCell>
                <TableCell align="right">{coin.volume24Hour} $</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </TableContainer>

      {/* Input block Top*/}
      <div className="wrap__input">
        <div className="input__vallet-count">

          <FormControl variant="outlined" className={classes.margin}>
            <InputLabel htmlFor="component-outlined">Кол-во</InputLabel>
            <OutlinedInput
              id="component-outlined"
              label="Name"
              value="1" />
          </FormControl>

          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">Валюта</InputLabel>
            <Select value="10" id="demo-customized-select" input={<Input />}>
              <MenuItem value={10}>Bitcoin</MenuItem>
              <MenuItem value={20}>Ephier</MenuItem>
              <MenuItem value={30}>Platinum</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Input block Bottom*/}
        <div className="input__vallet-count">
          <FormControl variant="outlined" className={classes.margin}>
            <OutlinedInput
              id="component-outlined"
              value="75,54"
              className="input__total" 
            />
          </FormControl>

          <FormControl className={classes.margin}>
            <InputLabel id="demo-customized-select-label">Перевести в:</InputLabel>
            <Select value="40" id="demo-customized-select" input={<Input />}>
              <MenuItem value={10}>Bitcoin</MenuItem>
              <MenuItem value={20}>Ephier</MenuItem>
              <MenuItem value={30}>Platinum</MenuItem>
              <MenuItem value={40}>Российский рубль</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* Input total */}
        <div className="input__vallet-total">
          <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
            <span>75,54</span> Российских рублей
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default App;
