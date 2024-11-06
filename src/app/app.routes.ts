import { Routes } from '@angular/router';
import path from 'node:path';
import { ParentcompComponent } from './component/parentcomp/parentcomp.component';
import { ChildCompComponent } from './component/child-comp/child-comp.component';

export const routes: Routes = [
    {path:"ParentToChild",component:ParentcompComponent}
];
