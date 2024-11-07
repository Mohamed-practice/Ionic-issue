import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular/standalone';

@Component({
  selector: 'app-time',
  standalone: true,
  imports: [IonDatetime],
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
  routeBack(){
    this.router.navigate(['/home']);
   }
}
