import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientAdministrationComponent } from "./client-administration.component";
import { ClientDetailsComponent } from "./client-details/client-details.component";
import { ClientEditGuard } from "./client-edit/client-edit-guard.service";
import { ClientEditComponent } from "./client-edit/client-edit.component";

const routes: Routes =[] ;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientAdminRoutingModule { }
