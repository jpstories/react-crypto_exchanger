import React from 'react';
import { CryptoTable, ConverterBlock } from './components';
import axios from 'axios';
import { TCoin } from './types';
import { useStyles } from './styles';

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
      })
  }, [classes])

  return (
    <div className="wrapper">
      <CryptoTable items={allCoins} classes={classes} />
      <ConverterBlock classes={classes}/>
    </div>
  );
}

export default App;

//merge - слияние изменений из какой ветки репозитория с этой же веткой этого репозитория