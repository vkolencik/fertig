import React from "react";

export const Checklist: React.FC<{
    checklistData: { heading: string, tasks: { description: string }[] }
}> = ({checklistData}) => {
    return (<div>
            <h1>{checklistData.heading}</h1>
            <fieldset class='form-group'>
                {checklistData.tasks.map((task, i) =>
                    <label class='paper-check' key={i}><input type='checkbox' class='task-check'/>
                        <span>{task.description}</span>
                    </label>
                )}
            </fieldset>
        </div>
    )
}
