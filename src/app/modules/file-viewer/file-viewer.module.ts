import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileViewerRoutingModule } from './file-viewer-routing.module';
import { ImageViewerModule } from '@mindbowser_inc/ng-ineers-file-viewer';
import { FilePreviewComponent } from './file-preview/file-preview.component';


@NgModule({
  declarations: [FilePreviewComponent],
  imports: [
    CommonModule,
    FileViewerRoutingModule,
    ImageViewerModule
  ]
})
export class FileViewerModule { }
