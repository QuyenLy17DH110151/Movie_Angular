import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/main/about/about.component';
import { MainComponent } from './components/main/main/main.component';
import { PersonComponent } from './components/main/person/person.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  {
    path: 'home',
    component: MainComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'person',
    component: PersonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
