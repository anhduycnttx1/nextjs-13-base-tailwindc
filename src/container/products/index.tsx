import { Space, Row, Button, Popover, Tooltip, Breadcrumb } from 'antd'
import React from 'react'
import { HomeOutlined } from '@ant-design/icons'
import { PlusOutlined, SettingOutlined, ReloadOutlined } from '@ant-design/icons'

import Link from 'next/link'

export default function ProductContainer() {
  return (
    <Space direction="vertical" style={{ width: '100%' }}>
      <Row className="px-5 py-3">
        <Breadcrumb className="cursor-pointer ">
          <Breadcrumb.Item>
            <Link href="/">
              <a>
                <HomeOutlined />
              </a>
            </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Link href="/">
              <a>Sản phẩm</a>
            </Link>
          </Breadcrumb.Item>
        </Breadcrumb>
      </Row>
      <Space size="large" direction="vertical" className="w-full p-5 bg-white shadow-sm">
        <Row justify="space-between" align="middle">
          <span className="text-xl font-medium">Danh sách sản phẩm</span>
          <Space size="small">
            <Button type="primary" icon={<PlusOutlined />}>
              Thêm Mới
            </Button>
            <Button type="primary" danger>
              Xoá
            </Button>
            <Row>
              <Tooltip placement="topLeft" title="Refresh">
                <Button type="text">
                  <ReloadOutlined />
                </Button>
              </Tooltip>

              <Popover
                content={contentPopover}
                title="Title"
                placement="bottomRight"
                trigger={'click'}
              >
                <Tooltip placement="topLeft" title="Setting">
                  <Button type="text">
                    <SettingOutlined />
                  </Button>
                </Tooltip>
              </Popover>
            </Row>
          </Space>
        </Row>
        {/* <TableProduct /> */}
      </Space>
    </Space>
  )
}

function contentPopover() {
  return (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  )
}
