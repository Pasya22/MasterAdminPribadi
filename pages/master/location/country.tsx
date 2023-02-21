import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { doRegionsRequest } from 'redux/Actions/Masters/reduceActions';
import { doCountryRequest } from 'redux/Actions/Masters/reduceActions';
import {Table} from 'antd'

export default function country() {
    const mBenua = useSelector((state: any) => state.masterReducers.mRegion);
    const mNegara = useSelector((state: any) => state.ContryReducer.mCountry);
    const dispatch = useDispatch();
    
    console.log('object N', mNegara)
    console.log('object B', mBenua)

    useEffect(() => {
        dispatch(doRegionsRequest());
        // setData(mBenua);
        dispatch(doCountryRequest());
        // setDataCountry(mNegara);
    }, []);
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

      


    ];
  return (
    <div>
      <h1>hii</h1>
       <Table
                            
columns={columnsCountry}
                                    dataSource={mNegara.hasil}
                                />
    </div>
  )
}


