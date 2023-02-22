import { NgModule } from "@angular/core";
import { TableComponent } from "./table.component";
import {MatTableModule} from '@angular/material/table';
import { TableRoutingModule } from "./table-routing.module";
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations : [
       TableComponent
    ],
    imports : [
        MatTableModule,
        TableRoutingModule,
        MatButtonModule
    ]
})

export class TableModule {

}
