import React, { useEffect } from 'react';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { auth } from './config/firebase';
import { useAppDispatch } from './redux/store.hooks';
import Route from './route/index';


import Header from './components/Header/Header';
import { onAuthStateChanged, sendEmailVerification, signOut } from 'firebase/auth';
import { addUser } from './redux/action-slides/auth.slice';



function App() {


  const navigate = useNavigate();
  const dispatch = useAppDispatch()


  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, async (user) => { //  ta tai khoan thanh cong thi` sex goi vao ham` nay`


      //console.log("User dang ki thanh cong" + user);
      //  console.log(user.emailVerified) // Kt xem email da dc xac thuc chua


      if (user) {

        const providerId = user.providerData.some((p) => p.providerId === 'password');

        if (providerId && !user.emailVerified) {  //Nếu user đăng nhập bằng gmail và password thì kiểm tra xác thực - Neu email chua xac thuc, yeu cau nguoi` dung` xac thuc moi cho login

          await sendEmailVerification(user); // gui mail yeu cau xac thuc den user

          await signOut(auth);// sau khi gui emal xac thuc cho user thi` redirect user den trang email_verifiled 
          // console.log(user.emailVerified)  w

          return navigate('/email_verified');

        } else { // Nếu user đăng nhập bằng Facebook || Google thì ko cãn xác thực email

          // console.log(user); // Neu nhu email da~ xac' thuc thi` 

          dispatch(addUser(user))
        }

      } else {

      }
    })


    return unSubscribe;

  }, [])






  return (
    <>
      <Header />
      <Route />
      <ToastContainer />
    </>
  );
}


export default App;
