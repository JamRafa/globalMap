import { Search } from "@mui/icons-material";
import "./textField.scss";
import "../../Styles/colours.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { saveCountry } from "../../Store/reducers/SearchCountry";
import { handleleSearchAction } from "../../Utils/Search";

export default function Text() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState<string>("");

  return (
    <div className="busca">
      <input
        className="input"
        placeholder="O que você procura?"
        value={search}
        onChange={(ev) => setSearch(ev.target.value)}
      />
      <Search
        type="text"
        sx={{ color: "$cor-primaria" }}
        onClick={async (ev) => {
          dispatch(saveCountry(await handleleSearchAction(search)));
        }}
      />
    </div>
  );
}
