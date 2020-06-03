import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { CryptoHomeComponent } from './views/crypto-home/crypto-home.component';
import { CryptoInfoComponent } from './views/crypto-info/crypto-info.component';
import { WebHomeComponent } from './views/web-home/web-home.component';

@NgModule({
    declarations: [
        CryptoHomeComponent,
        CryptoInfoComponent,
        WebHomeComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [WebHomeComponent]
})
export class AppModule { }
