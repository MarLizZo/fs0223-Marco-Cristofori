import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './pages/home/home.component';
// import { InactivePostsComponent } from './pages/inactive-posts/inactive-posts.component';
// import { TemplateComponent } from './pages/template/template.component';
// import { SinglePostComponent } from './pages/single-post/single-post.component';
import { PipeUpperPipe } from './pipe-upper.pipe';
import { ColorUserDirective } from './color-user.directive';
import { TemplateComponent } from './pages/template/template.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    TemplateComponent,
    // InactivePostsComponent,
    // TemplateComponent,
    // SinglePostComponent,
    PipeUpperPipe,
    ColorUserDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
