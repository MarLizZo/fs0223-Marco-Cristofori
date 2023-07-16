import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse.component';

const routes: Routes = [
  { path: '', component: BrowseComponent },
  {
    path: 'genres/tv-series',
    loadChildren: () =>
      import('./tv-series/tv-series.module').then((m) => m.TvSeriesModule),
  },
  {
    path: 'genres/movies',
    loadChildren: () =>
      import('./movies/movies.module').then((m) => m.MoviesModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BrowseRoutingModule {}
