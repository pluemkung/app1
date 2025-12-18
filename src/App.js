import logo from './logo.svg';
import './App.css';

function App() {
  const divStyle = {
    color: 'red',
    backgroundColor: 'powderblue',
    fontSize: 'large',
  };
  return <div style={divStyle}>Hello React </div>;
  // (
  //   <table border="1">
  //     <th>Product</th><th>Price</th>
  //     <tr> 
  //       <td>React</td>
  //       <td>320</td>
  //     </tr>
  //     <tr>
  //       <td>React Native</td>
  //       <td>340</td>
  //     </tr>
  //   </table>
  // );
}

export default App;
