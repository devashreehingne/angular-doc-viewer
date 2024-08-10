import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilePreviewComponent } from './file-preview/file-preview.component';

const routes: Routes = [
  {
    path: "file",
    component: FilePreviewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
