import { Component } from '@angular/core';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularSpring';
  myObservable = new Observable((observer) => {
    console.log('Observable Starts');
    observer.next('1');
    observer.next('2');
    observer.next('3');
    observer.next('4');
    observer.next('5');
  });
  ngOnInit(): void {
    this.myObservable.subscribe((val) =>{
      console.log(val);})
    }

}
