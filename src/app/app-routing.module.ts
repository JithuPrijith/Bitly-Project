import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponentComponent } from './components/search-component/search-component.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path:'',component:SearchComponentComponent},
  {path:'table',component:TableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
