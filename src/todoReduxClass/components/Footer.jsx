import React, {Component} from 'react';


class Footer extends Component {
    render() {
        const {filter, setFilter} = this.props;

        return (
            <div>
                <span>Show: </span>
                <button  onClick={()=>setFilter("ALL")} disabled={filter==="ALL"}>All</button>
                <button  onClick={()=>setFilter("ACTIVE")} disabled={filter==="ACTIVE"}>Active</button>
                <button  onClick={()=>setFilter("COMPLETED")} disabled={filter==="COMPLETED"}>Completed</button>
            </div>
        );
    }
}

export default Footer;
