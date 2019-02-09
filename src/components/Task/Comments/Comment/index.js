import React, { Component } from 'react'

import './Comment.css'

import { Api } from 'services/api'
import { Session } from 'services/session'

class TaskComment extends Component {
  deleteComment = id => {
    Api.deleteData(`task/${this.props.taskId}/comments/${id}`)
      .then(res => {
        this.props.removeComment(id)
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const deleteBtn =
      this.props.comment.author.id === Session.getUser().id ? (
        <button
          className="btn btn-link float-right text-danger"
          onClick={() => {
            this.deleteComment(this.props.comment.id)
          }}
        >
          Delete
        </button>
      ) : null

    return (
      <div className="TaskComment">
        <div className="card">
          <div className="card-body">
            <p className="card-text">{this.props.comment.comment}</p>
            <p className="card-text">
              <small className="text-muted">
                {`${this.props.comment.author.firstname} ${this.props.comment.author.lastname}`}
                {' @'}
                {this.props.comment.created}{' '}
              </small>
              {deleteBtn}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default TaskComment
