import React from 'react';
import classes from './ProjectsPage.module.scss';
import Button from '../common/Button/Button';
import Tag from './Tag/Tag';
import Project from './Project/Project';
import Title from '../common/Title/Title';
import ToggleButtonsContainer from '../common/ToggleButtons/ToggleButtonsContainer';
import MenuContainer from '../common/Menu/MenuContainer';

const ProjectsPage = (props) => {
  let tagsList = props.projects.tags.map((el) => (
    <Tag key={el.id} name={el.name} />
  ));

  let projectsList = props.projects.projects.map((el) => {
    if (el.id <= 2) {
      return <Project key={el.id} id={el.id} name={el.name} image={el.image} />;
    }
  });

  return (
    <div className={classes.wrapper}>
      <div className={classes.toggles}>
        <ToggleButtonsContainer />
      </div>
      <div className={classes.block}>
        <MenuContainer />
        <Title text={props.projects.title} />
        <div className={classes.section}>
          <ul className={classes.listTags}>{tagsList}</ul>
          <div className={classes.sectionProjects}>
            <ul className={classes.listProjects}>{projectsList}</ul>
            <Button text={props.projects.buttonName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
