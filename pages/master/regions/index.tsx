import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doRegionsRequest, doRegionsCreate, doDeleteRegions, doUpdateRegions, doDeleteRegionsFailed } from 'redux/Actions/Masters/reduceActions';
import Head from 'next/head';
import LayoutMaster from '../../../components/Layout/LayoutMaster.1'
import { Transition } from '@headlessui/react';
import { PlusIcon } from '@heroicons/react/24/solid';
import { Box, ButtonGroup, Button, Dialog, DialogTitle, DialogContent, TextField } from '@mui/material';
import { Formik, Form } from 'formik';
export default function MasterRegions() {

  return (
    <Box>
      {/* <Head>
        <title>Master-Regions</title>
      </Head> */}
      {/* <LayoutMaster /> */}
      {/* <div className='flex h-full flex-col justify-center items-center'>
        <h1 className='text-4xl mb-5 font-bold'>Home</h1>
        <span className='text-7xl'>🏡</span>
      </div> */}
    </Box>
  );
}
