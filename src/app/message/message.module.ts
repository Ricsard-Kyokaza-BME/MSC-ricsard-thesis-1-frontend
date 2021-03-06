import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {MessagesComponent} from './messages/messages.component';
import {IsLoggedInGuard} from '../guards/is-logged-in.guard';
import {SdCommonModule} from "../sd-common/sd-common.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SdCommonModule,
        RouterModule.forChild([
            {path: '', component: MessagesComponent, pathMatch: 'full', canActivate: [IsLoggedInGuard]},
        ])
    ],
    declarations: [MessagesComponent]
})
export class MessageModule {
}
