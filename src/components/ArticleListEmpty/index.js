// Stateless component to show empty list of articles
import React from 'react'

// Material UI
import Typography from '@material-ui/core/Typography'

export default function ArticleListEmpty() {
  return (
    <Typography variant="headline">
      Nothing found...
    </Typography>
  )
}
