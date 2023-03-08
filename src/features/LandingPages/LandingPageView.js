import React from "react";
import { useNavigate } from "react-router-dom";
import xlIcon from "../../assets/images/xlIcon.png";
import tokopediaIcon from "../../assets/images/tokopediaIcon.png";
import tokopediaLogo from "../../assets/images/tokopediaLogo.png";
import shopeeIcon from "../../assets/images/shopeeIcon.png";
import shopeeLogo from "../../assets/images/shopeeLogo.png";
import blibliIcon from "../../assets/images/blibliIcon.png";
import blibliLogo from "../../assets/images/blibliLogo.png";
import bukalapakIcon from "../../assets/images/bukalapakIcon.png";
import bukalapakLogo from "../../assets/images/bukalapakLogo.png";
import lazadaIcon from "../../assets/images/lazadaIcon.png";
import lazadaLogo from "../../assets/images/lazadaLogo.png";
import { Color } from "../../shared/constant";
import "../../features/LandingPages/LandingPageView.css";
import { ButtonPicker } from "../../shared/component/button/ButtonPicker";

export const LandingPageView = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="logo">
        <img src={xlIcon} alt={"logo"} draggable="false" width={150}></img>
      </div>

      <div>
        <h1 className="text-style"> Selamat Datang </h1>
        <h3 className="text-style"> Silakan pilih market place </h3>
      </div>
      <div className="row button-space">
        <ButtonPicker
          id="tokopedia"
          color={Color.tokopediaColor}
          image={tokopediaIcon}
          widthImg="32px"
          heightImg="40px"
          label={"Tokopedia"}
          logo={tokopediaLogo}
        ></ButtonPicker>
      </div>
      <div className="row button-space">
        <ButtonPicker
          id="shopee"
          color={Color.shopeeColor}
          image={shopeeIcon}
          widthImg="32px"
          heightImg="35px"
          label={"Shopee"}
          logo={shopeeLogo}
        ></ButtonPicker>
      </div>
      <div className="row button-space">
        <ButtonPicker
          id="blibli"
          color={Color.blibliColor}
          image={blibliIcon}
          widthImg="32px"
          heightImg="35px"
          label={"Blibli"}
          logo={blibliLogo}
        ></ButtonPicker>
      </div>
      <div className="row button-space">
        <ButtonPicker
          id="bukalapak"
          color={Color.bukalapakColor}
          image={bukalapakIcon}
          widthImg="32px"
          heightImg="35px"
          label={"Bukalapak"}
          logo={bukalapakLogo}
        ></ButtonPicker>
      </div>
      <div className="row button-space">
        <ButtonPicker
          id="lazada"
          color={Color.lazadaColor}
          image={lazadaIcon}
          widthImg="35px"
          heightImg="35px"
          label={"Lazada"}
          logo={lazadaLogo}
        ></ButtonPicker>
      </div>
    </div>
  );
};
