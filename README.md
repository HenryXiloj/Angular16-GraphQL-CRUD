# Angular 16 + Spring Boot 3 + GraphQL CRUD Application

A full-stack CRUD application demonstrating the integration of Angular 16 with Spring Boot 3 using GraphQL for API communication. This project features author management with create, read, update, and delete operations.

📘 Blog Post: [Angular 16 Spring Boot 3 Spring Data GraphQL CRUD](https://jarmx.blogspot.com/2023/06/angular-16-spring-boot-3-spring-data.html)

## 🚀 Features

- **Angular 16** with latest features including:
  - Standalone components support
  - Signals for reactive programming
  - Non-destructive hydration
  - Enhanced security with Trusted Types and CSP
- **Spring Boot 3** backend with GraphQL API
- **Spring Data JPA** for data persistence
- **Material Design** UI components
- **Responsive design** for mobile and desktop
- **Real-time CRUD operations** with GraphQL mutations and queries

## 🛠️ Technology Stack

### Frontend
- Angular 16
- Angular Material
- TypeScript
- RxJS
- GraphQL Client

### Backend
- Spring Boot 3
- Spring Data JPA
- GraphQL
- HyperSQL Database
- Java 17

## 📋 Prerequisites

- Node.js (v16 or higher)
- Angular CLI (v16)
- Java 17
- Maven 3.6+

## 🏗️ Project Structure

```
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   │   ├── authors/
│   │   │   │   └── dialog/
│   │   │   ├── services/
│   │   │   └── environments/
│   │   └── ...
└── backend/
    ├── src/main/java/
    └── ...
```

## 🚀 Getting Started

### Frontend Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   Update `src/environments/environment.ts`:
   ```typescript
   export const environment = {
     production: false,
     apiUrl: "http://localhost:8080/graphql"
   };
   ```

4. **Start the development server**
   ```bash
   ng serve
   ```

5. **Access the application**
   Open your browser and navigate to `http://localhost:4200/`

### Backend Setup

1. **Navigate to backend directory**
   ```bash
   cd backend
   ```

2. **Run the Spring Boot application**
   ```bash
   mvn spring-boot:run
   ```

3. **Verify GraphQL endpoint**
   The GraphQL API will be available at `http://localhost:8080/graphql`

## 📡 API Endpoints

### GraphQL Operations

| Operation | Type | Description |
|-----------|------|-------------|
| `getAllAuthors` | Query | Retrieve all authors |
| `getAuthorById(id: Int)` | Query | Get author by ID |
| `createAuthor(firstName: String, lastName: String)` | Mutation | Create new author |
| `updateAuthor(id: Int, firstName: String, lastName: String)` | Mutation | Update existing author |
| `deleteAuthor(id: Int)` | Mutation | Delete author by ID |

### Example GraphQL Queries

**Get All Authors:**
```graphql
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
```

**Create Author:**
```graphql
mutation {
  createAuthor(firstName: "John", lastName: "Doe") {
    id
    firstName
    lastName
  }
}
```

## 🎨 UI Components

### Main Features
- **Authors Table**: Sortable and paginated data table
- **Search Filter**: Real-time filtering of authors
- **CRUD Dialog**: Modal for creating and editing authors
- **Responsive Design**: Mobile-friendly interface

### Material Design Components Used
- `MatTableModule` - Data tables
- `MatPaginatorModule` - Pagination
- `MatSortModule` - Sorting
- `MatDialogModule` - Modal dialogs
- `MatIconModule` - Material icons
- `MatButtonModule` - Buttons
- `MatFormFieldModule` - Form fields
- `MatInputModule` - Input fields

## 🔧 Configuration

### Angular Modules
The application uses the following key modules in `app.module.ts`:

```typescript
@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    DialogAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
```

### Service Configuration
The `AuthorsService` handles all GraphQL operations:

```typescript
@Injectable({
  providedIn: 'root'
})
export class AuthorsService {
  constructor(private http: HttpClient) { }
  
  getAllAuthors(): Observable<any> {
    // GraphQL query implementation
  }
  
  // Other CRUD operations...
}
```

## 🎯 Key Angular 16 Features Utilized

1. **Standalone Components**: Modern component architecture
2. **Signals**: Reactive state management
3. **Non-destructive Hydration**: Improved performance
4. **Enhanced Security**: Built-in security improvements

## 📱 Responsive Design

The application includes responsive CSS that adapts to different screen sizes:

- **Desktop**: Full-featured table with all columns
- **Mobile**: Optimized layout with adjusted button sizes and responsive headers

## 🧪 Testing

Run the test suite:

```bash
# Unit tests
ng test

# End-to-end tests
ng e2e
```

## 🚀 Production Build

Create a production build:

```bash
ng build --prod
```

The build artifacts will be stored in the `dist/` directory.

## 📦 Dependencies

### Key Frontend Dependencies
- `@angular/core`: ^16.0.0
- `@angular/material`: ^16.0.0
- `@angular/common/http`: ^16.0.0
- `rxjs`: ^7.5.0

### Key Backend Dependencies
- Spring Boot 3
- Spring Data JPA
- Spring GraphQL
- HyperSQL Database


## 🔗 References

- [Angular 16 Release Notes](https://blog.angular.io/angular-v16-is-here-4d7a28ec680d)
- [Spring Boot 3 Documentation](https://spring.io/projects/spring-boot)
- [GraphQL Specification](https://graphql.org/)
- [Angular Material Documentation](https://material.angular.io/)


---

**Happy Coding! 🚀**
