import { BurgersService } from './../swagger/api/burgers.service';
import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css']
})
export class BurgerComponent implements OnInit {

  constructor(private burgersService :BurgersService) {   }
  burger;
  @Input() id;

  ngOnInit(): void {
    this.getBurgers(this.id);
  }

  getBurgers(id): void{
    this.burger = this.burgersService.burgerDetail(id);
  }
}
