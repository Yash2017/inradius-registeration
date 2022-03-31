import React from "react";
import { Layout, Select } from "antd";
import "../QualificationEntry/QualificationEntry.css";
import DropdownMenu from "../../components/DropdownMenu/DropdownMenu";
import "antd/dist/antd.css";
import { Content } from "antd/lib/layout/layout";
import LeftRightNavigator from "../../components/LeftRightNavigator/LeftRightNavigator";
function Industry() {
  const { Option } = Select;
  const cityData = {
    Industries: ["IT", "FMCG Jobs", "Marketing"],
    Domain: ["ReactJS", "Redux", "Food & Packaged Food"],
  };
  const provinceData = ["Industries", "Domain"];
  const [cities, setCities] = React.useState(cityData[provinceData[0]]);
  const [secondCity, setSecondCity] = React.useState(
    cityData[provinceData[0]][0]
  );
  const [industry, setIndusty] = React.useState({ Industry: "", Domain: "" });

  const handleProvinceChange = (value) => {
    setCities(cityData[value]);
    const ind = { Industry: value };
    setIndusty({ ...industry, ...ind });
  };

  const onSecondCityChange = (value) => {
    setSecondCity(value);
    const ind = { Domain: value };
    setIndusty({ ...industry, ...ind });
  };

  return (
    <Layout style={{ overflow: "hidden" }}>
      <Layout style={{ padding: "24px 24px 24px" }}>
        <Content className="main-content">
          <div
            style={{
              width: "300px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Select
              defaultValue={provinceData[0]}
              onChange={handleProvinceChange}
            >
              {provinceData.map((province) => (
                <Option key={province}>{province}</Option>
              ))}
            </Select>
            <Select value={secondCity} onChange={onSecondCityChange}>
              {cities.map((city) => (
                <Option key={city}>{city}</Option>
              ))}
            </Select>
            <LeftRightNavigator sliderVal={{ ...industry }} />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}

export default Industry;
