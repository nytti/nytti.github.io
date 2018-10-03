// HOC used for scrolling back to top when route changed
import { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

export default
@withRouter
class ScrollToTop extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    children: PropTypes.any
  }

  componentDidUpdate(prevProps) {
    const { location } = this.props
    const { scrollToTop } = location.state || {}
    if (location !== prevProps.location && scrollToTop !== false) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    const { children } = this.props
    return children
  }
}
