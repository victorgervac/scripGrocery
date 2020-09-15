import React from "react";
import "./App.css";

class List extends React.Component {
   renderGroceries = () => {
       const { groceries } = this.props;
       return groceries.map((grocerie) => {
       return <div key={grocerie.id}>{grocerie.name}</div>;
       });
   };
   render() {
       return (
           <>
           <h1>Groceries List</h1>
           {this.renderGroceries()}
           </>
       );
      }
    }
        export default List;