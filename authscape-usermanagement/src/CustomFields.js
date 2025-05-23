import React, {useEffect, useState, useRef} from 'react';
import { Box, textAlign } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import { IconButton, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { apiService } from 'authscape';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

export function CustomFields({platformType}) {

    const roleNameRef = useRef(null);
    const [customFields, setCustomFields] = useState([]);
    const [newCustomFieldOpen, setNewCustomFieldOpen] = useState(null);

    const [newTabFieldOpen, setNewTabFieldOpen] = useState(null);
    const [deleteCustomFieldOpen, setDeleteCustomFieldOpen] = useState(null);
    const [deleteCustomTabOpen, setDeleteCustomTabOpen] = useState(null);

    

    const RefreshFields = async () => {
        let response = await apiService().get("/UserManagement/GetCustomFields?platformType=" + platformType);
        if (response != null && response.status == 200)
        {
            setCustomFields(response.data);
        }
    }

//   const fetchData = async () => {
//     await RefreshFields();
//     }

  useEffect(() => {

    RefreshFields();
    // fetchData();

  }, []);

  const AddNewCustomField = () => {

    const refName = useRef(null);
    const [fieldType, setFieldType] = useState(1);
    const [gridSize, setGridSize] = useState(1);
    const [isRequired, setIsRequired] = useState(false);
    const [tabOptions, setTabOptions] = useState([]);

    const [tabSelection, setTabSelection] = useState(null);

    const refTabName = useRef(null);

    const refreshTabOptions = async () => {
        const customTabResponse = await apiService().get("/UserManagement/GetCustomTabs?platformType=" + platformType);
        
        if (customTabResponse  && customTabResponse.status == 200)
        {
            setTabOptions(customTabResponse.data);
        }
    }

    const fetchCustomField = async () => {

        await refreshTabOptions();

        const customFieldResponse = await apiService().get("/UserManagement/GetCustomField?id=" + newCustomFieldOpen);
        
        if (customFieldResponse != null && customFieldResponse.status == 200)
        {
            refName.current.value = customFieldResponse.data.name;
            setFieldType(customFieldResponse.data.fieldType);
            setIsRequired(customFieldResponse.data.isRequired);
            setGridSize(customFieldResponse.data.gridSize);
            setTabSelection(customFieldResponse.data.tabId ? customFieldResponse.data.tabId : null);
        }
        
    }

    useEffect(() => {

        if (newCustomFieldOpen)
        {
            // look up the record for this custom field so we can display the values on the components
           if (newCustomFieldOpen != -1) fetchCustomField();
            refreshTabOptions();
        }

    }, [newCustomFieldOpen]);

    return (
    <>
        <Dialog open={newTabFieldOpen != null ? true : false}
            fullWidth={true}
            onClose={() => {
                setNewTabFieldOpen(null);
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
                {(newTabFieldOpen == -1 && newTabFieldOpen != null) && "Create Tab"}
                {(newTabFieldOpen != -1 && newTabFieldOpen != null)  && "Edit Tab"}
            </DialogTitle>

            <DialogContent>
                <TextField inputRef={refTabName} label="Name" variant="outlined" fullWidth={true} InputLabelProps={{ shrink: true }} sx={{paddingBottom:2, marginTop:2}} />
            </DialogContent>

            <DialogActions>
            <Button onClick={() => {
                    setNewTabFieldOpen(null);
                }}>Cancel</Button>
            <Button onClick={async () => {

                    let id = null;
                    if (newTabFieldOpen != -1) 
                    {
                        id = newTabFieldOpen;
                    }

                    await apiService().post("/UserManagement/CreateTab", {
                        id: id,
                        name: refTabName.current.value,
                        platformType: platformType
                    });

                    await refreshTabOptions();

                    setNewTabFieldOpen(null);
                }} autoFocus>
                Add
            </Button>
            </DialogActions>

        </Dialog>

        <Dialog
            open={newCustomFieldOpen}
            onClose={() => {
                setNewCustomFieldOpen(null);
            }}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description">
            <DialogTitle id="alert-dialog-title">
            {(newCustomFieldOpen == -1 && newCustomFieldOpen != null) && "New Custom Field"}
            {(newCustomFieldOpen != -1 && newCustomFieldOpen != null)  && "Edit Custom Field"}
            </DialogTitle>
            {/* {(newCustomFieldOpen != null && (newCustomFieldOpen != -1 && hasLoaded) || newCustomFieldOpen == -1) && */}
            <DialogContent>
                <TextField inputRef={refName} label="Name" variant="outlined" fullWidth={true} InputLabelProps={{ shrink: true }} sx={{paddingBottom:2, marginTop:2}} />
                
                <FormControl fullWidth sx={{paddingBottom:2}}>
                    <InputLabel id="demo-simple-select-label">Field Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={fieldType}
                        label="Field Type"
                        onChange={(event) => {
                            setFieldType(event.target.value);
                        }}>
                        <MenuItem value={1}>TextField</MenuItem>
                        {/* <MenuItem value={2}>RichTextField</MenuItem> */}
                        <MenuItem value={3}>Number</MenuItem>
                        <MenuItem value={4}>Date</MenuItem>
                        <MenuItem value={5}>Yes / No</MenuItem>
                    </Select>
                </FormControl>

                <Box sx={{paddingBottom:2}}>
                    <FormControl fullWidth>
                        <InputLabel shrink id="tab-simple-select-label" sx={{
                            backgroundColor: "white",
                            px: "3px"
                        }}>Tabs</InputLabel>
                        <Select aria-expanded={true}
                            labelId="tab-simple-select-label"
                            id="tab-simple-select"
                            renderValue={(selected) => 
                                tabOptions.find(t => t.id == selected).name }
                            //displayEmpty
                            value={tabSelection}
                            label={"tabs"}
                            
                            onChange={(event) => {
                                setTabSelection(event.target.value);
                            }}>
                                <MenuItem value={null}> <em>None</em> </MenuItem>
                                {tabOptions && tabOptions.map((tab) => {
                                    return (
                                        <MenuItem key={tab.id} value={tab.id}>
                                            <Stack direction={"row"}  sx={{
                                                alignItems: "center",
                                                justifyContent: "space-between",
                                                width: "100%"
                                            }}>
                                                <Box>
                                                    <Typography>{tab.name}</Typography>
                                                </Box>
                                                {
                                                    <Box>
                                                        <IconButton color={"error"} onClick={(event) => {
                                                            event.stopPropagation();
                                                            setDeleteCustomTabOpen(tab);
                                                        }}>
                                                            <DeleteIcon />
                                                        </IconButton>
                                                    </Box>
                                                }
                                            </Stack>
                                        </MenuItem>
                                    )
                                })}
                        </Select>
                    </FormControl>
                    <Box sx={{textAlign:"right"}}>
                        <Button variant="text" onClick={() => {
                            setNewTabFieldOpen(-1);
                        }}>Create Tab</Button>
                    </Box>
                </Box>

                <FormControlLabel control={<Switch checked={isRequired} onChange={(event) => {
                    setIsRequired(event.target.checked)
                }} />} label="Is Required" sx={{paddingBottom:2}} />

                <FormControl fullWidth sx={{paddingBottom:2}}>
                    <InputLabel id="demo-simple-select-label">Grid Size</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={gridSize}
                        label="Grid Size"
                        onChange={(event) => {
                            setGridSize(event.target.value);
                        }}>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        <MenuItem value={11}>11</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            {/* } */}
            <DialogActions>
            <Button onClick={() => {
                    setNewCustomFieldOpen(null);
                }}>Cancel</Button>
            <Button onClick={async () => {

                    let id = null;
                    if (newCustomFieldOpen != -1) 
                    {
                        id = newCustomFieldOpen;
                    }

                    await apiService().post("/UserManagement/AddOrUpdateCustomField", {
                        id: id,
                        name: refName.current.value,
                        fieldType: fieldType,
                        customFieldPlatformType: platformType,
                        isRequired: isRequired,
                        gridSize: gridSize,
                        tabSelection: tabSelection
                    });

                    await RefreshFields();

                    setNewCustomFieldOpen(null);
                }} autoFocus>
                Update
            </Button>
            </DialogActions>
        </Dialog>

        <Dialog
        open={deleteCustomTabOpen}
        onClose={() => setDeleteCustomTabOpen(null)}
      >
        <DialogTitle id="alert-dialog-title">
          Delete {deleteCustomTabOpen && deleteCustomTabOpen.name} tab?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the {deleteCustomTabOpen && deleteCustomTabOpen.name} tab?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button  onClick={async (event) => {
                
                let response = await apiService().delete("/UserManagement/DeleteCustomTab?id=" + deleteCustomTabOpen.id);
                
                refreshTabOptions();
                setDeleteCustomTabOpen(null);
            }}>
                Yes
            </Button>
            <Button  onClick={() => {
            setDeleteCustomTabOpen(null)
            }}>No</Button>
        
        </DialogActions>
    </Dialog>
    </>
    )
  }


  return (
    <>
    <Box>
        <Typography variant="h3" gutterBottom>
            Custom Fields
        </Typography>
        
        <Button variant="contained" sx={{width:200, marginTop:2}} onClick={async () => {

            // let response = await apiService().post("/UserManagement/AddPermission", { name: roleNameRef.current.value });
            // if (response != null)
            // {
            //     await RefreshRoles();
            //     // should refresh the getallroles dataset
            // }

            setNewCustomFieldOpen(-1);

        }}>Add Custom Field</Button>

        <TableContainer component={Paper} sx={{marginTop:2}}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Field Type</TableCell>
                    <TableCell>Tabs</TableCell>
                    <TableCell>Is Required</TableCell>
                    <TableCell>Grid Size</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {customFields.map((row) => (
                    <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor:"pointer" }} onClick={() => {
                        setNewCustomFieldOpen(row.id);
                    }}>
                        <TableCell component="th" scope="row">
                            {row.id}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.fieldType == 1 && "Text Field"}
                            {row.fieldType == 2 && "Rich Text Field"}
                            {row.fieldType == 3 && "Number"}
                            {row.fieldType == 4 && "Date"}
                            {row.fieldType == 5 && "Yes / No"}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.customFieldTab ? row.customFieldTab.name : ""}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.isRequired == true ? "Required" : "Not Required"}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.gridSize}
                        </TableCell>
                        <TableCell component="th" scope="row">
                            <IconButton color={"error"} onClick={(event) => {
                                    
                                    event.stopPropagation();
                                    setDeleteCustomFieldOpen(row);
                                }
                            }>
                                <DeleteIcon />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>


        {AddNewCustomField()}
    </Box>

    <Dialog
        open={deleteCustomFieldOpen}
        onClose={() => setDeleteCustomFieldOpen(null)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Delete {deleteCustomFieldOpen && deleteCustomFieldOpen.name} field?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete the {deleteCustomFieldOpen && deleteCustomFieldOpen.name} field?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button  onClick={async () => {
                let response = await apiService().delete("/UserManagement/DeleteCustomField?id=" + deleteCustomFieldOpen.id);
                await RefreshFields();
                setDeleteCustomFieldOpen(null);
            }}>
                Yes
            </Button>
            <Button  onClick={() => setDeleteCustomFieldOpen(null)}>No</Button>
        
        </DialogActions>
    </Dialog>
    
    </>
  )
}
