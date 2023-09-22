import { Search } from "@mui/icons-material";
import "./textField.scss";
import "../../Styles/colours.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCountry } from "../../Store/reducers/SearchCountry";
import { handleleSearchAction } from "../../Utils/Search";
import { useSelector } from "react-redux";
import { Iredux } from "../../Interfaces/redux";
import { changePositionArray } from "../../Utils/formatData";

export default function Text() {
  const dispatch = useDispatch();
  const historic = useSelector((state: Iredux) => state.countryData);
  const [search, setSearch] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <div className="busca">
        <input
          className="input"
          placeholder="O que você procura?"
          value={search}
          onChange={(ev) => setSearch(ev.target.value)}
        />
        <Search
          className="search"
          type="text"
          sx={{ color: "$cor-primaria" }}
          onClick={async (ev) => {
            console.log(changePositionArray(historic, search), 'teste de fun')
            if (changePositionArray(historic, search) === false) {
              dispatch(saveCountry(await handleleSearchAction(search)));
            }
          }}
        />
      </div>
      {isOpen ? (
        <>
          <div className="buscaSmallOpen">
            <input
              className="input"
              placeholder="O que você procura?"
              value={search}
              onChange={(ev) => setSearch(ev.target.value)}
            />
            <Search
              className="search"
              type="text"
              sx={{ color: "$cor-primaria" }}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </>
      ) : (
        <div className="buscaSmall" onClick={() => setIsOpen(!isOpen)}>
          <Search
            className="search"
            type="text"
            sx={{ color: "$cor-primaria" }}
          />
        </div>
      )}
    </>
  );
}
