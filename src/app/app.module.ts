import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { GaugeModule } from 'angular-gauge';
//Flex Layout//

import { FlexLayoutModule } from '@angular/flex-layout';

//MatModules//

import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

//Services//
import { HttpHeadersInterceptor } from './interceptors/http-headers.interceptor';
import { HttpErrorsInterceptor } from './interceptors/http-errors.interceptor';
//

// Angular Bootstrap

import { MatCarouselModule } from '@ngbmodule/material-carousel';

// App Components //
import { HomeComponent } from './components/home/home.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { HomepageComponent } from './homepage/homepage.component';
//
// For Authentication //
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { DetailsComponent } from './components/details/details.component';
import { GameTabsComponent } from './components/game-tabs/game-tabs.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewCreateComponent } from './reviews/review-create/review-create.component';
import { ReviewListComponent } from './reviews/review-list/review-list.component';
import { PostCreateComponent } from './reviews/post-create/post-create.component';
import { PostListComponent } from './reviews/post-list/post-list.component';

//
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    SidenavComponent,
    HomepageComponent,
    DetailsComponent,
    GameTabsComponent,
    ReviewsComponent,
    ReviewCreateComponent,
    ReviewListComponent,
    PostCreateComponent,
    PostListComponent,
  ],
  imports: [
    FlexLayoutModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    GaugeModule.forRoot(),
    MatTabsModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatCarouselModule.forRoot(),
    MatDividerModule,
    MatExpansionModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpHeadersInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorsInterceptor,
      multi: true,
    },
    AuthService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
