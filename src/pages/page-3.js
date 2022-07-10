import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button, Box } from "@mui/material";

const SecondPage = () => (
  <Layout>
      <Box p={4}>
          <Button variant="contained">Hello gatsby-theme-material-ui</Button>
      </Box>
  </Layout>
)

export default SecondPage
