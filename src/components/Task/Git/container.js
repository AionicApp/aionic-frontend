import React, { Component } from 'react';

import Api from 'services/api';

import Spinner from 'components/UI/Spinner';
import Error from 'components/UI/Error';

import TaskGit from '.';

class TaskGitContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoading: true,
			msg: null,
			lists: {
				orgList: [],
				repoList: []
			}
		};
	}

	componentDidMount = async () => {
		try {
			const { task } = this.props;
			const { organization } = task;

			const orgList = await Api.fetchData('git/organization');

			if (organization) {
				const repoList = await Api.fetchData(`git/${organization.id}/repository`);

				this.setState({
					isLoading: false,
					lists: {
						orgList,
						repoList
					}
				});
			} else {
				this.setState({
					isLoading: false,
					lists: {
						orgList
					}
				});
			}
		} catch (err) {
			this.setState({ isLoading: false, msg: Api.handleHttpError(err) });
		}
	};

	handleOrgChange = async (e) => {
		try {
			const orgId = e.target.value;

			if (orgId) {
				const repoList = await Api.fetchData(`git/${orgId}/repository`);

				this.setState((prevState) => ({
					isLoading: false,
					lists: {
						...prevState.lists,
						repoList
					}
				}));

				this.props.updateTask({
					...this.props.task,
					organization: { id: orgId },
					repository: null,
					branch: null
				});
			} else {
				this.setState((prevState) => ({
					lists: {
						...prevState.lists,
						repoList: []
					}
				}));

				this.props.updateTask({
					...this.props.task,
					organization: null,
					repository: null,
					branch: null
				});
			}
		} catch (err) {
			this.setState({ isLoading: false, msg: Api.handleHttpError(err) });
		}
	};

	handleRepoChange = (e) => {
		const repoId = e.target.value || null;

		this.props.updateTask({ ...this.props.task, repository: { id: repoId }, branch: null });
	};

	handleBranchChange = (e) => {
		this.props.updateTask({ ...this.props.task, branch: e.target.value });
	};

	render() {
		const { task } = this.props;
		const { isLoading, msg, lists } = this.state;

		if (isLoading) {
			return <Spinner showPadding={true} />;
		}

		if (msg) {
			return <Error message={msg} />;
		}

		return (
			<div className="TaskGitContainer">
				<TaskGit
					task={task}
					handleOrgChange={this.handleOrgChange}
					handleRepoChange={this.handleRepoChange}
					handleBranchChange={this.handleBranchChange}
					lists={lists}
				/>
			</div>
		);
	}
}

export default TaskGitContainer;