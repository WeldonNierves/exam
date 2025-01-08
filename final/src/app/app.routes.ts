import { Routes } from '@angular/router';
import { SetAComponent } from './set-a/set-a.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

export const routes: Routes = [
    {
        path: '',
        component: SetAComponent
    },
    {
        path: 'registration',
        component: RegistrationFormComponent
    }
];
