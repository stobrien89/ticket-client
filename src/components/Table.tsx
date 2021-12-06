import * as React from 'react';
import {useState, useEffect} from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



const Table = () => {
    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch('http://localhost:8000/api/tickets')
                const data = await response.json();
                setTickets(data);
            }catch(error) {
                console.error(error)
            }
        })()
    }, [])

    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'title',
          headerName: 'Title',
          width: 150,
          editable: true,
        },
        {
          field: 'source',
          headerName: 'Source',
          width: 150,
          editable: true,
        },
        {
          field: 'assignee',
          headerName: 'Assignee',
          width: 150,
          editable: true,
        },
        {
          field: 'tags',
          headerName: 'Tags',
          sortable: false,
          width: 200,
        },
      ];

      const ticketList = tickets.map((ticket, index) => {
          return {id: index, ...ticket as {}};
      })
      
    
    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={ticketList}
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