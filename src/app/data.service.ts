import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

  private vegetableNameSource = new BehaviorSubject<string>("");
  //private vegetableNameSource = new Subject<string>();
  currentVegetableName = this.vegetableNameSource.asObservable();

  constructor() { }

  changeVegetableName(vegetable: string) {
    // add data to an observable
    
      this.vegetableNameSource.next(vegetable);
  

  }
}