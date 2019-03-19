import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//In order to use the components in the Routes[], we have to import the apps first
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

//These define the routes we have set from the header
//For url parameters in the path do "path/:parameter"
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
