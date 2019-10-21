import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpS: HttpService, private router: Router) { }
  private text;

  private films;
  private count: number;
  private bool = false;

  ngOnInit() {
  }

  sendMessage() {

    this.count = 1;
    this.httpS.sendMessage({ text: this.text, num: this.count }).subscribe((val: any) => {

      this.films = val.Search;

      if (val.Search.length < 3) {
        this.bool = false;
      }
      else if (val.Search.length >= 3) {
        this.bool = true;
      }

    })

  }

  sendMessage2() {
    this.count++;

    this.httpS.sendMessage({ text: this.text, num: this.count }).subscribe((val: any) => {
      console.log(val)
      this.films = val.Search;
    })


  }


}
