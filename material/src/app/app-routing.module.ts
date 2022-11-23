import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { MasterComponent } from './master/master.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DashboardTestComponent } from './dashboard-test/dashboard-test.component';
import { Table } from './table/table.component';
import { EditComponent } from './edit/edit.component';
import { CanActiveComponent } from './can-active/can-active.component';
import { ProductsService } from './Products.service';
import { AuthentServiceService } from './authent-service.service';
import { XandOComponent } from './xand-o/xand-o.component';



const routes: Routes = [{
  path: '', component: MasterComponent},
  //children: [

  //  { path: 'detail', component: DetailComponent },
  //  { path: 'master', component: MasterComponent },
  //  { path: 'Dashboard', component: DashboardTestComponent },
  //  { path: 'table', component: TableMaterialComponent }

  //]
  { path: 'canActive', component: CanActiveComponent, canActivate: [AuthentServiceService]},
  { path: 'edit/:id', component: EditComponent },
  { path: 'XandO', component: XandOComponent },

  { path: 'table', component: Table, children: [] },
  { path: 'test', redirectTo: '/', pathMatch:'full' },
  
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing:true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
