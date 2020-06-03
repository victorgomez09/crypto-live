import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApiResponse } from '../models/api-response';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    apiUrl: ''

    constructor(private http: HttpClient) { }

    fetchCryptoData(currency) {
        return this.http.get<[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C7d`);
    }
}
