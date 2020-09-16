import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Typography from '@material-ui/core/Typography';

const nativeVallet = ['Российский рубль', 'Доллар США', 'Евро', 'Йена', 'Юань'];

type TConverterBlock = {
    classes: any
}

function ConverterBlock({ classes }: TConverterBlock) {
    return (
        <div className="wrap__input">
            <div className="input__vallet-count">

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel htmlFor="component-outlined">Кол-во</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        label="Name"
                        value='1'
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-customized-select-label">Валюта</InputLabel>
                    <Select value={10} id="demo-customized-select" input={<Input />}>
                            <MenuItem value='10'>Биткоин</MenuItem>
                            <MenuItem value='20'>Эфир</MenuItem>
                            <MenuItem value='30'>Эзериум</MenuItem>
                    </Select>
                </FormControl>
            </div>

            <div className="input__vallet-count">
                <FormControl variant="outlined" className={classes.formControl}>
                    <OutlinedInput
                        id="component-outlined"
                        value='75.52'
                        className="input__total"
                    />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <InputLabel id="demo-customized-select-label">Перевести в:</InputLabel>
                    <Select id="demo-customized-select" input={<Input />}>
                        {nativeVallet.map((vallet, index) =>
                            <MenuItem key={`${vallet}_&{index}`} value={index * 10}>{vallet}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </div>

            <div className="input__vallet-total">
                <Typography className={classes.text} variant="h6" component="h6" gutterBottom>
                    <span>75.52</span> Российских рублей
                </Typography>
            </div>
        </div>
    )
}
export default ConverterBlock;
