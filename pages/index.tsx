// import LayoutMaster from '../../../components/Layout/LayoutMaster.1'
import React from 'react'
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Box, ButtonGroup, Button, Dialog, DialogTitle, DialogContent, TextField, Grid, Typography, CardContent, Card } from '@mui/material';
import { Formik, Form } from 'formik';
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';
import { title } from 'process';
import Head from 'next/head';
import Navbar from 'components/Header/HeaderBar';
import SidebarMaster from 'components/Sidebar/SidebarMaster';
import FooterBar from 'components/Footer/FooterBar';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';


const { Header, Content, Footer, Sider } = Layout;

export default function index() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <Head>
                <title>Home</title>
            </Head>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <Navbar />
            </Header>
            <Layout>
                <Content style={{ padding: '0 0px' }}>
                    <Layout style={{ padding: '0px 0', background: colorBgContainer }}>
                        <SidebarMaster />
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            Home
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </>
    );
}
