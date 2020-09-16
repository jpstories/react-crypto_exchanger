import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TCoin } from '../../types'

type TCryptoTable = {
    items: TCoin[],
    classes: any
}

function CryptoTable({ items, classes }: TCryptoTable) {
    return (
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
                    {items.map(coin => (
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
    )
}

export default CryptoTable;
