import React, { useState } from "react";
import Cards from "../Cards/Cards";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

function Layout({expenses,setExpenses}) {
  

  // Function to delete an expense by name
  const deleteExpense = (expenseName) => {
    const updatedExpenses = expenses.filter((expense) => expense.expenseName !== expenseName);
    setExpenses(updatedExpenses);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 2, sm: 8, md: 12 }}
      >
        {expenses.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <Cards
              name={item.expenseName}
              description={item.description}
              currency={item.currency}
              amount={item.amount}
              date={item.date}
              id={item.id}
              onDelete={deleteExpense} // Pass the delete function
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Layout;