import Head from 'next/head'
import { ReactElement } from 'react'
import DashboardLayout from '../layout/dashboard'
import DashboardContainer from '../container/dashboard'

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardContainer />
    </>
  )
}

HomePage.getLayout = (page: ReactElement) => {
  return <DashboardLayout>{page}</DashboardLayout>
}
