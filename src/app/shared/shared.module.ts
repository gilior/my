import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { SlidesService } from './slides/slides.service';
import { MediaTableComponent } from './media-table/media-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SlidesComponent,
    MediaTableComponent,
  ],
  exports: [
    SlidesComponent,
    MediaTableComponent,
  ],
  providers: [
    SlidesService
  ]
})
export class SharedModule { }
