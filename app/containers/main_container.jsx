import React from 'react';

class MainContainer extends React.Component { 
  render() {
    return ( 
      <div>
        {React.cloneElement(
          this.props.children
        )}
      </div>
    )
  }
}

export default MainContainer;