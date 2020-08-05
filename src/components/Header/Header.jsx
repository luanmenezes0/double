import React from 'react'
import { Button } from 'antd'

const Header = (props) => {
  return (
    <header style={{ margin: 'auto', textAlign: 'center', padding: '40px' }}>

      <Button onClick={props.logout} type="danger">SAIR</Button>

    </header>
  )
}

export default Header
