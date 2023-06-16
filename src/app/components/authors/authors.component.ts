import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { DialogAuthorComponent } from '../dialog/dialog-author/dialog-author.component';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';

import { AuthorsService } from '../../services/authors.service';

// TODO: Replace this with your own data model type
export interface AuthorsItem {
  id: number;
  firstName: string;
  lastName: string;
  bookRecords: BookItem[];
}

export interface BookItem {
  id: number;
  title: string;
  author: AuthorsItem;
}

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements AfterViewInit, OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AuthorsItem>;
  dataSource: any;
  private subscription: Subscription = new Subscription;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'firstName', 'lastName', 'update', 'delete'];

  constructor(public dialog: MatDialog, private authorService: AuthorsService) { }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.getAllAuthors();
  }

  getAllAuthors(): void {

    this.subscription = this.authorService.getAllAuthors().subscribe({
      next: (response: any) => {
        // Handle successful response, if needed
        this.dataSource = new MatTableDataSource(response.data.getAllAuthors);
        this.table.dataSource = this.dataSource;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: (error: any) => {
        console.error('Error updating author:', error);
      },    // errorHandler 
    });

  }

  deleteAuthor(id: number): void {

    this.authorService.deleteAuthor(id).subscribe({
      complete: () => {
        console.log('Author deleted');
        this.getAllAuthors();

      }, // completeHandler
      error: (error: any) => {
        console.error('Error deleting author:', error);
      },    // errorHandler 
    });

  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, mode: string, row?: any): void {
    const dialogRef = this.dialog.open(DialogAuthorComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {
        mode: mode,
        id: (mode === 'create' ? null : row.id),
        firstName: (mode === 'create' ? '' : row.firstName),
        lastName: (mode === 'create' ? '' : row.lastName)
      }
    });

    dialogRef.afterClosed().subscribe(
      data => {
        if (data === 1) {
          this.getAllAuthors();
        }
      }
    );

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
