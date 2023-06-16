import { Box, Button, TextField, Typography, styled } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const Container = styled(Box)`
display: flex;
flex-direction: column;
& > h5, &  > div, & > button {
  margin: 25px 0 0 0; // margin-top: 25px;

}
`

const NewTransaction = ( {setTransactions}) => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState();

  const addTransaction = () => {
          const transaction = {
            id: Math.floor(Math.random() * 100000),
            text: text,
            amount: +amount // +amount because amount returns string function but in expense card we are using amount for arithmetic operation.. so we have to convert string into integar
          }
        setTransactions(prevState =>[transaction, ...prevState]); // for showing the new transaction on top and prev trans below that...
  }

  return (
    
    <Container>
        <Typography variant='h5'>New Transaction</Typography>
        <TextField placeholder='Enter expense detail' onChange={(e) => setText(e.target.value)}/>
        <TextField placeholder='Enter amount' onChange={(e) => setAmount(e.target.value)}/>
        <Button variant='contained' onClick={() => addTransaction()}>Add Transaction</Button>
    </Container>
  )
}

export default NewTransaction


// amount: +amount // +amount because amount returns string function but in expense card we are using amount for arithmetic operation.. so we have to convert string into integar