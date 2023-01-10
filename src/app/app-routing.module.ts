import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InquilinosComponent } from './pages/inquilinos/inquilinos.component';
import { AboutComponent } from './pages/about/about.component';
import { LocalesComponent } from './pages/locales/locales.component';

const routes: Routes = [
  { path: 'home', component: InquilinosComponent },
  { path: 'about', component: AboutComponent},
  { path: 'locales', component: LocalesComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
