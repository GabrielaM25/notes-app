import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonDetailComponent } from './person-detail/person-detail.component';
import { PersonComponent } from './person/person.component';
// import { RoutingExerciseComponent } from './routing-exercise/routing-exercise.component';

const routes: Routes = [
  { path: 'person', component: PersonComponent},
  { path: 'person/:id', component :PersonDetailComponent},
  { path: '**', redirectTo: ''}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
