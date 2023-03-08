import { useNavigate } from "react-router-dom"
import "./ButtonPicker.css"

export const ButtonPicker =({id, color, image, widthImg, heightImg, label, logo}) => {
    const navigate = useNavigate()
    return(
        <button
            id={id}
            className="button-17 button-responsive"
            onClick={() => navigate(`/${id}`, {state: {label: `${label}`, logo: logo, bgcolor: color}})}
            style={{
                    color: color,
                    padding: '1.5%'
                }}
        >
            <img src={image} style={{width: widthImg, height: heightImg, marginRight: "8px"}}></img>
            <p className="label-style">{label}</p>
        </button>
    )
}