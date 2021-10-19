import React from "react";
import { Col, Row } from "antd";
import { Card } from "antd";
import "./ListCocktails.scss";
const ListCocktails = ({ listCocktails }) => {
  return (
    <>
      {listCocktails.length > 0 ? (
        <Row className="list-cocktails">
          {listCocktails.map((item, index) => (
            <Col span={6} key={index} className="list-cocktails__col">
              <Card
                hoverable
                style={{ width: 340 }}
                cover={<img alt="example" src={item.strDrinkThumb} />}
              >
                <h3>{item.strDrink}</h3>
                {item.description === null ? (
                  <p>Description is not available on this languages.</p>
                ) : (
                  <p>{item.description}</p>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        <Row className="empty-cocktails">
          <div>
            <div>There are no result :(</div>{" "}
          </div>
        </Row>
      )}
    </>
  );
};

export default ListCocktails;
