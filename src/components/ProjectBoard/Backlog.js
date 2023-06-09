import React, {Component} from 'react';
import ProjectTask from "./ProjectTasks/ProjectTask";


class Backlog extends Component {
    render() {

        const {project_tasks_props} = this.props;
        // console.log(project_tasks_props)
        let todo_tasks;
        let inprogress_tasks;
        let done_tasks;
        if(project_tasks_props) {
            console.log(project_tasks_props)
            todo_tasks = project_tasks_props.filter(pt => pt.status === 'TODO');
            inprogress_tasks = project_tasks_props.filter(pt => pt.status === 'IN_PROGRESS');
            done_tasks = project_tasks_props.filter(pt => pt.status === 'DONE');
        }
        return (
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>TO DO</h3>
                                </div>
                            </div>
                            {todo_tasks && todo_tasks.map(project_task => (
                            <ProjectTask key={project_task.id} project_task={project_task}/>
                            ))}
                            </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                            {inprogress_tasks && inprogress_tasks.map(project_task => (
                                <ProjectTask key={project_task.id} project_task={project_task}/>
                            ))}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            {done_tasks && done_tasks.map(project_task => (
                                <ProjectTask key={project_task.id} project_task={project_task}/>
                            ))}
                        </div>
                    </div>
                </div>
        );
    }
}

export default Backlog;