// import LayoutMaster from '../../../components/Layout/LayoutMaster.1'
import Link from 'next/link';
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { PlusIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {
    doRegionsRequest,
    doRegionsCreate,
    doDeleteRegions,
    doUpdateRegions,
    doDeleteRegionsFailed,

    doCountryRequest,
    doCountryCreate,
    doDeleteCountry,
    doUpdateCountry,

    doProvRequest,
    doProvCreate,
    doDeleteProv,
    doUpdateProv,


    doAddrRequest,
    doAddrCreate,
    doDeleteAddr,
    doUpdateAddr,




} from 'redux/Actions/Masters/reduceActions';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';

// import { Formik, Form } from 'formik';
import { DataGrid, GridColDef, GridValueGetterParams, GridToolbar } from '@mui/x-data-grid';
import { title } from 'process';
import Head from 'next/head';
import Navbar from 'components/Header/HeaderBar';
import SidebarMaster from 'components/Sidebar/SidebarMaster';
import * as yup from "yup";
// import TextField from '@mui/material/TextField';
import { Formik } from 'formik';
import FooterBar from 'components/Footer/FooterBar';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { MenuProps, message } from 'antd';
import { Breadcrumb, Layout, Menu, theme, Divider, Radio, Input, Table, Form, Alert } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { values } from 'lodash';


const { Header, Content, Footer, Sider } = Layout;

const onFinish = (values: any) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

export default function index() {
    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    // Region
    // const [Data, setData]: any = useState([]);
    const mBenua = useSelector((state: any) => state.masterReducers.mRegion);
    const mNegara = useSelector((state: any) => state.ContryReducer.mCountry);
    const mProv = useSelector((state: any) => state.ProvincesReducer.mProvinces);
    const mAddres = useSelector((state: any) => state.AddrReducer.mAddr);
    const dispatch = useDispatch();
    const dispatchCountry = useDispatch();
    const dispatchProv = useDispatch();
    const dispatchAddr = useDispatch();

    useEffect(() => {
        dispatch(doRegionsRequest());
        dispatchCountry(doCountryRequest());
        dispatchProv(doProvRequest());
        dispatchAddr(doAddrRequest());

    }, []);
    console.log(mBenua); // add this line
    console.log(mNegara); // add this line
    console.log(mProv); // add this line
    console.log(mAddres); // add this line

    // Country 
    // const [DataCountry, setDataCountry]: any = useState([]);





    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // const dispatchAddRegion = useDispatch();
    // const dispacthAddContry = useDispatch();
    // const dispacthAddProv = useDispatch();
    // const dispacthAddAddr = useDispatch();
    // const [successMessage, setSuccessMessage] = useState("");

    // const initialValues = {
    //     regionName: "",
    // };

    // const handleSubmit = (values: any) => {
    //     dispatchAddRegion(doRegionsCreate(values));
    //     handleClose();
    // };
    const vRegion = yup.object().shape({
        regionName: yup.string().required('Region name is required'),
    });
    const vContry = yup.object().shape({
        conutryName: yup.string().required('Contry Name is required'),
        conutryRegion: yup.number().required('Region Name is required'),
    });
    const vProv = yup.object().shape({
        provName: yup.string().required('Provinces Name is required'),
    });
    const vAddr = yup.object().shape({
        addrLine2: yup.string().required('Address Name is required'),
    });

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

        {
            title: (
                <>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <Button type="text" onClick={handleOpen}><PlusIcon width={10} />Add</Button>
                    </div>
                </>

            )
        },


    ];

    // columnsCountry
    interface DataType {
        key: React.Key;
        countryId: any;
        countryName: string;
    }
    const columnsCountry = [
        {
            dataIndex: 'countryId',
            title: 'ID',
            key: 'countryId'
        },
        {
            dataIndex: 'countryName',
            title: 'Country',
            key: 'countryName',
        },

        {
            title: (
                <>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <Button type="text" onClick={handleOpen}><PlusIcon width={10} />Add</Button>
                    </div>
                </>

            )
        },


    ];


    // ==== Prov ===== //
    interface DataType {
        key: React.Key;
        provId: any;
        provName: string;
    }

    const columnsProv = [
        {
            dataIndex: 'provId',
            title: 'ID',
            key: 'provId'
        },
        {
            dataIndex: 'provName',
            title: 'Provinces',
            key: 'provName',
        },

        {
            title: (
                <>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <Button type="text" onClick={handleOpen}><PlusIcon width={10} />Add</Button>
                    </div>
                </>

            )
        },


    ];


    // ==== Prov ===== //
    interface DataType {
        key: React.Key;
        addrId: any;
        addrLine2: string;
    }
    const columnsAddr = [
        {
            dataIndex: 'addrId',
            title: 'ID',
            key: 'addrId'
        },
        {
            dataIndex: 'addrLine2',
            title: 'City',
            key: 'addrLine2',
        },

        {
            title: (
                <>
                    <div style={{ display: "inline-block", verticalAlign: "middle" }}>
                        <Button type="text" onClick={handleOpen}><PlusIcon width={10} />Add</Button>
                    </div>
                </>

            )
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
                        <div style={{ width: 200 }}>

                            <SidebarMaster />
                        </div>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            {/* AddRegion */}
                            <div>


                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        {/* {successMessage && (
                                            <Alert message={successMessage} type="success" showIcon />
                                        )} */}
                                        <Formik
                                            initialValues={{ regionName: "" }}
                                            validationSchema={vRegion}
                                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                                setSubmitting(true);
                                                dispatch(doRegionsCreate(values))
                                                // setSuccessMessage("Data berhasil ditambahkan");
                                                handleClose();
                                                setSubmitting(false);
                                                resetForm();
                                            }}
                                        >
                                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                                <Form layout="vertical" onFinish={handleSubmit}>
                                                    <Form.Item
                                                        label="Region Name"
                                                        name="regionName"
                                                        validateStatus={touched.regionName && errors.regionName ? "error" : "success"}
                                                        help={touched.regionName && errors.regionName}
                                                    >
                                                        <Input
                                                            name="regionName"
                                                            placeholder="Region Name"
                                                            value={values.regionName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                                                            {isSubmitting ? "Submitting" : "Save"}
                                                        </Button>
                                                    </Form.Item>
                                                </Form>
                                            )}
                                        </Formik>

                                    </Box>
                                </Modal>
                            </div>
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
                                </Radio.Group>
                                <Divider />
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columns}
                                    dataSource={mBenua}
                                />
                            </div>

                            {/* country */}
                            <div>


                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        {/* {successMessage && (
                                            <Alert message={successMessage} type="success" showIcon />
                                        )} */}
                                        <Formik
                                            initialValues={{ countryName: "" }}
                                            validationSchema={vContry}
                                            onSubmit={(values, { setSubmitting, resetForm }) => {
                                                setSubmitting(true);
                                                dispatch(doCountryCreate(values))
                                                // setSuccessMessage("Data berhasil ditambahkan");
                                                handleClose();
                                                setSubmitting(false);
                                                resetForm();
                                            }}
                                        >
                                            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                                                <Form layout="vertical" onFinish={handleSubmit}>
                                                    <Form.Item
                                                        label="Country Name"
                                                        name="countryName"
                                                        validateStatus={touched.countryName && errors.countryName ? "error" : "success"}
                                                        help={touched.countryName && errors.countryName}
                                                    >
                                                        <Input
                                                            name="countryName"
                                                            placeholder="Country Name"
                                                            value={values.countryName}
                                                            onChange={handleChange}
                                                            onBlur={handleBlur}
                                                        />
                                                    </Form.Item>
                                                    <Form.Item>
                                                        <Button type="primary" htmlType="submit" disabled={isSubmitting}>
                                                            {isSubmitting ? "Submitting" : "Save"}
                                                        </Button>
                                                    </Form.Item>
                                                </Form>
                                            )}
                                        </Formik>

                                    </Box>
                                </Modal>
                            </div>
                            <div>
                                <div>
                                    <h2 className="bg-gray-300">
                                        Country
                                    </h2>
                                </div>
                                <Radio.Group
                                    onChange={({ target: { value } }) => {
                                        setSelectionType(value);
                                    }}
                                    value={selectionType}
                                >
                                </Radio.Group>
                                <Divider />
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columnsCountry}
                                    dataSource={mNegara.hasil}
                                />
                            </div>
                            <div>
                                <div>
                                    <h2 className="bg-gray-300">
                                        Provinces
                                    </h2>
                                </div>
                                <Radio.Group
                                    onChange={({ target: { value } }) => {
                                        setSelectionType(value);
                                    }}
                                    value={selectionType}
                                >
                                </Radio.Group>
                                <Divider />
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columnsProv}
                                    dataSource={mProv}
                                />
                            </div>
                            <div>
                                <div>
                                    <h2 className="bg-gray-300">
                                        City
                                    </h2>
                                </div>
                                <Radio.Group
                                    onChange={({ target: { value } }) => {
                                        setSelectionType(value);
                                    }}
                                    value={selectionType}
                                >
                                </Radio.Group>
                                <Divider />
                                <Table
                                    rowSelection={{
                                        type: selectionType,
                                        ...rowSelection,
                                    }}
                                    columns={columnsAddr}
                                    dataSource={mAddres}
                                />
                            </div>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
            </Layout>
        </>
    );
}

