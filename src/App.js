import React, { useState } from 'react';
import Form from "./images/svg/form.svg";
import Submit from "./images/svg/submit.svg";
import CertificateA from "./images/svg/certificateA.svg";
import CertificateD from "./images/svg/certificateD.svg";
import Awards from './components/Awards';
import Lighthouse from "./images/svg/lighthouse.svg";
import Market from "./images/svg/market.svg";
import Turtle from "./images/svg/turtle.svg";
import Color from "./images/svg/color.svg";
import Vector4 from "./images/svg/Vector4.svg";
import Vector5 from "./images/svg/Vector5.svg";
import Wave from "./images/svg/wave.svg";

import Sup from "./images/svg/sup.svg";
import Sup1 from "./images/svg/sup1.svg";
import Paddle from "./images/svg/paddle.svg";
import Paddle1 from "./images/svg/paddle1.svg";
import './App.scss';
import 'animate.css';

const App = () => {
  const [formInput, setFormInput] = useState({ store: '', name: '', amount: '', phone: '', payment: '' });
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const awardText = [
    { id: 1, award: 'A', number: 'ONE', text: 'dehumidifier', certificate: CertificateA },
    { id: 2, award: 'B', number: 'ONE', text: 'range hood', certificate: CertificateA },
    { id: 3, award: 'C', number: 'ONE', text: 'vacuum cleaner', certificate: CertificateA },
    { id: 4, award: 'D', number: 'ONE', text: 'toaster', certificate: CertificateD },
    { id: 5, award: 'E', number: 'ONE', text: 'scale', certificate: CertificateD },
    { id: 6, award: 'F', number: 'ONE', text: 'straightening iron', certificate: CertificateD },
    { id: 7, award: 'G', number: 'FIVE', text: 'vacuum cleaner', certificate: CertificateD },
    { id: 8, award: 'H', number: 'TEN', text: 'rice cooker', certificate: CertificateD }
  ];
  const stores = [{ id: 1, name: 'store1' }, { id: 2, name: '測試store2' }, { id: 3, name: '測驗store3' }];
  const payments = [{ id: 1, option: "digital payment" }, { id: 2, option: "ATM" }];
  const handlePropagation = (e) => {
    e.stopPropagation();
    setOpen(false);
  };
  const handlePropagation1 = (e) => {
    e.stopPropagation();
    setOpen1(false);
  };

  const handlePhoneInput = (e) => {
    const phoneRegexp = /^[0|09][0-9]{0,8}$/;
    console.log('e.target.value ', e.target.value);
    if (!phoneRegexp.test(e.target.value)) {
      return false;
    }
    setFormInput({ ...formInput, phone: e.target.value });
  };

  return (<>

    <div className='container'>
      <div className='background'>
        <div className='areaFirst'>
          <p className='text1'>There is no one</p>
          <p className='text2'>who loves pain</p>

          <img src={Form} alt='' className='Form' />
        </div>
        <div className='paragraphArea'>
          <img src={Sup} alt="" className='Sup' />
          <img src={Paddle} alt="" className='Paddle' />
          <img src={Sup1} alt="" className='Sup1' />
          <img src={Paddle1} alt="" className='Paddle1' />
          <p className='paragraph'> paragraph</p>
          <p>1. Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <p className='paragraph'>paragraph</p>
          <p>1. Quisque sodales leo<u><b> vitae vulputate auctor.</b> </u></p>
          <p>2. Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero a pellentesque blandit. Proin ac justo</p>
          <p>3. Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.  </p>
          <p>4. Donec ultrices sapien<b> vitae leo venenatis ullamcorper.</b></p>
        </div>
      </div>
      <div className='waveArea'>
        <img src={Wave} alt="" className='wave' />
      </div>
      <div className='formDataArea'>
        <div className='formData'>
          <div className='form'>FORM
            <img src={Turtle} alt="" className='Turtle ' /></div>
          <div>
            <p>store</p>
            <div className='inputFirst' onClick={() => { setOpen(true); }}>
              <input className='inputInner' type="text" placeholder=' placeholder text'
                value={formInput.store} onChange={(e) => { setFormInput({ ...formInput, store: e.target.value }); }}
              />

              {open && <div className="inputOption" onClick={handlePropagation}>
                {stores.filter(({ name }) => name.includes(formInput.store)).map(({ id, name }) => {
                  return (
                    <div className='item' key={`stores${id}`} onClick={() => { setFormInput({ ...formInput, store: name }); }}>{name}</div>
                  );
                })}
              </div>}
              <img src={Color} alt="" className='Color' />
            </div>
          </div>
          <div>
            <p> name</p>
            <input className='input' placeholder='placeholder text' type="text" value={formInput.name} onChange={(e) => { setFormInput({ ...formInput, name: e.target.value }); }} required />
          </div>
          <div>
            <p>phone</p>
            <input className='input' placeholder='placeholder text' type="text" inputMode='tel' maxLength={10} value={formInput.phone} onChange={handlePhoneInput} required />
          </div>
          <div>
            <p>Amount of consumption</p>
            <input className='input' placeholder='placeholder text' type="text" inputMode='number' value={formInput.amount} onChange={(e) => { setFormInput({ ...formInput, amount: e.target.value }); }} required />
          </div>
          <div>
            <p> payment</p>


            <div className='inputFirst' onClick={() => { setOpen1(true); }}>
              <input className='inputInner' type="text" placeholder=' placeholder text'
                value={formInput.payment} onChange={(e) => { setFormInput({ ...formInput, payment: e.target.value }); }}
              />

              {open1 && <div className="inputOption" onClick={handlePropagation1}>
                {payments.filter(({ option }) => option.includes(formInput.payment)).map(({ id, option }) => {
                  return (
                    <div className='item' key={`stores${id}`} onClick={() => { setFormInput({ ...formInput, payment: option }); }}>{option}</div>
                  );
                })}
              </div>}
              <img src={Color} alt="" className='Color' />
            </div>
          </div>
        </div>
        <div className='Submit'>
          <img src={Submit} alt='' />
        </div>
      </div>
      <div className='areaThird'>
        {awardText.map((allAward) => {
          return (
            <Awards allAward={allAward} key={`awardText${allAward.id}`} />
          );
        })}
      </div>
      <div className='areaFourth'>


        <div className='areaFourthText'>
          <p>13.32</p>
          <p>who seeks after it and </p>
          <p>wants to have it</p>
          <img src={Vector4} alt="" className='Vector4' />
          <img src={Vector5} alt="" className='Vector5' />
        </div>
        <div><img src={Lighthouse} alt='' className='Lighthouse' /></div>
      </div>
      <div className='areaFifth'>
        <p>Neque porro quisquam
        </p>
        <p>est qui dolorem!
        </p>
        <img src={Market} alt='' className='Market' />

      </div>
      <br />

    </div>
    <br />

    <img src='/png/14001_.png' alt='' className='' />
    <img src='/png/1400_.png' alt='' className='' />

    <br />
    <img src='/png/文字輸入框說明.png' alt='' className='' />
    <br />

    <img src='/png/輸入資料說明.png' alt='' className='' />


  </>);
};

export default App;