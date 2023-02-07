import React, { useState, useEffect } from 'react';
import { AccordionContainer, AccordionContent } from './Accordion';

const MultiAccordionCourseList = ({items, multiple}) => {
  const [active, setActive] = useState()
  const [activeArray, setActiveArray] = useState([])
  useEffect(()=> {
    let p = [...items].map((item)=>{
      return {name: item.name, active: false}
    })
    setActiveArray(p)
  }, [items])
  const handleClick = name => {
    setActive(name === active ? null : name)
    if(multiple) {
      let indx = activeArray.findIndex((i)=>i.name===name)
      let upd = [...activeArray]
      upd[indx].active = !upd[indx].active
      setActiveArray(upd)
    }
  }
  return (
    <AccordionContainer>
      {items.map(item => {
        let isActive = active === item.name
        if(multiple) isActive = activeArray.some((i)=>i.name===item.name && i.active)
        return <AccordionContent onClick={()=>handleClick(item.name)}
          itemName={item.name} itemContent={item.content} isActive={isActive} key={item.key}/>
      })}
    </AccordionContainer>
  );
}

const render = () => {
  let items = [
    {
      key: 0,
      name: "Header 1",
      content: <div>Lorem 1, ipsum dolor sit amet.</div>
    },
    {
      key: 1,
      name: "Header 2",
      content: <div>Lorem 2, ipsum dolor sit amet.</div>
    },
    {
      key: 2,
      name: "Header 3",
      content: <div>Lorem 3, ipsum dolor sit amet.</div>
    }
  ]
  return (
    <div style={{width: "100vw", height: "100vh", display: 'grid', placeItems: 'center', backgroundColor: '#0a0a0a'}}>
      <MultiAccordionCourseList multiple items={items} />
    </div>
  )
}
 
export default render;