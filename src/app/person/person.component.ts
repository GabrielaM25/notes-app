import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    

  }
 onSelect(id){
   this.router.navigate(['/person',id] );
 }
}
