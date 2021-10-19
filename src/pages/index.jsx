import Search from "antd/lib/transfer/search";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getPostList } from "store/post/post.action";
import { Col, Row } from "antd";
import "./index.scss";
import SearchBar from "./search-bar";
import ListCocktails from "./list-cocktails/ListCocktails";

const Home = () => {
  const [listCocktails, setListCocktails] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("strInstructions");
  const getCocktails = async (keySearch) => {
    const data = await axios
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keySearch}`
      )
      .then((rs) => (rs.drinks !== null ? rs.data.drinks : null))
      .catch((err) => null);
    if (data === null) {
      setListCocktails([]);
      return;
    }
  };

  useEffect(()=>{
    getCocktails('')
  },[])
  const onChangeLanguages = (e) => {
    setCurrentLanguage(e)
  };

  return (
    <div className="content">
      <SearchBar
        onSearch={(value) => getCocktails(value)}
        onChangeLanguages={onChangeLanguages}
      ></SearchBar>

      <ListCocktails listCocktails={listCocktails} currentLanguage={currentLanguage}></ListCocktails>
    </div>
  );
};
export default Home;
// Axios.get(`http://localhost:8000/users?name=${key}`)
//     .then(res => setDropdownOptions(res.data));
