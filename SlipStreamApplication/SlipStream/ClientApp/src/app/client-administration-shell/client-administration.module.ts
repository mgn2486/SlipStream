import { NgModule } from "@angular/core";
import { GenderPipe } from "../shared/custome-pipes/gender.pipe";
import { ClientService } from "../shared/services/client-service/client.service";
import { AddressComponent } from "./address/address.component";
import { ClientAdministrationComponent } from "./client-administration.component";
import { ClientDetailsComponent } from "./client-details/client-details.component";
import { ClientListComponent } from "./client-list/client-list.component";
import { ClientEditComponent } from './client-edit/client-edit.component';
import { ClientEditGuard } from "./client-edit/client-edit-guard.service";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module/shared.module";

@NgModule({
  declarations: [
    ClientAdministrationComponent,
    ClientListComponent,
    ClientDetailsComponent,
    AddressComponent,
    GenderPipe,
    ClientEditComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(
      [
        { path: '', component: ClientAdministrationComponent },
        { path: ':id', component: ClientDetailsComponent },
        {
          path: ':id/edit',
          canDeactivate: [ ClientEditGuard ],
          component: ClientEditComponent
        }
      ])
  ],
  providers: [
    ClientService,
    ClientEditGuard
  ]
})
export class ClientAdministrationModule { }
