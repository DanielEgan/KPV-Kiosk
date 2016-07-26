import { provideRouter, RouterConfig } from '@angular/router';
import { KidSelectComponent } from "./kid-select.component/kid-select.component";

const routes: RouterConfig = [
  { path: '', component: KidSelectComponent },
  { path: 'kid-select', component: KidSelectComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];