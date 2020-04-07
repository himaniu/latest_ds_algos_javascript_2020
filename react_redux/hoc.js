import React from 'react';


const simpleFunctionalHoc = (wrappedCompnent) =>{

    return class Hoc extends React.Component {

        render(){
             return (<wrappedCompnent></wrappedCompnent>);
        }
    }
}

/**
 * Advance HOC with state
 */

import React from 'react';

const withStorage = (WrappedComponent) => {
  class HOC extends React.Component {
      constructor(){
        this.state = {
            localStorageAvailable: false, 
          };
      }

  
    componentDidMount() {
       this.checkLocalStorageExists();
    }
  
    checkLocalStorageExists() {
      const testKey = 'test';

      try {
          localStorage.setItem(testKey, testKey);
          localStorage.removeItem(testKey);
          this.setState({ localStorageAvailable: true });
      } catch(e) {
          this.setState({ localStorageAvailable: false });
      } 
    }
  
    load = (key) => {
      if (this.state.localStorageAvailable) {
        return localStorage.getItem(key); 
      }
      
      return null;
    }
    
    save = (key, data) => {
      if (this.state.localStorageAvailable) {
        localStorage.setItem(key, data);
      }
    }
    
    remove = (key) => {
      if (this.state.localStorageAvailable) {
        localStorage.removeItem(key);
      }
    }
    
    render() {
      return (
        <WrappedComponent
          load={this.load}
          save={this.save}
          remove={this.remove}
          {...this.props}
        />
      );
    }
  }
    
  return HOC; 
}

export default withStorage;


//connect method implementations example

// connect() is a function that injects Redux-related props into your component.
function connect(mapStateToProps, mapDispatchToProps) {
    return function (WrappedComponent) {
      // It returns a component
      return class extends React.Component {
        render() {
          return (
            // that renders your component
            <WrappedComponent
          
              {...this.props}
              {/* and additional props calculated from Redux store */}
              {...mapStateToProps(store.getState(), this.props)}
              {...mapDispatchToProps(store.dispatch, this.props)}
            />
          )
        }
        
        componentDidMount() {
          // it remembers to subscribe to the store so it doesn't miss updates
          this.unsubscribe = store.subscribe(this.handleChange.bind(this))
        }
        
        componentWillUnmount() {
          // and unsubscribe later
          this.unsubscribe()
        }
      
        handleChange() {
          // and whenever the store state changes, it re-renders.
          this.forceUpdate()
        }
      }
    }
  }
  


