import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { MainComponent } from './main/main.component';

//Prrme
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DetailComponent } from './detail/detail.component';
import { FieldsetModule } from 'primeng/fieldset';
import { YtPlayerAngularModule } from 'yt-player-angular';

@NgModule({
  declarations: [IndexComponent, MainComponent, DetailComponent],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    DataViewModule,
    DialogModule,
    DynamicDialogModule,
    FieldsetModule,
    YtPlayerAngularModule,
  ],
  exports: [MainComponent],
})
export class MainModule {}
