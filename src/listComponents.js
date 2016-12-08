/**
 * Created by Rj on 12/3/2016.
 */
import React , {Component} from 'react';

function ListItem(props){
    return <li>{props.number}</li>
}

const numbers = [1,2,3,4,5,6];
function ListComponent(){
    return (
    <ul>
        {numbers.map((number) =>
            <ListItem key= {number.toString()} number={number}/>
        )}
    </ul>
    );
}
export default ListComponent;