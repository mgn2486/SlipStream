import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAdministrationComponent } from './client-administration-shell/client-administration.component';
import { ClientEditComponent } from './client-administration-shell/client-edit/client-edit.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
            {
                path: '',
                component: ShellComponent,
                children: [
                    { path: 'home', component: HomeComponent },
                    {
                      path: 'clients',
                      // canActivate: [AuthGuard],
                      loadChildren: () => import('./client-administration-shell/client-administration.module').then(m => m.ClientAdministrationModule)
                    },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                ]
            },
            { path: '**', component: PageNotFoundComponent }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
