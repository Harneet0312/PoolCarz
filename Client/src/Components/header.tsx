import React from 'react'



class Header extends React.Component<any,any>{

    constructor(props:any){
        super(props)
    }

    logOut=()=>{
        
        this.props.update(false);
    }

    render(){
        if(!this.props.loggedIn){
            return(
                <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand">PoolCarz</a>
                <br/>
                {/* <a className="navbar">Friends Don't Let Friends Ride Alone</a> */}
                
                <ul className="navbar-nav ml-auto " style={{marginRight:"50px"}}>
                    {/* <li className="nav-item">
                        <a className="nav-link text-white">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white">Login</a>
                    </li> */}
                </ul>
            </nav>

            {/* //added */}
            <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
        <h3
          style={{
            // display: "flex",

             justifyContent: "center",
             alignItems: "center",
             color: "black",
             paddingLeft: 500
          }}
        >
          Friends don't let Friends ride alone!
        </h3>
      </nav>
            </div>
            //added
            
            )
            
        }
        else{
            return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand">PoolCarz</a>
                    <ul className="navbar-nav ml-auto " style={{marginRight:"50px"}}>
                        <li className="nav-item">
                            <a className="nav-link text-white">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" onClick={this.logOut}>Log Out</a>
                        </li>
                    </ul>
                </nav>
                
            )
        }
        
    }

}

export default Header