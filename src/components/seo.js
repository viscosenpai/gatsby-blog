import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ title, description }) => {
  return (
    <Helmet
      htmlAttributes={{ lang: "ja-jp"}}
      title={title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: `og:title`,
          content: title,
        },
        {
          name: `og:description`,
          content: description,
        },
        {
          name: `og:type`,
          content: `website`,
        },
        {
          name: `og:site_name`,
          content: `Dev Blog`,
        },
        {
          name: `og:locale`,
          content: `ja_JP`,
        },
      ]} />
  );
};

export default SEO;