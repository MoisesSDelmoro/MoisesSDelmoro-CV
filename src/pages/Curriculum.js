import React from "react";

import Global from "../styles/global";

import { Grid, Typography } from "@material-ui/core";


const goal = "OBJETIVO"
const goal_message = "Atuar no desenvolvimento Mobile, colaborando com a equipe para criar soluções inovadoras e orientadas para o desempenho, crescer tanto pessoalmente, quanto profissionalmente."

const contact = "CONTATO"
const contacts = ["TELEFONE: +55 (35) 999-578-820", "MAIL: moisesdelmoro@outlook.com", "GITHUB: MoisesSDelmoro"]

const skills = "HABILIDADES"
const my_skills = ["Flutter", "JavaScript", "React Js", "Python", "Django", "Dart", "Inglês : Intermediário (Cursando – KNN – Ouro Fino - MG)"]

const name = "Moises S Delmoro"
const course = "Bacharel em Engenharia da Computação"

const academic_education = "FORMAÇÃO ACADÊMICA"

const university = "INATEL - Instituto Nacional de Telecomunicações";
const university_message = "[01/2017] – [12/2021] Bacharel em Engenharia da Computação."

const school = "Instituto Federal do Sul de Minas – Câmpus Incofidentes"
const school_essage = "[01/2014] – [12/2016] Técnico em informática com ênfase em programação e desenvolvimento Web."

const work_sperience = "EXPERIÊNCIA PROFISSIONAL"

const bedu_tech = "[Bedu Tecnnologia LTDA] [Estagiário em desenvolvimento]"
const bedu_tech_message = "[05/2021] – [11/2021] Atuei nas áreas de desenvolvimento Web (ReactJS) e Mobile (Flutter) e  backend (Django), deploy no Google Cloud e relatório de dados no Google Data Studio durante 7 meses. "

const projects = "PROJETOS"

function Curriculum() {
  return (
    <>
      <Global />
      {/* <Home boxData={data} /> */}
      <Grid container>
        <Grid item xs={3} style={{ backgroundColor: "#c4c4c4" }}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Typography variant="h6">{goal}</Typography>
              <Typography variant="body2">{goal_message}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">{contact}</Typography>
              {contacts.map((item) => <Typography variant="body2" key={item}>{item}</Typography>)}
            </Grid>
            <Grid item>
              <Typography variant="h6">{skills}</Typography>
              {my_skills.map((item) => <Typography variant="body2" key={item}>{item}</Typography>)}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={9} style={{ backgroundColor: "#c5c5c5" }}>
          <Grid item>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2">{course}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{academic_education}</Typography>
            <Typography variant="body2">{university}</Typography>
            <Typography variant="body2">{university_message}</Typography>
            <Typography variant="body2">{school}</Typography>
            <Typography variant="body2">{school_essage}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{work_sperience}</Typography>
            <Typography variant="body2">{bedu_tech}</Typography>
            <Typography variant="body2">{bedu_tech_message}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{projects}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Curriculum;