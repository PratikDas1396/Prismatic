import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })

export class ModelService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;

    constructor(private router: Router) {
    }

    showApplyModel(message: any, keepAfterNavigationChange = false) {
        debugger;
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', obj: message });
    }

    showModal(): Observable<any> {
        return this.subject.asObservable();
    }
    
    showLeadTrackingModel(message: any, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', obj: message });
    }

}