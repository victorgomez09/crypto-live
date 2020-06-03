import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-web-home',
    templateUrl: './web-home.component.html',
    styleUrls: ['./web-home.component.scss']
})
export class WebHomeComponent implements OnInit {

    constructor() { }

    changeBackgroundColor() {
        let body = document.getElementById('body');
        if (body.className === 'body-black')
            body.className = "body-white"
        else
            body.className = "body-black"
        let theme = document.getElementById('theme');
        if (theme.className === 'ml-2 pointer theme background-white')
            theme.className = "ml-2 pointer theme background-black"
        else
            theme.className = "ml-2 pointer theme background-white"
        let navbar = document.getElementById('navbar');
        if (navbar.className === 'navbar navbar-expand-lg navbar-dark')
            navbar.className = "navbar navbar-expand-lg navbar-light"
        else
            navbar.className = "navbar navbar-expand-lg navbar-dark"
        let table = document.getElementById('table');
        if (table) {
            if (table.className === 'table table-sm table-black table-borderless')
                table.className = "table table-sm table-white table-borderless"
            else
                table.className = "table table-sm table-black table-borderless"
        }
        let btnUsd = document.getElementById('usd');
        if (btnUsd) {
            if (btnUsd.className === 'btn btn-primary btn-black mr-1')
                btnUsd.className = "btn btn-primary btn-white mr-1"
            else
                btnUsd.className = "btn btn-primary btn-black mr-1";
        }
        let btnEur = document.getElementById('eur');
        if (btnEur) {
            if (btnEur.className === 'btn btn-primary btn-black mr-1')
                btnEur.className = "btn btn-primary btn-white mr-1"
            else
                btnEur.className = "btn btn-primary btn-black mr-1";
        }
        let btnKrw = document.getElementById('krw');
        if (btnKrw) {
            if (btnKrw.className === 'btn btn-primary btn-black mr-1')
                btnKrw.className = "btn btn-primary btn-white mr-1"
            else
                btnKrw.className = "btn btn-primary btn-black mr-1";
        }
        let btnBtc = document.getElementById('btc');
        if (btnBtc) {
            if (btnBtc.className === 'btn btn-primary btn-black mr-1')
                btnBtc.className = "btn btn-primary btn-white mr-1"
            else
                btnBtc.className = "btn btn-primary btn-black mr-1";
        }
        let btnEth = document.getElementById('eth');
        if (btnEth) {
            if (btnEth.className === 'btn btn-primary btn-black mr-1')
                btnEth.className = "btn btn-primary btn-white mr-1"
            else
                btnEth.className = "btn btn-primary btn-black mr-1";
        }
        let info = document.getElementById('info');
        if (info) {
            if (info.className === 'info-black')
                info.className = "info-white"
            else
                info.className = "info-black";
        }
    }

    ngOnInit() {
        document.getElementById('body').className = "body-black";
    }

}
