import React, { useEffect, useState } from "react";
import { useLocation, useNavigation } from "react-router-dom";

export const UseMerchant = () => {
  const [kodeTransaksi, setKodeTransaksi] = useState("");
  const [email, setEmail] = useState("");
  const [title, setTitle] = useState("")
  const [image, setImage] = useState()
  const [bgcolor, setBgcolor] = useState()
  const [isSubmitDisabled, setISubmitDisabled] = useState(true)
  const [warning, setWarning] = useState("")
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // const [inputData, setInputData] = useState({
  //   kode_transaksi: '',
  //   email: ''
  // })

  const {state} = useLocation()

  useEffect(() => {
    setTitle(state.label)
    setImage(state.logo)
    setBgcolor(state.bgcolor)
  }, [state])

  useEffect(() => {
    if(!email.match(mailformat)){
      setWarning("Please input correct email")
    }else{
      setWarning('')
    }
  }, [email])

//   useEffect(() => {
//     if (inputData["email"].match(mailformat) && inputData['kode_transaksi'] !== '') {
//         setISubmitDisabled(false)
//     } else {
//         setISubmitDisabled(true)
//     }
// }, [inputData])


  const onChangeKodeTransaksi = (e) => {
    setKodeTransaksi(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSubmitData = async () => {
    alert("Data submitted");
    // Panggil API Submit data
  };
  return {
    kodeTransaksi,
    email,
    onChangeKodeTransaksi,
    onChangeEmail,
    onSubmitData,
    title,
    image,
    bgcolor,
    warning
  };
};

