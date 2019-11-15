import React from 'react';

import Helper from 'services/helper';

import Content from 'components/UI/Content';

import TaskTitle from 'components/Task/Title';
import TaskTags from 'components/Task/Tags';
import TaskSummaryContainer from 'components/Task/Summary/container';
import TaskDescription from 'components/Task/Description';
import TaskActionButtons from 'components/Task/ActionButtons';

import SitesTaskTabs from './components/Tabs';
import TaskBadges from './components/Badges';

const SitesTask = (props) => {
	const { task, updateParentTaskState, isNewTask } = props;

	const handleTitleChange = (e) => {
		Helper.updateObjectPropByEvent(task, e, updateParentTaskState);
	};

	const taskSidebar = isNewTask ? null : (
		<div className="col-12 col-xl-4 mt-3 mt-xl-0">
			<SitesTaskTabs task={task} updateParentTaskState={updateParentTaskState} />
			<p className="text-muted mt-4 mb-0">
				Created: {Helper.formatDateTime(task.created || Date.now())}
			</p>
			<p className="text-muted">Updated: {Helper.formatDateTime(task.updated || Date.now())}</p>
		</div>
	);

	return (
		<div className="SitesTask">
			<Content>
				<TaskBadges task={task} />
				<div className="row">
					<div className="col-12 col-md-7 col-xl">
						<TaskTitle task={task} onBlur={handleTitleChange} />
					</div>
					<div className="col-12 col-md-5 col-xl-auto">
						<TaskActionButtons
							task={task}
							isNewTask={isNewTask}
							updateParentTaskState={updateParentTaskState}
						/>
					</div>
				</div>
				<hr className="featurette-divider" />

				<div className="row">
					<div className="col-auto">
						<TaskTags task={task} updateParentTaskState={updateParentTaskState} />
					</div>
				</div>

				<div className="row mt-3">
					<div className="col-12 col-xl-8">
						<TaskSummaryContainer task={task} updateParentTaskState={updateParentTaskState} />
						<TaskDescription task={task} updateParentTaskState={updateParentTaskState} />
					</div>
					{taskSidebar}
				</div>
			</Content>
		</div>
	);
};

export default SitesTask;
