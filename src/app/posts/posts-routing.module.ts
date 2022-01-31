import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeletePostComponent } from 'src/app/posts/delete-post/delete-post.component';
import { EditPostComponent } from 'src/app/posts/edit-post/edit-post.component';
import { ViewPostComponent } from 'src/app/posts/view-post/view-post.component';
import { LayoutComponent } from 'src/app/posts/layout/layout.component';
import { ListPostsComponent } from './list-posts/list-posts.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [ 
            { path: '', component: ListPostsComponent },
            { path: 'view/:id', component: ViewPostComponent },
            { path: 'view/:id/edit/:id', component: EditPostComponent },
            { path: 'view/:id/delete/:id', component: DeletePostComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PostsRoutingModule { }