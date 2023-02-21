import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import {MatTableModule} from '@angular/material/table';
import { TableRoutingModule } from "./table-routing.module";


@NgModule({
    declarations : [
       TableComponent
    ],
    imports : [
        MatTableModule,
        TableRoutingModule
    ]
})

export class TableModule {

}