import React from "react";
import './Layout.css';
import Cards from "../Cards/Cards";
import data from "../../sample-data.json"

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


function Layout() {
    return ( 

<>


<Box sx={{ flexGrow: 1 }}>
<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
  {data.map((item, index) => (
    <Grid item xs={2} sm={4} md={4} key={index}>
    <Cards  name={item.expenseName}  description={item.description} amount={item.amount} date={item.date} />
    </Grid>
  ))}
</Grid>
</Box>
</>


     );
}

export default Layout;