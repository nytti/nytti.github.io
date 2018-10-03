// Classic react-router scheme
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from 'components/Layout'

// Pages
import ArticleListPage from './ArticleListPage'
import ArticlePage from './ArticlePage'

export default () => (
  <Layout>
    <Switch>
      <Route exact path="/topic/:topic" component={ArticleListPage} />
      <Route exact path="/:id" component={ArticlePage} />
      <Route component={ArticleListPage} />
    </Switch>
  </Layout>
)
