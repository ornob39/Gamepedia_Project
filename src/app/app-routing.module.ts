import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { DetailsComponent } from './components/details/details.component';
import { AuthGuard } from './auth.guard';
import { PostCreateComponent } from './reviews/post-create/post-create.component';
import { PostListComponent } from './reviews/post-list/post-list.component';
const routes: Routes = [
  { path: 'default', component: HomepageComponent },
  { path: '', component: HomepageComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  {
    path: 'search/:game-search',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: 'details/:id', component: DetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  { path: 'postcreate', component: PostCreateComponent },
  { path: 'postlist', component: PostListComponent },
  { path: 'edit/:postId', component: PostCreateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
