import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })

export class AuthenticateService {
    private currentUserSubject: BehaviorSubject<string>;
    public currentUser: Observable<string>;

    constructor(private http: HttpClient) {
        if (localStorage.getItem('User'))
            this.currentUserSubject = new BehaviorSubject<string>(localStorage.getItem('User'));
        else
            this.currentUserSubject = new BehaviorSubject<string>(null);

        this.currentUserSubject.subscribe((obs) => {
            this.currentUser = this.currentUserSubject.asObservable();
        })
    }

    login(userid: string, password: string) {
        return this.http.post(`${environment.apiUrl}/Authentication/authenticate`, { userid, password })
            .pipe(map(data => {
                return data;
            }));
    }

    SetUser(UserName: string) {
        this.currentUserSubject.next(UserName);
    }

    logout() {
        localStorage.removeItem('User');
        this.currentUserSubject.next(null);
    }
}