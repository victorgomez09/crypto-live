import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { ApiService } from '../../service/api.service';
import { tableHeaders } from '../../models/table-headers';

interface TableHeaders {
    name: string
    data: string
}

interface Crypto {
    ath: number
    ath_change_percentage: number
    ath_date: string
    atl: number
    atl_change_percentage: number
    atl_date: string
    circulating_supply: number
    current_price: number
    high_24h: number
    id: string
    image: string
    last_updated: string
    low_24h: number
    market_cap: number
    market_cap_change_24h: number
    market_cap_change_percentage_24h: number
    market_cap_rank: number
    name: string
    price_change_24h: number
    price_change_percentage_24h: number
    roi: string
    symbol: string
    total_supply: number
    total_volume: number
}

@Component({
    selector: 'app-crypto-home',
    templateUrl: './crypto-home.component.html',
    styleUrls: ['./crypto-home.component.scss']
})
export class CryptoHomeComponent implements OnInit {

    tableHeaders: TableHeaders[]
    cryptoData: Crypto[]
    cryptoDataChanged: Crypto[]
    currency: string
    sortAscending: string
    sortedColumn: TableHeaders
    iterableDiffer

    constructor(private apiService: ApiService, @Inject(DOCUMENT) document) { }

    fetchCryptoData() {
        this.apiService.fetchCryptoData(this.currency)
            .subscribe(response => {
                this.cryptoData = response
            });
        this.fetchTimer();
    }

    formatAmount(amount) {
        const options = { style: 'currency', currency: this.currency };
        const numberFormatter = new Intl.NumberFormat('en-US', options);
        return numberFormatter.format(amount);
    }

    formatValue(value) {
        return new Intl.NumberFormat().format(value);
    }

    formatSymbol(symbol) {
        return symbol.toUpperCase();
    }

    formatPercentage(percentage) {
        return Math.round(percentage * 100) / 100
    }

    checkPercentage(percentage: string) {
        if (percentage.toString().startsWith('-')) {
            return "text-right text-danger"
        }
        return "text-right text-success"
    }

    sortTable(column) {
        this.sortedColumn = column;
        this.sortAscending = this.sortAscending === 'Ascendente' ? 'Descendente' : 'Ascendente';
        if (this.sortAscending === 'Ascendente') {
            this.cryptoData.sort((a, b) => 0 - (a[column.data] > b[column.data] ? -1 : 1))
        } else {
            this.cryptoData.sort((a, b) => 0 - (a[column.data] > b[column.data] ? 1 : -1))
        }
    }

    setHeaderStyle(header) {
        let finalClass = "pointer border-top border-bottom";
        if (header !== 'market_cap_rank' && header !== 'name') {
            finalClass += " text-right"
        }
        return finalClass;
    }

    setSortIconHeader(header) {
        if (header === this.sortedColumn.data) {
            if (this.sortAscending === 'Ascendente') {
                return "fa fa-chevron-up";
            } else {
                return "fa fa-chevron-down";
            }
        }
    }

    changeCurrency(currency) {
        this.currency = currency;
        this.fetchCryptoData();
    }

    fetchTimer() {
        window.setInterval(() =>
            this.apiService.fetchCryptoData(this.currency)
                .subscribe(response => {
                    Promise.all(response.map((ne, i) => {
                        if (this.cryptoData[i]['current_price'] !== ne['current_price']) {
                            if (this.cryptoData[i]['current_price'] <= ne['current_price'])
                                document.getElementById('current_price' + i).className += " colour-fade-success";
                            else
                                document.getElementById('current_price' + i).className += " colour-fade-danger";
                            this.cryptoData[i]['current_price'] = ne['current_price']
                        } else if (this.cryptoData[i]['market_cap'] !== ne['market_cap']) {
                            if (this.cryptoData[i]['market_cap'] <= ne['market_cap'])
                                document.getElementById('market_cap' + i).className += " colour-fade-success";
                            else
                                document.getElementById('market_cap' + i).className += " colour-fade-danger";
                            this.cryptoData[i]['market_cap'] = ne['market_cap']
                        } else if (this.cryptoData[i]['circulating_supply'] !== ne['circulating_supply']) {
                            if (this.cryptoData[i]['circulating_supply'] <= ne['circulating_supply'])
                                document.getElementById('circulating_supply' + i).className += " colour-fade-success";
                            else
                                document.getElementById('circulating_supply' + i).className += " colour-fade-danger";
                            this.cryptoData[i]['circulating_supply'] = ne['circulating_supply']
                        } else if (this.cryptoData[i]['total_volume'] !== ne['total_volume']) {
                            if (this.cryptoData[i]['total_volume'] <= ne['total_volume'])
                                document.getElementById('total_volume' + i).className += " colour-fade-success";
                            else
                                document.getElementById('total_volume' + i).className += " colour-fade-danger";
                            this.cryptoData[i]['total_volume'] = ne['total_volume']
                        } else if (this.cryptoData[i]['price_change_percentage_1h_in_currency'] !== ne['price_change_percentage_1h_in_currency']) {
                            this.cryptoData[i]['price_change_percentage_1h_in_currency'] = ne['price_change_percentage_1h_in_currency']
                        } else if (this.cryptoData[i]['price_change_percentage_24h'] !== ne['price_change_percentage_24h']) {
                            this.cryptoData[i]['price_change_percentage_24h'] = ne['price_change_percentage_24h']
                        } else if (this.cryptoData[i]['price_change_percentage_7d_in_currency'] !== ne['price_change_percentage_7d_in_currency']) {
                            this.cryptoData[i]['price_change_percentage_7d_in_currency'] = ne['price_change_percentage_7d_in_currency']
                        }
                    }))
                })
            , 10000)
    }

    ngOnInit() {
        this.tableHeaders = tableHeaders;
        this.sortedColumn = this.tableHeaders[0];
        this.currency = 'usd';
        this.sortAscending = 'Ascendente';
        this.fetchCryptoData();
    }
}
