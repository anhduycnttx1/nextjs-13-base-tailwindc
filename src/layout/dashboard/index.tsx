import DashboardHeader from '../header-dashboard'
import MenuDashboardLayout from '../menu-dashboard'
import { Breadcrumb, Button, Layout, Menu } from 'antd'
import { useEffect, useState } from 'react'
type DashBoardLayout = {}
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from 'react-icons/ai'

export default function DashboardLayout({
  children,
}: React.PropsWithChildren<DashBoardLayout>): JSX.Element {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <DashboardHeader />
      <Layout>
        <MenuDashboardLayout collapsed={collapsed} setCollapsed={setCollapsed} />
        <Layout
          className={`content-layout mt-14 ${collapsed ? 'ml-[80px]' : 'ml-[200px]'}`}
          style={{
            transitionProperty: 'all',
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
            transitionDuration: '300ms',
          }}
        >
          <Layout.Content style={{ margin: '24x 24px 0', overflow: 'initial' }}>
            {children}
          </Layout.Content>
          <Layout.Footer style={{ textAlign: 'center' }}>
            DogiApp ©2022 Created by duydoit
          </Layout.Footer>
        </Layout>
      </Layout>
      <Button
        style={{
          overflow: 'auto',
          position: 'fixed',
          left: 10,
          bottom: 10,
          zIndex: 101,
          borderRadius: '0.375rem',
          backgroundColor: '#fff',
        }}
        className="shadow-md "
        type="link"
        size="large"
        onClick={() => setCollapsed(!collapsed)}
        icon={collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
      />
    </Layout>
  )
}
