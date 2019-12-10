import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero qui ut officia alias nostrum aperiam assumenda repellendus omnis dolor! Dolorem excepturi a id quas. Maiores natus quia mollitia ullam magnam.</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Brannon Opperman</div>
                    <div>2nd September, 4am</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
