import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'portfolio-v2';



  constructor() { }
  

  ngOnInit(): void {

    let mouseCursor = document.getElementById('cursor')!;

    window.addEventListener('mousemove', e => {
      mouseCursor.style.top = e.pageY + 'px';
      mouseCursor.style.left = e.pageX + 'px';
      console.log(e.pageY);
      console.log(e.pageX);
    })
  }
}
