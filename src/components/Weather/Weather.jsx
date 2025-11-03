import { Card } from "react-bootstrap";
import styles from "./Weather.module.scss";
import PositionSvg from "../Svgs/PositionSvg";
import DefaultWeather from "../Svgs/DefaultWeather";
import Themomenter from "../Svgs/Thermomenter";
import Time from "../Svgs/Time";
import Wind from "../Svgs/Wind";

export default function Weather() {
  return (
    <Card className={styles.container}>
      <Card.Body>
        <Card.Title>
          Marrakech, MA <PositionSvg />
        </Card.Title>

        <Card.Text as="div" className={styles.weatherInfos}>
          <div>
            <DefaultWeather width={250} height={250} />
          </div>
          <div className={styles.temperature}>
            <span> 35° C</span>
            <span>
<Themomenter width={45} height={45}/>
            </span>
           </div>
          <div>
        <span>15H22MIN</span>  
        <span>
            <Time width={45} height={45} mode="night"/>
        </span>
        </div>
        <div className={styles.infos}>
        <div >
            <div>
                <DefaultWeather width={25} height={25}/>
            </div>
        <div>SUNRISE</div>
        <div> 08:00</div>
        </div>
        <div>
            <div> 
                <Wind width={25} height={25}/>
            </div>
            <div>WIND</div>
        <div> 08m/s</div>
        </div>
        <div>
            <div>
                <Themomenter width={25} height={25}/>
            </div>
            <div>TEMPERATURE</div>
        <div>  35° C</div>
        </div>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
