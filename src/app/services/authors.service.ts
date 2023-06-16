import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  constructor(private http: HttpClient) { }

  getAllAuthors(): Observable<any> {
    const query = `
      query {
        getAllAuthors {
          id
          firstName
          lastName
          bookRecords {
            id
          }
        }
      }
    `;
    return this.http.post<any>(environment.apiUrl, { query });
  }

  getAuthorById(id: number): Observable<any> {
    const query = `
      query {
        getAuthorById(id: ${id}) {
          firstName
          lastName
          bookRecords {
            id
          }
        }
      }
    `;
    return this.http.post<any>(environment.apiUrl, { query });
  }

  createAuthor(firstName: string, lastName: string): Observable<any> {
    const mutation = `
      mutation {
        createAuthor(firstName: "${firstName}", lastName: "${lastName}") {
          id
          firstName
          lastName
        }
      }
    `;
    return this.http.post<any>(environment.apiUrl, { query: mutation });
  }

  updateAuthor(id: number, firstName: string, lastName: string): Observable<any> {
    const mutation = `
      mutation {
        updateAuthor(id: ${id}, firstName: "${firstName}", lastName: "${lastName}") {
          id
          firstName
          lastName
        }
      }
    `;
    return this.http.post<any>(environment.apiUrl, { query: mutation });
  }

  deleteAuthor(id: number): Observable<any> {
    const mutation = `
      mutation {
        deleteAuthor(id: ${id})
      }
    `;
    return this.http.post<any>(environment.apiUrl, { query: mutation });
  }

}
