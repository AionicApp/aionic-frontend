import React, { Component } from 'react'

import './Home.css'

import Content from 'components/UI/Content'

import BoardTaskContainerUser from 'components/Board/Task/containers/user'

class SitesHome extends Component {
  render() {
    return (
      <div className="SitesHome">
        <Content>
          <BoardTaskContainerUser />
        </Content>
      </div>
    )
  }
}

export default SitesHome
