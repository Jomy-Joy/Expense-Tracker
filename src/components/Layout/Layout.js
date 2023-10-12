import React from "react";
import Cards from "../Cards/Cards";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Layout(props) {
  const { data,onDeleteExpense } = props;
  
  
  //new
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {data.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <Cards
              name={item.expenseName}

              description={item.description}
              currency={item.currency}
              amount={item.amount}
              date={item.date}
              deleteExpense={onDeleteExpense}

            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Layout;
