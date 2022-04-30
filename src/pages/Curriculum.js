import React from "react";

import Global from "../styles/global";

import { Grid } from "@material-ui/core";


const goal = "OBJETIVO"
const goal_message = "Atuar no desenvolvimento Mobile, colaborando com aequipe para criar soluções inovadoras e orientadas para o desempenho, crescer tanto pessoalmente, quanto profissionalmente."

const contact = "CONTATO"
const contact_message = "TELEFONE: +55 (35) 999-578-820 EMAIL: moisesdelmoro@outlook.com GITHUB: MoisesSDelmoro"

const skills = "HABILIDADES"
const skills_message = "Flutter JavaScript React Js Python Django Dart Java C++ HTML CSS MySQL Inglês : Intermediário (Cursando – KNN – Ouro Fino - MG)"

const name = "Moises S Delmoro"
const course = "Bacharel em Engenharia da Computação"

const academic_education = "FORMAÇÃO ACADÊMICA"

const university = "INATEL - Instituto Nacional de Telecomunicações";
const university_message = "[01/2017] – [previsão 12/2021] Cursando o 5º ano (10º período) de engenharia da computação. Disponibilidade 40h/semana."

const school = "Instituto Federal do Sul de Minas – Câmpus Incofidentes"
const school_essage = "[01/2014] – [12/2016] Técnico em informática com ênfase em programação e desenvolvimento Web."

const work_sperience = "EXPERIÊNCIA PROFISSIONAL"

const bedu_tech = "[Bedu Tecnnologia LTDA] [Estagiário em desenvolvimento]"
const bedu_tech_message = "[05/2021] – [11/2021] Atuei nas áreas de desenvolvimento Web (ReactJS) e Mobile (Flutter) e  backend (Django), deploy no Google Cloud e relatório de dados no Google Data Studio durante 7 meses. "

const projects = "PROJETOS"

function Curriculum() {
  return (
    <>
      <div className="Page">
        <Global />
        {/* <Home boxData={data} /> */}
        <Grid container style={{ textAlign: "center" }}>
          <Grid item xs={3} style={{ backgroundColor: "green" }}>
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid item>
                <h2>{goal}</h2>
                <h5>{goal_message}</h5>
                <h2>{contact}</h2>
                <h5>{contact_message}</h5>
                <h2>{skills}</h2>
                <h5>{skills_message}</h5>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={9} style={{ backgroundColor: "red" }}>
            <h2>{name}</h2>
                <h5>{course}</h5>
                <h5>{academic_education}</h5>
                <h5>{university}</h5>
                <h5>{university_message}</h5>
                <h5>{school}</h5>
                <h5>{school_essage}</h5>
                <h5>{work_sperience}</h5>
                <h5>{bedu_tech}</h5>
                <h5>{bedu_tech_message}</h5>
                <h5>{projects}</h5>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Curriculum;