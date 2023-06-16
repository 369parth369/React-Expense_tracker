import './App.css';
import { useState } from 'react';


import { Typography, styled, Box } from '@mui/material';
// components
import Balance from './components/Balance';
import ExpenseCard from './components/ExpenseCard';
import NewTransaction from './components/NewTransaction';
import Transactions from './components/Transactions';

const Header = styled(Typography)`
  // margin: 10px 0;
  font-size: 36px;
  color: #005fc4;
  // text-transform: uppercase;
`

const Component = styled(Box)`
display: flex;
background: #f6f6f6;
width: 800px;
padding: 10px;
border-radius: 10px;
margin: auto;
& > div {
  // height: 72vh;
  width: 50%;
  padding: 10px;
}
`

function App() {

  const [transactions, setTransactions] = useState([
   
    { id: 1, text: 'salary', amount: 35000 },
    { id: 2, text: 'dinner', amount: -200 }
   
  ]);   // in this array [] object saved {}

  return (
    <Box className="App">
        <Header>Expense Tracker</Header>
        <Component>
          <Box>
            <Balance transactions={transactions}/>
            <ExpenseCard transactions={transactions}></ExpenseCard>
            <NewTransaction setTransactions={setTransactions}/>
          </Box>
          <Box style={{ flex: 1 }}>
            <Transactions transactions={transactions} setTransactions={setTransactions}/>
          </Box>
        </Component>
    </Box>
  );
}

export default App;
