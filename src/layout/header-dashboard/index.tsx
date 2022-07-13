import { Row, Space, Image, Dropdown, Menu, Button, Avatar, MenuProps, Badge, Tabs, Layout, List } from 'antd'
import { IoLanguage } from 'react-icons/io5'
import { FiBell } from 'react-icons/fi'
import { menuAccount, menuLanguage } from '../menu-dashboard/menu-item'

type HeaderDashboardProps = {}
const menu = (items: MenuProps['items']) => <Menu className="px-2" items={items} />

export default function DashboardHeader({ children }: React.PropsWithChildren<HeaderDashboardProps>): JSX.Element {
  const user = 'Serati Maf'
  const urlAvt = 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
  const urlLogo = 'https://cdn-icons-png.flaticon.com/512/6819/6819062.png'
  const countNotify = 10
  return (
    <Layout.Header
      className="header"
      style={{
        width: '100%',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 10,
      }}
    >
      <Row justify="space-between" align="middle" className="text-white">
        <Space className="logo" align="center">
          <Image preview={false} width={30} src={urlLogo} alt="logo" />
          <span className="text-lg font-bold">DogiApp</span>
        </Space>
        <Space align="center" className="h-full" size="large">
          {/* Change Notify */}
          <Dropdown overlay={NotifyComponent} placement="bottomRight">
            <Badge count={countNotify} className="block" dot>
              <FiBell className="block w-5 h-5 text-white" />
            </Badge>
          </Dropdown>
          {/* Change Setting Account */}
          <Dropdown overlay={menu(menuAccount)} placement="bottomLeft">
            <Space size={10} className="cursor-pointer">
              <Avatar size={25} src={urlAvt} />
              <span>{user}</span>
            </Space>
          </Dropdown>
          {/* Change Language */}
          <Dropdown overlay={menu(menuLanguage)} placement="bottomRight" className="cursor-pointer">
            <IoLanguage className="block w-5 h-5" />
          </Dropdown>
        </Space>
      </Row>
    </Layout.Header>
  )
}

function NotifyComponent() {
  const { TabPane } = Tabs
  const data = new Array(15).fill(null).map((i, v) => ({
    title: 'Jone',
    active: v % 5 === 0,
  }))
  const data2 = new Array(3).fill(null).map((i, v) => ({
    title: 'Jone',
    active: v % 5 === 0,
  }))
  const onChange = (key: string) => {
    console.log(key)
  }
  const count = data.length
  const count2 = data2.length
  return (
    <Space direction="vertical" align="center" className="mt-2 bg-white rounded-md shadow-md ">
      <Tabs defaultActiveKey="1" onChange={onChange} className="w-80" centered>
        <TabPane tab="Tất cả" key="1" className="px-5 max-h-[500px] overflow-y-auto">
          <List
            split={false}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={(item) => (
              <List.Item className="cursor-pointer ">
                <List.Item.Meta
                  className={item.active ? '' : 'opacity-40'}
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={
                    <span>
                      <b>{item.title}</b> đã đánh giá sản phẩm từ đơn hàng
                    </span>
                  }
                  description="11:02"
                />
              </List.Item>
            )}
          />
        </TabPane>
        <TabPane
          tab={`Chưa đọc ${count2 > 0 ? `(${count2})` : ''}`}
          key="2"
          className="px-5 max-h-[500px] overflow-y-auto"
        >
          <List
            split={false}
            itemLayout="horizontal"
            dataSource={data2}
            renderItem={(item) => (
              <List.Item className="cursor-pointer ">
                <List.Item.Meta
                  avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                  title={
                    <span>
                      <b>{item.title}</b> đã đánh giá sản phẩm từ đơn hàng
                    </span>
                  }
                  description="11:02"
                />
              </List.Item>
            )}
          />
        </TabPane>
      </Tabs>
      <Button className="mb-2" type="link">
        Xem thêm
      </Button>
    </Space>
  )
}
