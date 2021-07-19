import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
} from "shards-react";

const TopReferrals = ({ title, referralData }) => (
  <Card small>
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
      <div className="block-handle" />
    </CardHeader>

    <CardBody className="p-0">
      <ListGroup small flush className="list-group-small">
        {referralData.map((item, idx) => (
          <ListGroupItem key={idx} className="d-flex px-3">
          <Link to={item.url}>
            <span className="text-semibold text-fiord-blue" style={{ 'fontSize': '15px' }}>{item.title}</span>
          </Link> 
          </ListGroupItem>
        ))}
      </ListGroup>
    </CardBody>
  </Card>
);

TopReferrals.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The referral data.
   */
  referralData: PropTypes.array
};

TopReferrals.defaultProps = {
  title: "Choose Profile Type",
  referralData: [
    {
      title: "Service Provider",
      url: "/service-provider-profile"
    },
    {
      title: "Supplier",
      url: "/supplier-profile"
    },
    {
      title: "Tutor",
      url: "/tutor-profile"
    },
    {
      title: "Architect",
      url: "/architect-profile"
    },
    {
      title: "Web Developer",
      url: "/developer-profile"
    },
  ]
};

export default TopReferrals;
