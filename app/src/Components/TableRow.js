import React, { useState, useEffect } from 'react'
import UseBaseContext from './../ContextApi/UseBaseContext'

export default function TableRow(props) {
    const { setData, getData } = UseBaseContext();
    const [list, setList] = useState([]);

    const upvote = (rowData) => {
        let rowIndex = list.findIndex((inst) => inst.objectID == rowData.objectID);

        //updating the value immutably
        rowData['points']++;
        setList([...list.slice(0, rowIndex), rowData, ...list.slice(rowIndex+1)]);
        setData(list, 'mainData');  
    }

    useEffect(() => {
        setList(props.data); 
    }, [props.data]);



    return (
        <>
            {
                list.map((instance) => (
                    <tr key={instance.created_at}>
                        <td>{instance.num_comments}</td>
                        <td>{instance.points}</td>
                        <td>
                            <a className="cursor-pointer" onClick={() => upvote(instance)}>
                                ^
                            </a>
                        </td>
                        <td className="space-children">
                            <span><b>{instance.title}</b></span>
                            <span>(<a target='_blank' href={instance.url}>{instance.url}</a>)</span>
                            <span>by <b>{instance.author}</b></span>
                            <span>{instance.created_at}</span>
                            <span className="cursor-pointer">[ <b>hide</b> ]</span>
                        </td>
                    </tr>
                ))
            }

        </>
    );
}