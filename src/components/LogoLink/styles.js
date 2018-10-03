export default theme => ({
  link: {
    fill: 'white',
    display: 'flex',
    height: 35,
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: '35vw',
    },
  },
})
