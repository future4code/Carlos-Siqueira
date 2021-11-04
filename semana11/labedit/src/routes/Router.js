import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { ErrorPage } from '../pages/ErrorPage'
import { LoginPage } from '../pages/LoginPage'
import { PostDetailPage } from '../pages/PostDetailPage'
import { PostsListPage } from '../pages/PostsListPage'
import { SingUpPage } from '../pages/SingUpPage'
export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/login' >
                    <LoginPage></LoginPage>
                </Route>

                <Route exact path='/cadastro' >
                    <SingUpPage></SingUpPage>

                </Route>

                <Route exact path='/' >
                <PostsListPage></PostsListPage>
                </Route>

             

                <Route exact path='/post/:id' >
                    <PostDetailPage></PostDetailPage>

                </Route>

                <Route>
                    <ErrorPage></ErrorPage>                </Route>

            </Switch>
        </BrowserRouter>
    )
}