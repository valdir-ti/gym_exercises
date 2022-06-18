import React from 'react'
import { Stack } from '@mui/material'
import { InfinitySpin } from "react-loader-spinner"

const Loader = () => {
  return (
    <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        width="100%"
    >
        <InfinitySpin size={100} color="#ccc" />
    </Stack>
  )
}

export default Loader