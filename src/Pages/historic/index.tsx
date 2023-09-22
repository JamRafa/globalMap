import { useSelector } from "react-redux";
import "./historic.scss";
import { Iredux } from "../../Interfaces/redux";
import { ICountryLocation } from "../../Interfaces/countryData";
import { useDispatch } from "react-redux";
import { newArray } from "../../Store/reducers/SearchCountry";
import { useNavigate } from "react-router-dom";
import { changePositionArray } from "../../Utils/formatData";

export default function Historic() {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const historic = useSelector((state: Iredux) => state.countryData);
  console.log(historic);

  return (
    <>
      <div className="overLay" onClick={() => nav("/")} />
      <div className="historicTab">
        <div className="historicTitle">
          <p className="historicText">Historico</p>
          <p className="historicSubText">Reenconte aquele país</p>
        </div>
        <div className="group">
          {historic.map((contry: ICountryLocation, index) => (
            <div
              key={index}
              className="hisroric"
              onClick={() =>
                dispatch(
                  newArray(changePositionArray(historic, contry.name.common))
                )
              }
            >
              <div className="cardHeader">
                <img src={contry.flag?.svg} alt={contry.flag?.alt} />
                <div className="headerText">
                  <h3>{contry.name.common}</h3>
                  <p>{contry.name.official}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="botton"></div>
    </>
  );
}
