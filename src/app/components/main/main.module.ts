import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';

//Prrme
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [IndexComponent, MainComponent],
  imports: [CommonModule, CardModule, ButtonModule],
  exports: [MainComponent],
})
export class MainModule {}
