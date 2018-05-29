import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  str: string;
  anotherStr = 'this is another string';
  yetAnotherStr;

  ngOnInit(){
    this.str = 'this is a string';

    // this.anotherStr = 'This is another string';
    // this.anotherStr = 4;
    this.yetAnotherStr = 5;
    this.yetAnotherStr = 'even more strings!';
    this.numberArrayInput([1]);
    this.numberArrayInput([5]);
    this.numberArrayInput([10, 15, 20]);
    this.anyArrayInput([]);
    this.anyArrayInput([5]);
    this.anyArrayInput([10]);
    this.anyArrayInput([5, 10, 12]);
    this.anyArrayInput(['string',5 ]);
  }
test(){
}
numberArrayInput(x: number[]){
console.log(x);
}
anyArrayInput(x: Array<any>){
  console.log(x);
}
}
