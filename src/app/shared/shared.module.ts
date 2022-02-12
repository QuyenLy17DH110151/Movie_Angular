import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

//Prime
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [HeaderComponent, FooterComponent],
  imports: [CommonModule, TabMenuModule, MenubarModule],
  exports: [HeaderComponent, FooterComponent],
})
export class SharedModule {}