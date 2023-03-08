import './Loading.css'
import Lottie from "lottie-react";
import loading from '../../../assets/loading.json'

export const Loading = () => {
    return (
        <div className='backdrop-container'>
            <div className='backdrop-content'>
                <Lottie animationData={loading} loop={true} style={{width:'130px',height:'130px'}}/>
                Please Wait!
            </div>
        </div>
    )
}