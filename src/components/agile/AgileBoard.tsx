import React, { useState, ReactElement } from 'react';
import { Task } from './agile-types';
import Table from 'react-bootstrap/Table';
import { Badge, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import { DragDropContext, Droppable, DropResult, Draggable } from 'react-beautiful-dnd';

const allTasks: Task[] = [
    {
        id: '1',
        taskName: 'Data Scientist',
        description: 'IBM Certified Data Scientist',
        taskOwner: 'HS',
        dueDate: 'Dec-2021',
        stage: 'Wishlist',
    },
    {
        id: '2',
        taskName: 'AWS',
        description: 'Create website',
        taskOwner: 'HS',
        dueDate: 'Aug-2020',
        stage: 'In Progress',
    },
    {
        id: '3',
        taskName: 'Professional Exam',
        description: 'AWS Certified Architect',
        taskOwner: 'HS',
        dueDate: 'Mar-2021',
        stage: 'Backlog',
    },
    {
        id: '4',
        taskName: 'Associate Exam',
        description: 'AWS Certified Architect',
        taskOwner: 'HS',
        dueDate: 'Jun-2020',
        stage: 'Completed',
    },
    {
        id: '5',
        taskName: 'Containers',
        description: 'Docker, Kubernetes',
        taskOwner: 'HS',
        dueDate: 'Dec-2020',
        stage: 'Backlog',
    },
];

const AgileBoard: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>(allTasks);

    const onDragEnd = (result: DropResult) => {
        if (isMoveToAnotherColumn(result)) {
            const source: string = result.source.droppableId;
            const destination: string = result.destination!.droppableId;
            const taskId: string = result.draggableId;

            console.log(`Moving from ${source} to ${destination} for ${taskId}`);
            const index: number = tasks.findIndex((t) => taskId === t.id);

            if (index >= 0) {
                const newTasks: Task[] = Object.assign([], tasks);
                newTasks[index] = { ...newTasks[index], stage: destination };
                setTasks(newTasks);
            }
        }
    };

    const isMoveToAnotherColumn = (result: DropResult): boolean => {
        return !(result.destination == null || result.source.droppableId === result.destination.droppableId);
    };

    return (
        <div style={{ width: '90%' }}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Wishlist</th>
                            <th>Backlog</th>
                            <th>In Progress</th>
                            <th>Completed</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <Droppable droppableId="Wishlist">
                                {(provided) => (
                                    <td ref={provided.innerRef} {...provided.droppableProps}>
                                        <SwimLane
                                            tasks={tasks.filter((t) => t.stage === 'Wishlist')}
                                            stage={'Wishlist'}
                                        />
                                        {provided.placeholder}
                                    </td>
                                )}
                            </Droppable>
                            <Droppable droppableId="Backlog">
                                {(provided) => (
                                    <td ref={provided.innerRef} {...provided.droppableProps}>
                                        <SwimLane
                                            tasks={tasks.filter((t) => t.stage === 'Backlog')}
                                            stage={'Backlog'}
                                        />
                                        {provided.placeholder}
                                    </td>
                                )}
                            </Droppable>
                            <Droppable droppableId="In Progress">
                                {(provided) => (
                                    <td ref={provided.innerRef} {...provided.droppableProps}>
                                        <SwimLane
                                            tasks={tasks.filter((t) => t.stage === 'In Progress')}
                                            stage={'In Progress'}
                                        />
                                        {provided.placeholder}
                                    </td>
                                )}
                            </Droppable>
                            <Droppable droppableId="Completed">
                                {(provided) => (
                                    <td ref={provided.innerRef} {...provided.droppableProps}>
                                        <SwimLane
                                            tasks={tasks.filter((t) => t.stage === 'Completed')}
                                            stage={'Completed'}
                                        />
                                        {provided.placeholder}
                                    </td>
                                )}
                            </Droppable>
                        </tr>
                    </tbody>
                </Table>
            </DragDropContext>
        </div>
    );
};

const SwimLane: React.FC<{ tasks: Task[]; stage: string }> = (props: { tasks: Task[]; stage: string }) => {
    const { tasks } = props;
    const uiTasks: ReactElement[] = [];
    Object.values(tasks).forEach((value, index) => {
        if (value) {
            uiTasks.push(
                <Draggable key={value.id} draggableId={value.id} index={index}>
                    {(provided) => (
                        <div style={{ width: '13rem' }}>
                            <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                <TaskCard key={value.id} {...value} />
                            </div>
                        </div>
                    )}
                </Draggable>,
            );
        }
    });
    return <>{uiTasks}</>;
};

const TaskCard: React.FC<Task> = (props: Task) => {
    const task = props as Task;
    return (
        <Card style={{ width: '13rem', margin: '0.5rem' }}>
            <Card.Header>
                <Badge pill variant="info">
                    {task.taskOwner}
                </Badge>{' '}
                {task.taskName}
            </Card.Header>
            <Card.Body>
                <Card.Text>{task.description}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem>{task.dueDate}</ListGroupItem>
            </ListGroup>
        </Card>
    );
};

export default AgileBoard;
