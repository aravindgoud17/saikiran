import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { TableComponent } from './table/table.component';
import { Practice1Component } from './practice1/practice1.component';
import { AravindComponent } from './aravind/aravind.component';
import { KiranComponent } from './kiran/kiran.component';
import { SaiComponent } from './sai/sai.component';
import { CricketComponent } from './cricket/cricket.component';

const routes: Routes = [
  { path: 'kiran', component: KiranComponent },
  { path: 'practice1', component: Practice1Component },
  { path: 'table', component: TableComponent },
  { path: 'sai', component: SaiComponent },
  { path: 'aravind', component: AravindComponent },
  { path: 'cricket', component: CricketComponent },
  Shell.childRoutes([{ path: 'about', loadChildren: () => import('./about/about.module').then((m) => m.AboutModule) }]),
  // Fallback when no prior route is matched

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
