import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import UseBaseContext from './../ContextApi/UseBaseContext'
import { getApi } from '../Utility/MockServerResponse'
import TableRow from '../Components/TableRow'


function Home() {
    /* a must declaration to set and get the data */
    const [list, setList] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    // /* get the context instance */
    const { setData } = UseBaseContext();

    const init = () => {

        loadContent();
    }

    const prevPage = () => {
        let newPage = currentPage - 1;
        setCurrentPage(newPage);
        loadContent(newPage);
    }

    const nextPage = () => {
        let newPage = currentPage + 1;
        setCurrentPage(newPage);
        loadContent(newPage);
    }

    const loadContent = (page) => {
        page = page || 0;
        getApi('/items/' + (page * 10)).then((data) => {
            //save in the local state
            setList(data);
            //save in the context API
            setData(data, 'mainData');
        });
    }

    useEffect(() => {
        init();
    }, []);

    /* all of the maon content goes here  */
    return (
        <section className="col-lg-12 home-page m-top-3">
            <a onClick={prevPage} className="cursor-pointer"><b>Previous</b></a> | <a onClick={nextPage} className="cursor-pointer"><b>Next</b></a>
            <b> | Page: {currentPage + 1}</b>
            <Table striped width="100%">
                <thead>
                    <tr>
                        <td>Comments</td>
                        <td>Vote Count</td>
                        <td>UpVote</td>
                        <td>News Details</td>
                    </tr>
                </thead>
                <tbody>
                    <TableRow data={list} />
                </tbody>
            </Table>
        </section>
    );
}

export default Home;