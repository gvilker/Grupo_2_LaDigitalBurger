import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.Nombre}</td>
                    <td>{props.Precio}</td>
                    <td>{props.Categories}</td>
                    
                </tr>
            )
    }
    
        

export default ChartRow;