import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthorsService } from '../../../services/authors.service';

@Component({
  selector: 'app-dialog-author',
  templateUrl: './dialog-author.component.html',
  styleUrls: ['./dialog-author.component.scss']
})
export class DialogAuthorComponent {

  firstName: string;
  lastName: string;
  id: number;
  mode: string;

  constructor(public dialogRef: MatDialogRef<DialogAuthorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authorService: AuthorsService) {

    this.mode = data.mode;
    this.firstName = data.firstName || '';
    this.lastName = data.lastName || '';
    this.id = data.id || 0;
  }

  onCancel(): void {
    this.dialogRef.close();
  }


  updateAuthor(): void {

    this.authorService.updateAuthor(this.id, this.firstName, this.lastName).subscribe({
      next: (response: any) => {
        // Handle successful response, if needed
        console.log('Author updated:', response.data.updateAuthor);
        this.dialogRef.close(1);
      }, // completeHandler
      error: (error: any) => {
        console.error('Error updating author:', error);
        this.dialogRef.close(0);
      },    // errorHandler 
    });

  }

  createAuthor(): void {

    this.authorService.createAuthor(this.firstName, this.lastName).subscribe({
      next: (response: any) => {
        // Handle successful response, if needed
        console.log('Author created:', response.data.createAuthor);
        this.dialogRef.close(1);
      }, // completeHandler
      error: (error: any) => {
        this.dialogRef.close(0);
        console.error('Error creating author:', error);
      },    // errorHandler 
    });

  }

}
