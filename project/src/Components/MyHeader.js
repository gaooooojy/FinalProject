import React from 'react';

import { Layout, Typography } from 'antd';
import LogoCollection from './myportal/LogoCollection'
const { Header } = Layout;
const { Title } = Typography;

function MyHeader({ User, list,path }) {
    return (

        <Header className="site-layout-background" style={{
            padding: 10, position: "fixed", zIndex: 1,
            overflow: 'auto', right: 0, height: '10vh', width: "85%", borderBottom: '1px solid #E6E6E6'
        }}>
            {/* {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: this.toggle,

            })} */}
            <Title level={4} style={{ display: 'flex', alignItems: 'center' }}>
                Data Visualization and COVID-19 data</Title>
            <LogoCollection list={list} User={User} path={path}/>
        </Header>

    )
}

export default MyHeader
