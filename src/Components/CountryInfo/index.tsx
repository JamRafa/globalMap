import {
  Close,
  Flag,
  FmdGood,
  Groups,
  MonetizationOn,
  Public,
  RecordVoiceOver,
} from "@mui/icons-material";
import { ICountryLocation } from "../../Interfaces/countryData";
import "./contryInfo.scss";
interface CountryInfoProps {
  isOpen: boolean;
  data: ICountryLocation;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export default function CountryInfo({
  isOpen,
  data,
  setIsOpen,
}: CountryInfoProps) {
  const money = () => {
    if (data.currencies) {
      const currencyEntries = Object.entries(data.currencies);

      return (
        <div className="money">
          <MonetizationOn />
          {currencyEntries.map(([key, value]) => (
            <div key={key} className="moneyInfo">
              <p> {value.name}</p>
              <p>{value.symbol}</p>
            </div>
          ))}
        </div>
      );
    } else {
      return <p>Nenhuma moeda disponível.</p>;
    }
  };
  const lang = () => {
    if (data.languages) {
      const currencyEntries = Object.entries(data.languages);

      return (
        <div className="money">
          {currencyEntries.map(([key, value]) => (
            <div key={key} className="moneyInfo">
              <p>{value}</p>
            </div>
          ))}
        </div>
      );
    } else {
      return <p>Nenhuma lingua.</p>;
    }
  };

  return isOpen ? (
    <>
      <div className="countryInfo">
        <div className="flag">
          <img src={data.flag?.svg} alt="a" />
        </div>
        <div className="allText">
          <div className="textImage">
            <div className="position">
              <div className="separa">
                <FmdGood />
                {data.position.lat} | {data.position.lng}
              </div>
              <div onClick={() => setIsOpen(!isOpen)}>
                <Close className="iconClose" />
              </div>
            </div>
            <h2>{data.name.common}</h2>
            <div className="head">
              <div>
                <p>{data.name.official}</p>
                <div className="cap">
                  <Flag />
                  {data.capital}
                </div>
              </div>
              {money()}
            </div>
            <div className="armyImg">
              <img src={data.coatOfArms?.svg} alt="coatOfArms"></img>
            </div>
          </div>
          <div className="icons">
            <div className="sub-icons">
              <Public />
              <p> {data.region}</p>
            </div>
            <div className="sub-icons">
              <Groups />
              <p> {data.population}</p>
            </div>
            <div className="sub-icons">
              <RecordVoiceOver />
              <div> {lang()}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <></>
  );
}
