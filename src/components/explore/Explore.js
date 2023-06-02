import React from "react";
import classes from "./Explore.module.css";
import { Link } from "react-router-dom";
import { MdOutlineLightMode } from "react-icons/md";
import Links from "../utils/links/Links";

const Explore = () => {
  const profession = ["Software developer ", "Technical Writer"];
  return (
    <>
      <div className={classes.container}>
        <div className={classes.header}>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <h3 className={classes.logo}>Kaodili</h3>{" "}
          </Link>
          <div>
            <MdOutlineLightMode color="white" fontSize="20px" />
          </div>
        </div>
        <div className={classes.info}>
          <h1 className={classes.heading}>
            ISIZOH <br /> CHIKAODILI <br /> MODESTA{" "}
          </h1>
          <ul className={classes.list}>
            {profession.map((item, index) => (
              <li className={classes.list_item} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ul className={classes.social}>
          <Links name={"Github"} link={"https://github.com/Kaodily"} />
          <Links
            name={"LinkedIn"}
            link={"https://www.linkedin.com/in/chika-isizoh"}
          />
          <li>
            <Link to={"/projects"} className={classes.social_item}>
              Projects
            </Link>
          </li>
          <li>
            <Link to={"/about"} className={classes.social_item}>
              About
            </Link>
          </li>
          <Links
            name={"Resume"}
            link={"https://www.linkedin.com/in/chika-isizoh"}
          />
          <Links name={"Blog"} link={"https://kaodi.hashnode.dev"} />
        </ul>
      </div>
    </>
  );
};

export default Explore;
