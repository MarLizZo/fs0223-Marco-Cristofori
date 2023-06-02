import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ButtonHComponent } from './components/button-h/button-h.component';
import { TodoContainerComponent } from './components/todo-container/todo-container.component';
import { HomepageComponent } from './main/homepage/homepage.component';
import { CompletedTasksComponent } from './main/completed-tasks/completed-tasks.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ButtonHComponent,
    TodoContainerComponent,
    HomepageComponent,
    CompletedTasksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
