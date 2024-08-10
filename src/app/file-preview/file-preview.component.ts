import { Component } from '@angular/core';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrl: './file-preview.component.scss'
})
export class FilePreviewComponent {
  uploadedImages: string[] = [];

  onFileChange(event: any) {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.uploadedImages.push(e.target.result);
        };
        reader.readAsDataURL(files[i]);
      }
    }
  }
}
