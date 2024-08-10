import { Component } from '@angular/core';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrl: './file-preview.component.scss'
})
export class FilePreviewComponent {
  uploadedFiles: any[] = [];
  selectedFile: any = null;

  onFileSelected(event: any) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedFiles.push({
          name: file.name,
          type: file.type,
          url: e.target.result,
        });
      };
      reader.readAsDataURL(file);
    }
  }

  openModal(file: any) {
    this.selectedFile = file;
  }

  closeModal() {
    this.selectedFile = null;
  }
}
