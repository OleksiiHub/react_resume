import { CircularProgress, Slide, TextField } from '@mui/material'
import { useEffect, useState } from "react";
import { NestedModal } from '../components/NestedModal';
import { GiWinterHat, GiWinterGloves, GiDress, GiTShirt, GiUnderwearShorts, GiHoodie, GiTrousers, GiMonclerJacket, GiLabCoat } from "react-icons/gi";

export function GetWeather() {

    const [cityName, setCityName] = useState("Kharkiv");
    const [inputText, setInputText] = useState("");
    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const API_KEY = '07fc0e6279dd2ad5b7595ff0bf4ab81c';

    useEffect(() => {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
        )
            .then((res) => {
                if (res.status === 200) {
                    error && setError(false);
                    return res.json();
                } else {
                    throw new Error("Что-то пошло не так");
                }
            })
            .then((data) => {
                setData(data);
            })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [cityName, error]);

    const handleSearch = (e) => {
        if (e.key === "Enter") {
            setCityName(e.target.value);
            setInputText("");
        }
    };

    function wear() {
        if (data.main.feels_like.toFixed() > 20) {
            return [<GiTShirt />, <GiUnderwearShorts />, <GiDress />]
        }
        else if (data.main.feels_like.toFixed() <= 20 && data.main.feels_like.toFixed() > 15) {
            return [<GiHoodie />, <GiTrousers />]
        }
        else if (data.main.feels_like.toFixed() <= 15 && data.main.feels_like.toFixed() > 5) {
            return <GiMonclerJacket />
        }
        else if (data.main.feels_like.toFixed() <= 5 && data.main.feels_like.toFixed() > 0) {
            return <GiLabCoat />
        }
        else if (data.main.feels_like.toFixed() <= 0) {
            return [<GiWinterHat />, <GiWinterGloves />]
        }
    }

    return (
        <div className="bg_img">
            {!loading ? (
                <>
                    <TextField
                        variant="filled"
                        label="Search location"
                        className="input"
                        error={error}
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleSearch}
                    />
                    <h1 className="city">{data.name}</h1>
                    <div className="group">
                        <img
                            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                            alt="cloud"
                        />
                        <h1 className="clouds">{data.weather[0].main}</h1>
                    </div>

                    <h1 className="temp">{data.main.temp.toFixed()} °C</h1>

                    <Slide direction="right" timeout={800} in={!loading}>
                        <div className="box_container">
                            <div className="box">
                                <p>Humidity</p>
                                <h1>{data.main.humidity.toFixed()}%</h1>
                            </div>
                            <div className="box">
                                <p>Sea Level</p>
                                <h1>{data.main.sea_level || '- - -'} m</h1>
                            </div>
                            <div className="box">
                                <p>Wind</p>
                                <h1>{data.wind.speed.toFixed()} km/h</h1>
                            </div>
                            <div className="box">
                                <p>Feels Like</p>
                                <h1>{data.main.feels_like.toFixed()}</h1>
                            </div>
                            <div className="box">
                                <p>What to wear?</p>
                                <h1>{wear()}</h1>
                            </div>
                        </div>
                    </Slide>
                    <NestedModal />
                </>
            ) : (
                <CircularProgress />
            )}
        </div>
    );
}


