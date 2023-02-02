import React, { useState } from 'react';
import { AccordianContainer, AccordionContent } from './Accordian';

const CourseList = ({items}) => {
  const [active, setActive] = useState()
  const handleClick = name => {
    setActive(name === active ? null : name)
  }
  return (
    <AccordianContainer>
      {items.map(item => {
        let isActive = active === item.name
        return <AccordionContent onClick={()=>handleClick(item.name)}
          itemName={item.name} itemContent={item.content} isActive={isActive} />
      })}
    </AccordianContainer>
  );
}

const render = () => {
  let items = [
    {
      name: "Header 1",
      content: <div>Lorem 1, ipsum dolor sit amet.</div>
    },
    {
      name: "Header 2",
      content: <div>Lorem 2, ipsum dolor sit amet.</div>
    },
    {
      name: "Header 3",
      content: <div>Lorem 3, ipsum dolor sit amet.</div>
    }
  ]
  return (
    <div style={{width: "100vw", height: "100vh", display: 'grid', placeItems: 'center', backgroundColor: '#0a0a0a'}}>
      <CourseList items={items} />
    </div>
  )
}
 
export default render;