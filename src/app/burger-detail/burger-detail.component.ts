import { BurgerDetail } from './../swagger/model/burgerDetail';
import { BurgersService } from './../swagger/api/burgers.service';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-burger-detail',
  templateUrl: './burger-detail.component.html',
  styleUrls: ['./burger-detail.component.css']
})
export class BurgerDetailComponent implements OnInit {

  burger: BurgerDetail;
  constructor(
    private burgerSerice: BurgersService,
    private location: Location,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getBurger();
  }

  getBurger(): void{
    const id = +this.route.snapshot.paramMap.get('id');
    this.burgerSerice.burgerDetail(id)
    .subscribe( (result) => this.burger = result);
  }
  goBack(): void{
    this.location.back();
  }
}
