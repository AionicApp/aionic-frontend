import React from 'react'

import Fetcher from 'components/Utility/Fetcher'

import Deck from 'components/Deck'

import Widget from 'components/Widget'

import UserInvitation from 'components/User/Invitation'

const AdministrationUser = props => (
  <Fetcher url="user">
    {users => (
      <div className="AdministrationUser">
        <Widget title="Users" icon="fas fa-users-cog">
          <UserInvitation />
          <Deck itemList={users} deckType="User" />
        </Widget>
      </div>
    )}
  </Fetcher>
)

export default AdministrationUser