import { Component } from '@angular/core';

import { AccountService } from 'src/app/_services/account.service';
import { User } from 'src/app/_models/user';

@Component({ selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
    user!: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }
}