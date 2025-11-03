import wallpaper from'../../assets/img/noaa-99F4mC79j1I-unsplash.jpg'
import './Wallpaper.scss'
export default function Wallpaper(){
    return(
        <>
        
<div className="wallpaper-container position-fixed d-flex top-0 bottom-0 end-0 start-0">
            <img className='wallpaper' src={wallpaper} alt="wallpaper" />
        </div>

        
        </>
    )
}