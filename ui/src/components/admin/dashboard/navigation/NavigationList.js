import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, IconButton } from '@mui/material';
import CreateNav from './CreateNav';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { axios } from "axios";




export default function NavigationList(props) {
    const [navList, fetchNavLinks] = useState([]);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [message, setMessage] = useState(false);


    const URI = 'http://localhost:5296/api/Navigation'

    const getData = () => {
        fetch('http://localhost:5296/api/Navigation')
            .then((res) => res.json())
            .then((res) => {
                fetchNavLinks(res)
            }).catch((error) => console.log('error', error))
    }

    useEffect(() => {
        getData()
    }, []);



    const postDelete = (id, e) => {
        e.preventDefault();
        axios.delete(`http://localhost:5296/api/Navigation/${id}`)
            .then(
                res => console.log('tets')
            ).catch(err => console.log(err))
    }


    const columns = [
        { field: 'NavigationID', headerName: 'ID', width: 70 },
        { field: 'Title', headerName: 'Title', width: 250 },
        { field: 'Link', headerName: 'Link', width: 250 },
        { field: 'FeaturedImage', headerName: 'Featured Image', width: 250 },
        {
            field: "Edit",
            width: 150,
            renderCell: (cellValues) => {
                return (
                    <IconButton color="primary" aria-label="edit item" className='icon-hover' >
                        <EditIcon />

                    </IconButton>

                );
            }
        },
        {
            field: "Delete",
            width: 150,
            renderCell: (cellValues) => {
                return (
                    <IconButton color="primary" aria-label="delete item" className='icon-hover'>
                        <DeleteIcon />
                    </IconButton>
                );
            }
        }

    ];
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: 1,
    };
    return (
        <div style={{ height: 500, width: '100%' }} className="table-wrapper">

            <Grid container spacing={3} alignItems="flex-end" direction="row">
                <Grid item xs={10} className="mb-5">
                    <h2>Navigation</h2>
                </Grid>
                <Grid item xs={2} className='mb-5'>
                    <Button variant="contained" size="medium" onClick={handleOpen}>
                        Add item
                    </Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2" className='mb-3 text-center text-uppercase fw-bold'>
                                Create new nav link
                            </Typography>
                            <CreateNav />
                        </Box>
                    </Modal>
                </Grid>
            </Grid>
            <DataGrid
                rows={navList}
                columns={columns}
                pageSize={20}
                rowsPerPageOptions={[5]}
                getRowId={(row) => row.NavigationID}
                checkboxSelection
                className='mui-table-wrapper position-relative'
            />
            {/* <EditIcon className='position-absolute' /> */}

            {/* <div>
                {
                    navList.map((item) => {

                        return (
                            <div className={item.id}>
                                <h3>
                                    #: {item.id}
                                    id: {item.NavigationID}|
                                    title: {item.Title} |
                                    desc: {item.Description}
                                </h3>
                                <Button onClick={(e) => postDelete(item.NavigationID, e)}>
                                    Delete
                                </Button>
                                <hr />
                            </div>
                        );
                    })
                }

            </div> */}
        </div>

    );
}