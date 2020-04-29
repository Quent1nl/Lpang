import { Burger } from './../swagger/model/burger';
import { Component, OnInit } from '@angular/core';
import { BurgersService } from './../swagger/api/burgers.service';


@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {
  
  burger: Burger[];
 
  constructor(private burgersService :BurgersService) {   }
  

  ngOnInit(): void {
    this.getBurgers();
  }

  getBurgers(): void{
    this.burgersService.listBurgers()
    .subscribe( (result) => this.burger = result);
  }
}
