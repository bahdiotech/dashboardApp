import React from 'react';
import headset from '../../photos/headset.jpeg';
import jacket from '../../photos/Jacket.jpg';
import mac from '../../photos/Mac.jpeg';
import shoe from '../../photos/Shoe.jpeg';
import watch from '../../photos/watch.jpg';
import './orderWidget.css';
// import { Button } from '@mui/material';



function OrderWidget() {
  const Button = ({type})=>{
    return <button className={'orderButton ' + type}>{type}</button>
  }
  return (
    <div className='orderContainer'>
      <h3 className="orderTitle">Latest Transanction</h3>
      <table className="orderTable">
        <tr className="orderTr">
          <th className="orderTh">Customer</th>
          <th className="orderTh">Date</th>
          <th className="orderTh">product</th>
          <th className="orderTh">Amount</th>
          <th className="orderTh">Location</th>
          <th className="orderTh">Status</th>
        </tr>
        <tr className="orderTr">
          <td className="orderUser">
            <img src={headset} width={300} alt="internet issue" className='orderImg' />
            <span className="orderName">Headset</span>
          </td>
          <td className="orderDate"> 15 Oct 2023</td>
          <td className="orderName"> Samsung Headset</td>
          <td className="orderAmount">$404.99</td>
          <td className="orderLocation">USA</td>
          <td className="orderStatus"><Button type='Approved'/></td>
        </tr>
        <tr className="orderTr">
        <td className="orderUser">
            <img src={jacket} width={300} alt="internet issue" className='orderImg' />
            <span className="orderName">Jacket</span>
          </td>
          <td className="orderDate"> 15 Oct 2023</td>
          <td className="orderName"> Zara</td>
          <td className="orderAmount">$240.99</td>
          <td className="orderLocation">UK</td>
          <td className="orderStatus"><Button type='Cancel'/></td>
        </tr>
        <tr className="orderTr">
          <td className="orderUser">
            <img src={mac} width={300} alt="internet issue" className='orderImg' />
            <span className="orderName">Macbook Pro</span>
          </td>
          <td className="orderDate"> 15 Oct 2023</td>
          <td className="orderName"> Apple Macbook</td>
          <td className="orderAmount">$2199.99</td>
          <td className="orderLocation">USA</td>
          <td className="orderStatus"><Button type='Pending'/></td>
        </tr>
        <tr className="orderTr">
          <td className="orderUser">
            <img src={shoe} width={300} alt="internet issue" className='orderImg' />
            <span className="orderName">Shoe</span>
          </td>
          <td className="orderDate"> 15 Oct 2023</td>
          <td className="orderName"> Nike Shoe</td>
          <td className="orderAmount">$299.99</td>
          <td className="orderLocation">USA</td>
          <td className="orderStatus"><Button type='Pending' /></td>
        </tr>
        <tr className="orderTr" >
          <td className="orderUser">
            <img src={watch} width={300} alt="internet issue" className='orderImg' />
            <span className="orderName">Apple Watch</span>
          </td>
          <td className="orderDate"> 15 Oct 2023</td>
          <td className="orderName"> Apple Watch</td>
          <td className="orderAmount">$599.99</td>
          <td className="orderLocation">USA</td>
          <td className="orderStatus"><Button type='Approved'/></td>
        </tr>
        <tr className="orderTr">
          <td className="orderUser">
            <img src={headset} width={300} alt="internet issue" className='orderImg' />
            <span className="orderName">Headset</span>
          </td>
          <td className="orderDate"> 15 Oct 2023</td>
          <td className="orderName"> Samsung Headset</td>
          <td className="orderAmount">$404.99</td>
          <td className="orderLocation">USA</td>
          <td className="orderStatus"><Button type='Cancel' /></td>
        </tr>
      </table>
    </div>
    
  )
}

export default OrderWidget