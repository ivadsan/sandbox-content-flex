import React from 'react'
import Menu from '../components/Menu'
import TableMUI from '../components/TableMUI'
import ContentFlex from '../components/ContentFlex'
import FormTest from '../components/FormTest'
import "./style.css"


export default function Layout() {
  return (
    <div className="container">
      <Menu />
      <ContentFlex>
        <FormTest/>
        <TableMUI/>
      </ContentFlex>
      
    </div>
  )
}
