import React from 'react';
import Categories from '../Components/categories.component';
import MenuItems from '../Components/MenuItems.component';
import Tittle from '../Components/Title.component';
import projects from '../Components/Project.data.js';
import { useState } from 'react';

const allCategories = [
  'All',
  ...new Set(projects.map((item) => item.category)),
];

function ProjectsPage() {
  const [categories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(projects);

  const filter = (category) => {
    if (category === 'All') {
      setMenuItems(projects);
      return;
    }
    const filteredData = projects.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filteredData);
  };

  return (
    <div className='PortfolioPage'>
      <div className='title'>
        <Tittle title={'Projects'} span={'Projects'} />
      </div>
      <div className='portfolios-data'>
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
}

export default ProjectsPage;
