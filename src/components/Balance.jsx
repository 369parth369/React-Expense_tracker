import { Box, Typography, styled } from '@mui/material'
import React from 'react'


const BalanceText = styled(Typography)`
 font-size: 20px;
 margin-bottom: 20px;
`

const Balance = ({transactions}) => {

    const amount = transactions.map(transaction => transaction.amount);  
    const total = amount.reduce((amount, item) =>(amount += item), 0).toFixed(2);

  return (
    <Box>
      <BalanceText>Balance: ₹{total}</BalanceText>
    </Box>
  )
}

export default Balance

// const amount = transactions.map(transaction => transaction.amount);  // [(text,amount)] , [amount, amount, amount] earlier it was array of object, now array value return.. map is js function const amount = transactions.map(transaction => transaction.amount);  