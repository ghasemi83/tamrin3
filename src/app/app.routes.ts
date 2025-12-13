import { Routes } from '@angular/router';
import { LoginPage } from './public/page/login-page/login-page';
import { PrivateTemplate } from './private/private-template/private-template';
import { privateGuard } from './shared/private-guard';
import { DashboardPage } from './private/page/dashboard-page/dashboard-page';
import { BooksPage } from './private/page/books-page/books-page';
import { MembersPage } from './private/page/members-page/members-page';
import { BorrowsPage } from './private/page/borrows-page/borrows-page';
import { ReportsPage } from './private/page/reports-page/reports-page';

export const routes: Routes = [

    {path:'login' ,component:LoginPage},
    {path:'private',canActivate:[privateGuard] ,component:PrivateTemplate,children:[
        {path:'dashboard',component:DashboardPage},
        {path:'books',component:BooksPage},
        {path:'members',component:MembersPage},
        {path:'borrows',component:BorrowsPage},
        {path:'reports',component:ReportsPage},
        {path:'',redirectTo:'dashboard',pathMatch:'prefix'},
        {path:"**",redirectTo:'dashboard'}


    ]},
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'**',redirectTo:'login'}

];
