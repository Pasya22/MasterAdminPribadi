import { Dialog, Transition, Listbox } from '@headlessui/react'
import React, { useState, useEffect, Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { doCountryRequest, doCountryCreate, doDeleteCountry, doUpdateCountry, doDeleteCountryFailed } from 'redux/Actions/Masters/reduceActions';
import { Box, Button, ButtonGroup, DialogContent, DialogTitle, FormControl, Grid, IconButton, InputLabel, MenuItem, Select, SelectChangeEvent, useTheme } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { tokens } from '@/theme';
import * as yup from "yup";
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/solid';
import TextField from '@mui/material/TextField';
import { Form, Formik } from 'formik';
import RefreshIcon from '@mui/icons-material/Refresh';
import SaveIcon from '@mui/icons-material/Save';
import Input from '@mui/material/Input';
import Head from 'next/head';
import LayoutAdmin from '@/components/Layout/LayoutAdmin';
export default function MasterCountry() {
  // define API GET regions
  const [Data, setData]: any = useState([]);
  const mNegara = useSelector((state: any) => state.masterReducers.mCountry);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(doCountryRequest());
    setData(mNegara)
  }, [0]);

  const [isOpenAdd, setIsOpenAdd] = useState(false)
  const createCountry = useDispatch();


  // Close the modal
  function closeModalAdd() {
    setIsOpenAdd(false)
  }

  // Open the modal
  function openModalAdd() {
    setIsOpenAdd(true)
  }

  const validationSchema = yup.object().shape({
    countryName: yup.string().required('Country name is required'),
  });


  const columns = [
    {
      field: 'countryId',
      title: 'ID'
    },
    {
      field: 'countryName',
      title: 'Country',
      cellClassName: "name-column--cell",
      flex: 2,
    }
  ];

  return (
    <Box>
      <Head>
        <title>Master-Country</title>
      </Head>
      <LayoutAdmin>
        <p className="text-gray-700 text-3xl mb-16 font-bold">Master / Country</p>
        <table className="table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ backgroundColor: "#f2f2f2" }}>
            <tr>
              {columns.map((column) => (
                <th key={column.title} style={{ border: "1px solid black", padding: "8px" }}>
                  {column.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Data.map((items : any) => (
              <tr key={items.id}>
                {columns.map((column) => (
                  <td key={items[column.field]} style={{ border: "1px solid black", padding: "8px" }}>
                    {items[column.field]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </LayoutAdmin>
    </Box>
  );
}