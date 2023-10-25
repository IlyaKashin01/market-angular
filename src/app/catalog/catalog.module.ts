import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from '../sidebar/sidebar.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
    declarations: [CatalogComponent],
    imports: [CommonModule, SidebarModule],
    exports: [CatalogComponent],
})
export class CatalogModule { }