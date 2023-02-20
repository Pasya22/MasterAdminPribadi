// import LayoutMaster from '../../../components/Layout/LayoutMaster.1'
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { useDispatch, useSelector } from 'react-redux';
import { doRegionsRequest, doRegionsCreate, doDeleteRegions, doUpdateRegions, doDeleteRegionsFailed } from 'redux/Actions/Masters/reduceActions';
// import { Box, ButtonGroup, Dialog, DialogTitle, DialogContent, TextField, Grid, Typography, CardContent, Card } from '@mui/material';
// import { Formik, Form } from 'formik';
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';
import { title } from 'process';
import Head from 'next/head';
import Navbar from 'components/Header/HeaderBar';
import SidebarMaster from 'components/Sidebar/SidebarMaster';
import FooterBar from 'components/Footer/FooterBar';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Divider, Radio, Form, Input, Table, Modal, Button } from 'antd';
import type { ColumnsType } from 'antd/es/table';


const { Header, Content, Footer, Sider } = Layout;

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

export default function index() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const [Data, setData]: any = useState([]);
    const mBenua = useSelector((state: any) => state.masterReducers.mRegion);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(doRegionsRequest());
        setData(mBenua);
        console.log(mBenua); // add this line
    }, []);

    //OpenFormAddRegion
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    // Execution Add Data Region
    const dispatchAdd = useDispatch();

    const handleFormSubmit = (values: any, { setSubmitting }: any) => {
        setSubmitting(true);
        dispatchAdd(doRegionsCreate(values));
        dispatch(doRegionsRequest());
        setIsModalOpen(false);
        setSubmitting(false);
    };
    interface DataType {
        key: React.Key;
        regionCode: any;
        regionName: string;
    }

    const columns = [
        {
            dataIndex: 'regionCode',
            title: 'ID',
            key: 'regionCode'
        },
        {
            dataIndex: 'regionName',
            title: 'region',
            key: 'regionName',
        },
    ];



    // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
            console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        getCheckboxProps: (record: DataType) => ({
            disabled: record.regionCode === 'Disabled User', // Column configuration not to be checked
            name: record.regionCode,
        }),
    };


    const [selectionType, setSelectionType] = useState<'radio'>('radio');


    return (
        <>
            <Head>
                <title>location</title>
            </Head>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
                <Navbar />
            </Header>
            <Layout>
                <Content style={{ padding: '0 0px' }}>
                    <Layout style={{ padding: '0px 0', background: colorBgContainer }}>
                        <SidebarMaster />
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            {/* <Button type="primary" onClick={showModal}>
                                Open Modal
                            </Button> */}
                            <Modal title="Add Data Region" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                                <Form
                                    name="Add Data Region"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    style={{ maxWidth: 600 }}
                                    initialValues={{ remember: true }}
                                    onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                >
                                    <Form.Item
                                        label="RegionName"
                                        name="regionName"
                                        rules={[{ required: true, message: 'Please input your region Name!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    {/* <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item> */}

                                    {/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item> */}

                                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button type="primary" htmlType="submit" className='btn btn-info'>
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </Modal>
                            <div>
                                <div>
                                    <h2 className="bg-gray-300">
                                        Region
                                    </h2>
                                </div>
                                <Radio.Group
                                    onChange={({ target: { value } }) => {
                                        setSelectionType(value);
                                    }}
                                    value={selectionType}
                                >
                                    {/* <Radio value="checkbox">Checkbox</Radio> */}
                                    {/* <Radio value="radio">radio</Radio> */}
                                </Radio.Group>
                                <Button key="modal-button" onClick={showModal}>Add Region</Button>
                                <Divider />
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columns}
                                    dataSource={Data}
                                />
                            </div>
                            <div>
                                <div>
                                    <h2 className="bg-gray-300">
                                        Country
                                    </h2>
                                </div>
                                Data Tabel Country
                            </div>
                            <div>
                                <div>
                                    <h2 className="bg-gray-300">
                                        Provinces
                                    </h2>
                                </div>
                                Data Tabel Provinces
                            </div>
                            <div>
                                <div>
                                    <h2 className="bg-gray-300">
                                        City
                                    </h2>
                                </div>
                                Data Tabel City
                            </div>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </>
    );
}
