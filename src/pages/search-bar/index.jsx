import React, { useRef, useState } from "react";
import { Input, Row, Select } from "antd";
import "./search-bar.scss";
import { SearchOutlined } from "@ant-design/icons";
import { Lang } from "../constant";
const SearchBar = ({ onSearch, onChangeLanguages }) => {
  const { Option } = Select;

  const typingTimeoutRef = useRef(null);
  const [searchKey, setSearchKey] = useState("");
  const handleChange = (e) => {
    setSearchKey(e.target.value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    if (e.target.value === "") {
      onSearch(e.target.value);
      return;
    }
    typingTimeoutRef.current = setTimeout(() => onSearch(e.target.value), 1000);
  };
  const selectAfter = (
    <Select
      defaultValue="EN"
      onChange={(value) => onChangeLanguages(value)}
      className="select-lang"
    >
      <Option value={Lang.EN}>EN</Option>
      <Option value={Lang.ES}>ES</Option>
      <Option value={Lang.DE}>DE</Option>
      <Option value={Lang.FR}>FR</Option>
      <Option value={Lang.IT}>IT</Option>
      <Option value={Lang.ZH_HANS}>ZH-HANS</Option>
      <Option value={Lang.ZH_HANT}>ZH-HANT</Option>
    </Select>
  );
  return (
    <Row style={{ justifyContent: "center" }}>
      <Input
        className="search-cocktail"
        addonBefore={<SearchOutlined />}
        addonAfter={selectAfter}
        placeholder="input search text"
        value={searchKey}
        allowClear
        onChange={handleChange}
      />
    </Row>
  );
};

export default SearchBar;
