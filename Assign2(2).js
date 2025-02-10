const expenses = [{desc:"Decorative Items",amt:150.5,date:"2025-02-02"},
    {desc:"Videogames",amt:150.5,date:"2025-02-02"},
    {desc:"Cloths",amt:150.5,date:"2025-02-02"}
];
// console.log(expenses)



const addExpense = (desc, amt, date) => {
  if (!desc || amt <= 0 || isNaN(new Date(date))) return console.log("Invalid input.");
  expenses.push({ desc, amt, date: new Date(date) });
  console.log(`Added: ${desc}, Amount: ${amt}`);
};
// addExpense("Groceries", 150.5, "2025-02-01");
// addExpense("Transport", 50, "2025-02-02");
// console.log(expenses)

const getTotalExpenses = () => console.log(`Total: ${expenses.reduce((sum, e) => sum + e.amt, 0)}`);
// getTotalExpenses();


const filterExpensesByDate = (start, end) => expenses.filter(e => e.date >= new Date(start) && e.date <= new Date(end)).forEach(e => console.log(e));
// filterExpensesByDate("2025-02-01", "2025-02-03");


const fetchExpenseReport = () => setTimeout(() => console.log(expenses.length ? "Report fetched." : "No expenses."), 1000);
// fetchExpenseReport();