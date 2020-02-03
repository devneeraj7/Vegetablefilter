import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../data.service';
@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputData:string="";
  searchForm: FormGroup;
  constructor(private fb: FormBuilder, public service: DataService) { }

  ngOnInit() {
    this.createForm();

     // write a function that calls changeVegetableName upon value change in the form
     
  }

  filterVegetables(event){
    let userInput = this.inputData+=event.key;
    
   // this.service.changeVegetableName(userInput);
   this.service.changeVegetableName(this.searchForm.value.searchVegetable);
   //console.log(this.inputData+=event.key); 
    //console.log(this.searchForm.value.searchVegetable);
  
  }

  // add corresponding validators
  createForm(){
  this.searchForm = this.fb.group({
    searchVegetable: [null,Validators.required]
  });
}

}