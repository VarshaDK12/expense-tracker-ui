import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent implements OnInit {
  expenseForm:FormGroup;
  expenses:any=[
    {
      "id":1,
      "expense_type": "Food",
      "expense_val": 150,
      "expense_date": "2024-10-01"
  },
  {
    "id":2,
    "expense_type": "Shopping",
    "expense_val": 2200,
    "expense_date": "2024-09-31"
},
{
  "id":1,
  "expense_type": "Food",
  "expense_val": 150,
  "expense_date": "2024-10-01"
},
{
"id":2,
"expense_type": "Shopping",
"expense_val": 2200,
"expense_date": "2024-09-31"
},
{
  "id":1,
  "expense_type": "Food",
  "expense_val": 150,
  "expense_date": "2024-10-01"
},
{
"id":2,
"expense_type": "Shopping",
"expense_val": 2200,
"expense_date": "2024-09-31"
},
{
  "id":1,
  "expense_type": "Food",
  "expense_val": 150,
  "expense_date": "2024-10-01"
},
{
"id":2,
"expense_type": "Shopping",
"expense_val": 2200,
"expense_date": "2024-09-31"
},
{
  "id":1,
  "expense_type": "Food",
  "expense_val": 150,
  "expense_date": "2024-10-01"
},
{
"id":2,
"expense_type": "Shopping",
"expense_val": 2200,
"expense_date": "2024-09-31"
},
{
  "id":1,
  "expense_type": "Food",
  "expense_val": 150,
  "expense_date": "2024-10-01"
},
{
"id":2,
"expense_type": "Shopping",
"expense_val": 2200,
"expense_date": "2024-09-31"
},
{
  "id":1,
  "expense_type": "Food",
  "expense_val": 150,
  "expense_date": "2024-10-01"
},
{
"id":2,
"expense_type": "Shopping",
"expense_val": 2200,
"expense_date": "2024-09-31"
},
{
  "id":1,
  "expense_type": "Food",
  "expense_val": 150,
  "expense_date": "2024-10-01"
},
{
"id":2,
"expense_type": "Shopping",
"expense_val": 2200,
"expense_date": "2024-09-31"
}
  ]
  addExpenseClicked: boolean=false;
  ngOnInit() {
   
  }
   constructor(private fb:FormBuilder){
    this.expenseForm=this.fb.group({
      expense_type:['', Validators.required],
      expense_val:['', Validators.required],
      expense_date:['', Validators.required]
    })
   }
   onClickAddExpense(e:any){
     this.addExpenseClicked = !this.addExpenseClicked
   }
   addExpense(){
    console.log(this.expenseForm.value)
   }
}
