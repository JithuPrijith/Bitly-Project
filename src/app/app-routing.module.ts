import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponentComponent } from './components/search-component/search-component.component';
// import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path:'',component:SearchComponentComponent},
  {path:'table', loadChildren: () => import("./components/table/table.module").then(m => m.TableModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
