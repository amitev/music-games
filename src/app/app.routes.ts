import { Routes } from '@angular/router';
import {Scales} from './games/scales/scales';
import {Chords} from './games/chords/chords';

export const routes: Routes = [
  { path: 'scales', component: Scales },
  { path: 'chords', component: Chords },
];
