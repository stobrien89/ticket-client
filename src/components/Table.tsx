import * as React from 'react';
import {useState, useEffect} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



const Table = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:8000/api/tickets')
                const data = response.json();
                setTickets(data);
            }catch(error) {
                console.error(error)
            }
        })()
    }, [])


    
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}

export default Table