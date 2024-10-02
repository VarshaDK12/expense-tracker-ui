import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent implements OnInit {
  incomeForm:FormGroup;
  incomes:any=[
    {
      "id":1,
      "income_type": "Food",
      "income_val": 150,
      "income_date": "2024-10-01"
  },
  {
    "id":2,
    "income_type": "Shopping",
    "income_val": 2200,
    "income_date": "2024-09-31"
}
  ]
  addIncomeClicked:boolean =false
  ngOnInit(): void {
    console.log("Add income comp")
  }

  constructor(private fb:FormBuilder){
    this.incomeForm= this.fb.group({
      income_type:['', Validators.required],
      income_val:['', Validators.required],
      income_date:['', Validators.required]
    })
  }
  onClickAddIncome(e:any){
    this.addIncomeClicked=!this.addIncomeClicked
  }
  addIncome(){
    console.log(this.incomeForm.value)
  }

}
