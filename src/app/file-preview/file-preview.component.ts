import { Component } from '@angular/core';

@Component({
  selector: 'app-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrl: './file-preview.component.scss'
})
export class FilePreviewComponent {
  uploadedImages: { url: string; name: string }[] = [];
  selectedImage: { url: string; name: string } | null = null;

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      for (let file of event.target.files) {
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();

          reader.onload = (e: any) => {
            this.uploadedImages.push({ 
              url: e.target.result, 
              name: file.name 
            });
          };

          reader.readAsDataURL(file);
        }
      }
    }
  }

  openModal(image: { url: string; name: string }) {
    this.selectedImage = image;
  }

  closeModal() {
    this.selectedImage = null;
  }
  // uploadedImages: string[] = [];

  // onFileChange(event: any) {
  //   const files = event.target.files;
  //   if (files) {
  //     for (let i = 0; i < files.length; i++) {
  //       const reader = new FileReader();
  //       reader.onload = (e: any) => {
  //         this.uploadedImages.push(e.target.result);
  //       };
  //       reader.readAsDataURL(files[i]);
  //     }
  //   }
  // }
}
