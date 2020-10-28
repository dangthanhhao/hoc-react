import Aux from '../../hoc/auxx'
import React from 'react'
import classes from './Layout.module.css'
import BuggerBuilder from '../../containers/BuggerBuilder/BuggerBuilder'
export default (props) => {
    console.log(classes)
    return (
        <Aux>
            <div>Toolbar, SideBar, Backdrop</div>
            <main className={classes.Content}>
                <BuggerBuilder />
            </main>
        </Aux>
    );
}