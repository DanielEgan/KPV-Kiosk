import { provideRouter, RouterConfig } from '@angular/router';
import { KidSelectComponent } from "./kid-select.component/kid-select.component";
import { ValidateComponent } from "./validate.component/validate.component";

const routes: RouterConfig = [
  { path: '', component: KidSelectComponent },
  { path: 'select', component: KidSelectComponent },
  { path: 'validate/:id', component: ValidateComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];