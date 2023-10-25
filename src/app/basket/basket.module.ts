import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketComponent } from './basket.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
    declarations: [BasketComponent],
    imports: [CommonModule, SidebarModule],
    exports: [BasketComponent],
})
export class BasketModule { }