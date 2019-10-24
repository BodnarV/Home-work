import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  private objFilm;

  constructor(private dataS: DataService ,private router:Router) { }

  ngOnInit() {
    this.objFilm = this.dataS.Film()
  }

  add(obj) {
    
    //==========Set film in LocalStorage
    let localStoregItems: Array<any>;

    if (localStorage.getItem('collection') != null) {
      localStoregItems = JSON.parse(localStorage.getItem('collection'));

    } else {
      localStoregItems = [];
    }
      obj.favorite = true;
      
      localStoregItems.push(obj);
      console.log(localStoregItems);
      localStorage.setItem('collection', JSON.stringify(localStoregItems));
      
    //   
  }

  back(){
   this.router.navigate([''])
  }
}
