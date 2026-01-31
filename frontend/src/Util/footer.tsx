import React from 'react'
import { Typography } from '@mui/material'

const Footer: React.FC = () => {
  return (
    <>
      <br />
      <br />
      <Typography align="center" paragraph>
        Check out the{' '}
        <a href="https://docs.projectbabbage.com/docs/guides/storage">
          Universal Hash Resolution Protocol
        </a>
        !
      </Typography>
      <Typography align="center">
        <a href="https://projectbabbage.com">Metanet Academy</a>
      </Typography>
    </>
  )
}

export default Footer