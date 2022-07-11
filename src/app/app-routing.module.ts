import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
let Id = localStorage.id;

const routes: Routes = [
  {
    path: "",
    redirectTo: Id ? "/intro" : "/login",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },

  {
    path: "home/:time/:chorgim/:type",
    loadChildren: () =>
      import("./pages/home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "task-page",
    loadChildren: () =>
      import("./pages/task-page/task-page.module").then(
        (m) => m.TaskPagePageModule
      ),
  },
  {
    path: "task-report",
    loadChildren: () =>
      import("./pages/task-report/task-report.module").then(
        (m) => m.TaskReportPageModule
      ),
  },
  {
    path: "intro",
    loadChildren: () =>
      import("./pages/intro/intro.module").then((m) => m.IntroPageModule),
  },
  {
    path: 'tipulim',
    loadChildren: () => import('./pages/tipulim/tipulim.module').then( m => m.TipulimPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
