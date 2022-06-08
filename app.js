
class SideBar extends React.Component{
    render(){
        return(
            <div className="widgets">
                <p>Dashboard</p>
                <p>Widget</p>
                <p>Reviews</p>
                <p>Customers</p>
                <p>Online Analysis</p>
                <p>Settings</p>
            </div>
        )
    }
}

class Stats extends React.Component{
    render(){
        return(
          <ul className="stats">
                <li className="title" >{this.props.values.title}</li>
                {this.props.values.value.map(value => {
                    return(
                        <li className="value">{value}</li> 
                    )
                })}
                   
          </ul>

        )
    }
}

class Visitors extends React.Component{
    render(){
        return(
            <div className="visitors">
                <li className="title"> Website Visitors</li>
                <li className="value">821</li>
                <div className ="innerBox"></div>
            </div>

        )
    }
}

class App extends React.Component{
    state = {
        values1:values1,
        values2: values2,
        values3: values3
    }
    render() {
        return(
           <div className="container">
                {/* <h1>Commence Dashboard Creation!</h1> */}
                <SideBar />
                <Stats values= {this.state.values1}/>
                <Stats values={this.state.values2}/>
                <Stats values={this.state.values3}/>
                <Visitors />
           </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('.main')
);