import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin.component';

@NgModule({
    declarations: [SigninComponent],
    imports: [CommonModule],
    exports: [SigninComponent],
})
export class SigninModule { }