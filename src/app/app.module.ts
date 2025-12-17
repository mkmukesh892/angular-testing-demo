import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { VoterComponent } from './voter/voter.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsersComponent } from './users/users.component';
import { HomeComponent } from './home/home.component';
import { HighlightDirective } from './highlight.directive';
import { TodosComponent } from './todos/todos.component';
import { TodoService } from './todos/todo.service';

@NgModule({ declarations: [
        AppComponent,
        VoterComponent,
        UserDetailsComponent,
        UsersComponent,
        HomeComponent,
        TodosComponent,
        HighlightDirective
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule], providers: [TodoService, provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
