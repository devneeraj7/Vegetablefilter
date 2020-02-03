import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
import { distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  // this array stores the string entered in te search box
  
   searchString:string = "";

  // this array stores the list of vegetables that match the input string of the search box
  vegetables = ["Acorn squash","Anise","Artichoke","Arugula","Asparagus","Banana squash","Basil","Bean sprouts","Beet greens","Beetroot","Black beans","Black-eyed peas","Bok choy","Borlotti bean","Broad beans","Broccoflower","Broccoli","Brussels sprouts","Butternut squash","Cabbage","Calabrese","Caraway","Carrot","Cauliflower","Cayenne pepper","Celeriac","Celery","Chamomile","Chard","Chickpeas","Chili pepper","Chives","Cilantro seeds are Coriander","Collard greens","Corn salad","Courgette","Cucumber","Daikon","Delicata","Dill","Endive","Fennel","Fennel","Fiddleheads","Frisee","Garlic","Gem squash","Ginger","Green beans","Green pepper and Red pepper","Habanero","Herbs and spices","Horseradish","Hubbard squash","Jalapeño","Jerusalem artichoke","Jicama","Kale","Kidney beans","Kohlrabi","Lavender","Leek Allium porrum","Lemon Grass","Lentils","Lettuce Lactuca sativa","Lima beans or Butter bean","Maize","Mangel-wurzel","Marjoram","Marrow","Mung beans","Mushrooms","Mustard greens","Navy beans","Nettles","New Zealand spinach","Okra","Onion","Onion family","Oregano","Paprika","Parsley","Parsnip","Patty pans","Peas","Peppers","Pinto beans","Potato","Pumpkin","Quandon","Radicchio","Radish","Rhubarb","Root vegetables","Rosemary","Runner beans","Rutabaga","Sage","Salsify (usually Purple Salsify or Oyster Plant)","Shallot","Skirret","Soy beans","Spaghetti squash","Spinach","Split peas","Spring onion","Squashes","Sunchokes","Swede","Sweet potato","Tabasco pepper","Taro","Tat soi","Thyme","Topinambur","Tubers","Turnip","Turnip","Turnip greens","Wasabi","Water chestnut","Watercress","White radish","Yam"]

  searchVegetablesList: string[] = this.vegetables;
  
  filteredData : string[];

  constructor(private service: DataService) { }

  ngOnInit() {
    
    this.service.currentVegetableName.subscribe(name =>{
      console.log("Inside",name);
      this.searchString = name;
      
    this.filteredData = this.vegetables.filter(item =>{
        return item.startsWith(this.searchString)
      })
     
      
      this.searchVegetablesList = this.filteredData;

    });

    
  }


}

/* console.log("Inside List:", this.searchString);
    this.filteredData = this.vegetables.filter(item =>{
      return item.match(this.searchString)
    })

    this.searchVegetablesList = this.filteredData;
 */