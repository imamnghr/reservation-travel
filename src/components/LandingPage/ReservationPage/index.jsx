import { Col, Row } from "react-bootstrap";
import { Select } from "antd";

const { Option } = Select;
function onChange(value) {
  console.log(`selected ${value}`);
}

function onSearch(val) {
  console.log("search:", val);
}
const ReservationPage = () => {
  return (
    <div
      className="res-content"
      style={{
        backgroundImage: `url(${require("../../../assets/img/bg-img3.png")}`,
      }}
    >
      <div className="bg-color">
        <h1 className="title-res">Reservation</h1>
        <div className="res-contact">
          <div className="input-text">
            <input type="text" placeholder="Input your name" />
          </div>
          <div className="input-text">
            <input type="text" placeholder="Input your email" />
          </div>
          <Row>
            <Col xs={5}>
              <div className="phone">
                <input type="text" placeholder="Phone Number" />
              </div>
            </Col>
            <Col xs={5}>
              <div className="country">
                <Select
                  showSearch
                  placeholder="Select a person"
                  optionFilterProp="children"
                  onChange={onChange}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="tom">Tom</Option>
                </Select>
                ,
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
