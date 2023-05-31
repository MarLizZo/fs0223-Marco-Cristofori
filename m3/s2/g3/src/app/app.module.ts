import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { ActivePostsComponent } from './pages/posts-genitore/active-posts/active-posts.component';
import { InactivePostsComponent } from './pages/posts-genitore/inactive-posts/inactive-posts.component';
import { TemplateComponent } from './pages/posts-genitore/template/template.component';
import { PostsGenitoreComponent } from './pages/posts-genitore/posts-genitore.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ActivePostsComponent,
    InactivePostsComponent,
    TemplateComponent,
    PostsGenitoreComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
