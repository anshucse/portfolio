import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";
import ExpenseTracker from "../../Assets/Projects/ExpenseTracker.png";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="E-Shop"
              description="This is a fully functional eCommerce website that uses React.js in the front end , where we can see Different type of products with details and we can add and delete products in cart .etc.."
              ghLink="https://github.com/anshucse/e-shop-context"
              demoLink="https://e-shop-context-weld.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Restaurant_Management"
              description="This project designed for to be used by Restaurant Management it
Specializing in Managing the Restaurant facility like Food quality
,Types of food ,Customers Review about food etc.."
              ghLink="https://github.com/anshucse/Restaurant_Management"
              demoLink="https://restaurant-management-two.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="E-Movie"
              description="i this project i show all movies and tvshow through fetching API from TMDB using React js and Redux where we can filter and search all movies and watch etc...."
              ghLink="https://github.com/anshucse/E-Movie"
              demoLink="https://e-movie-iota.vercel.app/"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ExpenseTracker}
              title="Expense Tracker"
              description="An online expense tracker using React,JavaScript, It allows you to keep track of your expenses etc.."
              ghLink="https://github.com/anshucse/expense-manager"
              demoLink="https://expense-manager-liard.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
