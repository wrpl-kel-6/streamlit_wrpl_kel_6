import React, {useEffect, ReactElement} from "react"
import {
  withStreamlitConnection,
  Streamlit,
  ComponentProps,
} from "streamlit-component-lib"
import * as Yup from 'yup'
import {Formik, Form, Field} from 'formik'

import Card from '@material-ui/core/Card'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'

import styles from './style.module.scss'
import { useState } from 'react';


function numberWithCommas(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function LoginComponent({args}: ComponentProps): ReactElement {

  useEffect(() => {
    Streamlit.setFrameHeight()
  })
  
  const [providerOne, setProviderOne] = useState(false);
  const [providerTwo, setProviderTwo] = useState(false);
  const [providerThree, setProviderThree] = useState(false);
  const [providerFour, setProviderFour] = useState(false);

  const [nama, setNama] = useState("");
  const  [alamat, setAlamat] = useState("");
  const [provinsi, setProvinsi] = useState("");
  const [kodePos, setKodePos] = useState(""); 

  const amount = 9760000000;
  
  const [qty, setQty] = useState(1);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let provider = "";
    if (providerOne){
      provider = "BCA";
    }else if (providerTwo){
      provider = "Mandiri";
    }else if (providerThree) {
      provider =  "BNI";
    }else if (providerFour){
      provider = "Bank Mega";
    }

    const alamatLengkap = alamat + provinsi + kodePos;
    const bank = "Bank";
    const createOrderData = {amount,  provider, bank, qty, alamatLengkap};
      Streamlit.setComponentValue(createOrderData);
  }


  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <>

      <div>

      <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          
        </div>
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Ringkasan Pesanan</p>
            <p className="text-gray-400">Mobil yang dibeli</p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              <div className="flex flex-col rounded-lg bg-white sm:flex-row">
                <img className="m-2 h-24 w-28 rounded-md border object-cover object-center" src="https://ivansmotor.com/wp-content/uploads/2022/08/Artboard-1-2.jpg" alt="" />
                <div className="flex w-full flex-col px-4 py-4">
                  <span className="font-semibold">Ferrari 812 GTS</span>
                  <div className="flex w-full flex-row px-4 py-4">
                      <span className="float-right text-gray-400">46496 cc</span>
                      {/* <span className="float-right ml-5 text-black-700 font-bold">{qty} x</span> */}
                      <div className="ml-10 flex flex-row h-8 w-18 rounded-lg relative bg-transparent mt-1">
                          <button data-action="decrement" className=" bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
                            onClick={()=>{setQty(qty-1)}}>
                            <span className="m-auto text-2xl font-thin">−</span>
                          </button>
                          <span className="float-right text-center   w-12 text-black-700 font-bold">{qty} x</span> 
                        <button data-action="increment" className="bg-gray-200 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
                          onClick={()=>{setQty(qty+1)}}>
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                  </div>
                  <p className="text-lg font-bold">Rp 9.750.000.000</p>
                </div>
              </div>
            
            </div>

            </div>


            <p className="mt-8 text-lg font-medium">Pengiriman</p>
            <form className="mt-5 grid gap-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input className="peer hidden" id="radio_1" type="radio" name="radio" checked />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4" htmlFor="radio_1">
                  <img className="w-14 object-contain" src="https://ivansmotor.com/wp-content/uploads/2021/11/ivanmotor.svg" alt="" />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Kurir Ivan's Motor</span>
                    <p className="text-slate-500 text-sm leading-6">Delivery: 2-4 Days</p>
                  </div>
                </label>
              </div>
            
            
           
          
         
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Detail Pembayaran</p>
            <p className="text-gray-400">Selesaikan pesanan Anda dengan memberikan detail pembayaran</p>
            <div className="">
              <label htmlFor="payment_method" className="mt-4 mb-2 block text-sm font-medium">Payment Provider</label>
              <div className="relative">
              


                <div className="flex flex-col space-y-2">
                    <div className={`relative flex w-auto items-center rounded  py-3 px-4 pl-14 font-medium text-gray-700  ${providerOne? "bg-blue-100 border-blue-600": ""}`}>
                      <input className="peer hidden " type="checkbox" name="title1" id="title1" checked={providerOne} onChange={() =>  setProviderOne(!providerOne)}/>
                      <label className={`absolute left-0 top-0 h-full w-full cursor-pointer rounded border  `} htmlFor="title1" > </label>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Bank_Central_Asia.svg/2560px-Bank_Central_Asia.svg.png" className="object-contain w-10 h-5 mr-8"/>
                      <span className="pointer-events-none z-10">BCA</span>
                    </div>
                    <div className={`relative flex w-auto items-center rounded b py-3 px-4 pl-14 font-medium text-gray-700 ${providerTwo? "bg-blue-100 border-blue-600": ""}`}>
                      <input className="peer  hidden" type="checkbox" name="title2" id="title2" checked={providerTwo} onChange={() =>  setProviderTwo(!providerTwo)}/>
                      <label className={`absolute left-0 top-0 h-full w-full cursor-pointer rounded border  `} htmlFor="title2" > </label>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Bank_Mandiri_logo_2016.svg/2560px-Bank_Mandiri_logo_2016.svg.png" className="object-contain w-10 h-5 mr-8"/>

                      <span className="pointer-events-none z-10 ">Mandiri</span>
                    </div>
                    <div className={`relative flex w-auto items-center rounded b py-3 px-4 pl-14 font-medium text-gray-700 ${providerThree? "bg-blue-100 border-blue-600": ""}`}>
                      <input className="peer hidden" type="checkbox" name="title3" id="title3"  checked={providerThree} onChange={() => setProviderThree(!providerThree)}/>
                      <label className="absolute left-0 top-0 h-full w-full cursor-pointer rounded border " htmlFor="title3" > </label>
                      <img src="https://upload.wikimedia.org/wikipedia/id/thumb/5/55/BNI_logo.svg/2560px-BNI_logo.svg.png" className="object-contain w-10 h-5 mr-8"/>

                      <span className="pointer-events-none z-10">BNI</span>
                    </div>
                    <div className={`relative flex w-auto items-center rounded b py-3 px-4 pl-14 font-medium text-gray-700 ${providerFour? "bg-blue-100 border-blue-600": ""}`}>
                      <input className="peer hidden" type="checkbox" name="title4" id="title4" checked={providerFour} onChange={() => setProviderFour(!providerFour)}/>
                      <label className="absolute left-0 top-0 h-full w-full cursor-pointer rounded border " htmlFor="title4" > </label>
                      <img src="https://upload.wikimedia.org/wikipedia/commons/a/af/Bank_Mega_2013.svg" className="object-contain w-10 h-5 mr-8"/>

                      <span className="pointer-events-none z-10">Bank Mega</span>
                    </div>
                  </div>
                    
                </div>
              </div>


              <label htmlFor="card-holder" className="mt-4 mb-2 block text-sm font-medium">Nama Lengkap</label>
              <div className="relative">
                <input type="text" id="card-holder" name="card-holder" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm  shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Justin Bieber"  value={nama} onChange={(e) => setNama(e.target.value)}/>
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                  </svg>
                </div>
              </div>
            
              <label htmlFor="billing-address" className="mt-4 mb-2 block text-sm font-medium">Alamat Pengiriman </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input type="text" id="billing-address" name="billing-address" className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Jl. Mulwo no.15 Karangasem" value={alamat} onChange={(e) => setAlamat(e.target.value)} />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg fill="#000000" width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M49,18.92A23.74,23.74,0,0,0,25.27,42.77c0,16.48,17,31.59,22.23,35.59a2.45,2.45,0,0,0,3.12,0c5.24-4.12,22.1-19.11,22.1-35.59A23.74,23.74,0,0,0,49,18.92Zm0,33.71a10,10,0,1,1,10-10A10,10,0,0,1,49,52.63Z"/></svg>

                  </div>
                </div>
                <select data-type="text" name="billing-state" className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500" value={provinsi} onChange={(e) => setProvinsi(e.target.value) }>
                  <option value="State">Jawa Tengah</option>
                  <option value="State">DKI Jakarta</option>
                  <option value="State">Jawa Barat</option>
                  <option value="State">Jawa Timur</option>

                  <option value="State">Provinsi</option>

                </select>
                <input type="text" name="billing-zip" className="flex-shrink-0 rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none sm:w-1/6 focus:z-10 focus:border-blue-500 focus:ring-blue-500" placeholder="Kode Pos" value={kodePos} onChange={(e) => setKodePos(e.target.value)} />
              </div>
        
              <div className="mt-6 border-t border-b py-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Subtotal</p>
                  <p className="font-semibold text-gray-900">Rp 9.750.000.000</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Shipping</p>
                  <p className="font-semibold text-gray-900">Rp 10.000.000</p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <p className="text-sm font-medium text-gray-900">Total</p>
                <p className="text-2xl font-semibold text-gray-900">Rp {numberWithCommas(amount)}</p>
              </div>
            </div>
            <button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white  ">Place Order </button>
          </form>
          </div>
          
        </div>
        
    </>
  );
}

export default withStreamlitConnection(LoginComponent)
