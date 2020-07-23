import React, {Component} from 'react';


class Footer extends Component {
    render() {
        const {filter, setVisibilityFilter} = this.props;

        return (
            <div>
                <span>Show: </span>
                <button  onClick={()=>setVisibilityFilter("ALL")} disabled={filter==="ALL"}>All</button>
                <button  onClick={()=>setVisibilityFilter("ACTIVE")} disabled={filter==="ACTIVE"}>Active</button>
                <button  onClick={()=>setVisibilityFilter("COMPLETED")} disabled={filter==="COMPLETED"}>Completed</button>
            </div>
        );
    }
}

export default Footer;
