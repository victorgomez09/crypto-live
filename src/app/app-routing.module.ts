import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CryptoHomeComponent } from '../app/views/crypto-home/crypto-home.component';
import { CryptoInfoComponent } from '../app/views/crypto-info/crypto-info.component';

const routes: Routes = [
    {
        path: "",
        pathMatch: 'full',
        component: CryptoHomeComponent
    },
    {
        path: "info",
        component: CryptoInfoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
