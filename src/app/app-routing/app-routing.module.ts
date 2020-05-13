import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CaseComponent } from '../components/case/case.component'
import { GraphComponent } from '../components/graph/graph.component'

export const routes: Routes = [
    {
      path: '',
      redirectTo: 'grafica',
      pathMatch: 'full'
    },
    {
      path: 'casos',
      component: CaseComponent
    },
    {
      path: 'grafica',
      component: GraphComponent
    }
  ]
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }