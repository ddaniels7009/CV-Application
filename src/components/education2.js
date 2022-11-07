const Education2 = (props) => {
    //console.log(props.tasks);
    const { tasks } = props;
    
    
    return (
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.school}</li>;
            })}
        </ul>
    );
};



export default Education2;