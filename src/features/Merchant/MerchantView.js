import React from "react";
import { UseMerchant } from "./UseMerchant";
import "./MerchantView.css";

const MerchantView = () => {
  const {
    kodeTransaksi,
    email,
    onChangeKodeTransaksi,
    onChangeEmail,
    onSubmitData,
    title,
    image,
    bgcolor,
    isSubmitDisabled,
    warning
  } = UseMerchant();

  return (
    <div
      className="middle-container-merchant"
      style={{ backgroundColor: bgcolor }}
    >
      <div className="container-merchant merchant-responsive">
        <div className="logo-merchant-style">
          <img src={image} alt={"logo"} draggable="false" width={"300px"}></img>
        </div>

        <div className="form-merchant">
          <input
            onChange={onChangeKodeTransaksi}
            value={kodeTransaksi}
            className="input-style-merchant"
            style={{ borderColor: bgcolor }}
            placeholder="Kode Transaksi"
          ></input>
          <input
            onChange={onChangeEmail}
            value={email}
            placeholder="Email"
            className="input-style-merchant"
            style={{ borderColor: bgcolor }}
          ></input>
          <p>{warning}</p>
          <button
            onClick={onSubmitData}
            disabled={isSubmitDisabled}
            className="button-submit-merchant"
            style={{ backgroundColor: bgcolor }}
          >
            {" "}
            Submit{" "}
          </button>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default MerchantView;
