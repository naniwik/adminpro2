import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { AuthRoutingModule } from './auth/auth-routing.module';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NopagefoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
    , AuthRoutingModule
    , PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
