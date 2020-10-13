import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Lead } from 'src/app/models/Lead'

@Injectable({ providedIn: 'root' })


export class LeadService {
    constructor(private http: HttpClient) {

    }

    insertLeadData(lead: Lead)  {
        return this.http.post(`${ environment.apiUrl }/Lead/Apply`, lead)
        .pipe(map(data => {
            return data;
        }));
    }
}