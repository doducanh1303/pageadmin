import { FolderAddOutlined, FolderOpenOutlined, FolderOutlined, FolderViewOutlined, FormOutlined, HomeOutlined, SettingOutlined, UnorderedListOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { Link, Route } from "react-router-dom";
import routes from '../routes/routes';
import { Popover, Button } from 'antd';
const { SubMenu } = Menu;

const content = (
  <div>
<Link to='/login'>
<p>Log out</p>
</Link>
  </div>
);
function Navabar() {

  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (

    <div className="container1">

      <div className="head">
        <div className="head_left">
          <div className="apphead">                     <div className="apphead_left">                         <img src='./favicon.ico' width="16" height="16" />                         <p>W5D APP</p>                     </div>                     <div className="apphead_right">                           <i class="fa fa-list" onClick={() => toggleCollapsed()} aria-hidden="true" ></i>  </div>    </div>
        </div>
        <div className="head_right">
          <p id="language">
            Ngôn ngữ :Tiếng Việt
                </p>
          <div className="login">
            <p>Xin chào ,</p>
            <div className="login_content">

              <Popover content={content} >
                    <p>doducanh48@gmail.com</p>
              </Popover>,


            </div>
          </div>
        </div>
      </div>
      <div className="content">

        {/* <Button type="primary" onClick={()=>toggleCollapsed()} style={{ marginBottom: 16 }}>
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button> */}

        <div className="content_left">

          <Menu
            defaultSelectedKeys={['1']}

            mode="inline"
            color="white"
            inlineCollapsed={collapsed}
          >
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">
                Trang chủ
           </Link>
            </Menu.Item>

            <SubMenu key="sub2" icon={<FormOutlined />} title="Bài Viết">

              <Menu.Item key="5" icon={<UnorderedListOutlined />}>
                <Link to="/baiviet/danhsach" style={{ color: 'black' }}>
                  Danh sách
           </Link>
              </Menu.Item>
              <Menu.Item key="6" icon={<FolderAddOutlined />}>Thêm mới</Menu.Item>
              <Menu.Item key="7" icon={<FolderOutlined />}>Danh mục</Menu.Item>
            </SubMenu>
            <SubMenu key="sub1" icon={<FolderOpenOutlined />} title="Dự Án">
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>

            </SubMenu>
            <Menu.Item key="2" icon={<FolderViewOutlined />}>
              <Link to="/project">
                Thư Viện
            </Link>

            </Menu.Item>
            <SubMenu key="sub3" icon={<UsergroupAddOutlined />} title="Thành viên">
              <Menu.Item key="9">Option 9</Menu.Item>
              <Menu.Item key="10">Option 10</Menu.Item>
              <SubMenu key="sub4" title="Submenu">
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </SubMenu>

            <Menu.Item key="3" icon={<SettingOutlined />}>
              <Link to="/project">
                Cấu hình
            </Link>

            </Menu.Item>
          </Menu>
        </div>
        <div className="content_right">
          <div className="content_right1">
            {
              routes.map((item) => {
                return (
                  <Route
                    path={item.path}
                    component={item.component}
                    exact={item.exact}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    </div>



  )
}

export default Navabar;
