import React, {useEffect, useState, useRef} from 'react';
import { Box } from '@mui/system';
import { AppBar, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, FormControl, InputLabel, Menu, MenuItem, Select, TextField, Toolbar, Tooltip, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import UploadRoundedIcon from '@mui/icons-material/UploadRounded';
import { EditableDatagrid, FileUploader, AutoSaveTextField, apiService } from 'authscape';
import Grid from '@mui/material/Grid2';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import PasswordRoundedIcon from '@mui/icons-material/PasswordRounded';
import Autocomplete from '@mui/material/Autocomplete';
import BusinessRoundedIcon from '@mui/icons-material/BusinessRounded';

// comment this out when done
// import UserEditor from './UserEditor'; // remove when done
// import CompanyEditor from './CompanyEditor' // remove when done
// import { CSVUsersUpload } from './CSVUsersUpload'; // remove when done
// import { CustomFields } from './CustomFields'; // remove when done
// import LocationEditor from './LocationsEditor';


export const UserManagement = ({height = "50vh", platformType = 1, defaultIdentifier = null, companyId = null, onUploadCompleted = null, onAccountCreated = null, onSaved = null, onCustomTabs = null}) => {

    const [showUserDetails, setShowUserDetails] = useState(null);
    
    const [showCustomSettings, setShowCustomSettings] = useState(false);

    const [showArchiveUserDialog, setShowArchiveUserDialog] = useState(null);
    const [showContactDialog, setShowContactDialog] = useState(false);

    const [inputCompanyValue, setInputCompanyValue] = useState('');

    const [allRoles, setAllRoles] = useState([]);
    const [allCompanies, setAllCompanies] = useState([]);


    const [showChangePasswordDialog, setShowChangePasswordDialog] = useState(false);
    const [newPassword, setNewPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);

    const [dataGridRefreshKey, setDataGridRefreshKey] = useState(0);
    const [uploadUsersShowDialog, setUploadUsersShowDialog] = useState(false);

    const [searchByName, setSearchByName] = useState('');
    const [searchByCompanyId, setSearchByCompanyId] = useState(null);
    const [searchByRoleId, setSearchByRoleId] = useState(null);
    const [columns, setColumns] = useState([]);

    const [activeState, setActiveState] = useState(true);

    const filterLoaded = useRef(false);

    const userEditorRef = useRef();


    const [companies, setCompanies] = useState([]);
    const [company, setCompany] = useState(null);


    const newCompanyName = useRef();


    const newLocationName = useRef();
    const newLocationAddress = useRef();
    const newLocationCity = useRef();
    const newLocationState = useRef();
    const newLocationPostalCode = useRef();
    const newLocationCompanyId = useRef();


    const newFirstName = useRef();
    const newLastName = useRef();
    const newEmail = useRef();

    const userColumns = [
        {
            field: 'fullName',
            headerName: 'Full name',
            flex: 1,
            valueGetter: (value, row) => row.firstName + " " + row.lastName 
            // renderCell: (param) => {
            //     return param.row.firstName + " " + param.row.lastName; 
            // }
        },
        {
            field: 'isActive',
            headerName: 'Status',
            flex: 1,    
            valueGetter: (_, row) => row.isActive,
            valueFormatter: (value, row) => {
                return value == true ? "Active" : ("Inactive" + (row.archived ? " (archived)" : "" ))
            },
          
        },
        { field: 'userName', flex:1, headerName: 'Email', editable: false, headerClassName: 'invoiceHeaderColumn' },  
        {
            field: 'company',
            headerName: 'Company',
            flex: 1, 
            valueGetter: (value, row) => row.company.title    
            // renderCell: (param) => {
            //     return param.row.company != null ? param.row.company.title : ""; 
            // }
        },      
        {
            field: 'phoneNumber',
            headerName: 'Phone Number',
            flex: 1, 
            valueGetter: (value, row) => row.phoneNumber    
            // renderCell: (param) => {
            //     return param.row.company != null ? param.row.company.title : ""; 
            // }
        },
        {
            field: 'location',
            headerName: 'Location',
            flex: 1,    
            valueGetter: (_, row) => row.location.title
            // renderCell: (param) => {
            //     return param.row.location != null ? param.row.location.title : ""; 
            // }
        },
       
        {
            field: 'roles',
            headerName: 'Roles',
            flex: 1,    
            // renderCell: (param) => {
            //     return param.row.roles; 
            // }
        },
        {
            field: 'permissions',
            headerName: 'Permissions',
            flex: 1,    
            // renderCell: (param) => {
            //     return param.row.permissions; 
            // }
        },
        // {
        //     field: 'permissions',
        //     headerName: 'Permissions',
        //     flex: 1,    
        //     renderCell: (param) => {
        //         debugger;
        //         return param.row.permissions; 
        //     }
        // }
    ];

    const companiesColumns = [
        {
            field: 'logo',
            headerName: 'Logo',
            flex: 1,
            renderCell: (param) => {
                return <Box sx={{backgroundImage: `url(${param.row.logo})`, backgroundSize:"contain", backgroundRepeat:"no-repeat", marginTop:1}} height={50}></Box>
            }
        },
        {
            field: 'title',
            headerName: 'Name',
            flex: 1,
            renderCell: (param) => {
                return param.row.title; 
            }
        },
        {
            field: 'numberOfLocations',
            headerName: 'Number of Locations',
            flex: 1,    
            renderCell: (param) => {
                return param.row.numberOfLocations != null ? param.row.numberOfLocations : ""; 
            }
        },
        {
            field: 'numberOfUsers',
            headerName: 'Number of Users',
            flex: 1,    
            renderCell: (param) => {
                return param.row.numberOfUsers != null ? param.row.numberOfUsers : ""; 
            }
        },
    ];

    const locationColumns = [
        {
            field: 'title',
            headerName: 'Name',
            flex: 1,
            renderCell: (param) => {
                return param.row.title; 
            }
        },
        {
            field: 'address',
            headerName: 'Address',
            flex: 1,    
            renderCell: (param) => {
                return param.row.address != null ? param.row.address : ""; 
            }
        },
        {
            field: 'city',
            headerName: 'City',
            flex: 1,    
            renderCell: (param) => {
                return param.row.city != null ? param.row.city : ""; 
            }
        },
        {
            field: 'state',
            headerName: 'State',
            flex: 1,    
            renderCell: (param) => {
                return param.row.state != null ? param.row.state : ""; 
            }
        },
        {
            field: 'zipCode',
            headerName: 'ZipCode',
            flex: 1,    
            renderCell: (param) => {
                return param.row.zipCode != null ? param.row.zipCode : ""; 
            }
        },
        {
            field: 'isDeactivated',
            headerName: 'Account Status',
            flex: 1,    
            renderCell: (param) => {
                return param.row.isDeactivated != null ? (!param.row.isDeactivated ? "Active" : "Deactive") : ""; 
            }
        },
        {
            field: 'company',
            headerName: 'Company',
            flex: 1,    
            renderCell: (param) => {
                return param.row.company != null ? param.row.company.title : ""; 
            }
        },
    ];

    useEffect(() => {

        if (defaultIdentifier == null)
        {
            setDataGridRefreshKey(dataGridRefreshKey + 1);
        }
    }, [searchByName, columns, activeState]);

    useEffect(() => {

        if (!filterLoaded.current)
        {
            filterLoaded.current = true;
            getAllCompanies();
            getAllRoles();
            getAllCustomFields();
        }

    }, [filterLoaded.current])

    const getDataGrid = () => {

        let response = "";
        if (platformType == 1)
        {
            response = "/UserManagement/GetUsers"; 
        }
        else if (platformType == 2)
        {
            response = "/UserManagement/GetCompanies";
        }
        else if (platformType == 3)
        {
            response = "/UserManagement/GetLocations";
        }

        return response;
    }

    const getColumns = (customFields) => {

        if (platformType == 1)
        {
           
            let cols = [...userColumns, ...customFields.map((field, i) => {
               
                return {
                    field: `customField${i + 1}`,
                    headerName: field.name,
                    flex: 1,
                    valueGetter: (_, row) => {
                        
                        if (row.customFields)
                        {
                            let cf = row.customFields.find(f => f.customFieldId == field.id);
                            if (cf) return cf.value;
                        }

                        return null;
                    } 
                };
            }), {
                field: '',
                headerName: '',
                flex: 1,
                renderCell: 
                    (param) => {
                        return (
                            <Button onClick={(e) =>{
                                e.stopPropagation();
                                setShowArchiveUserDialog(param.row);

                            }}>
                                {param.row.isActive ? "Archive" : "Activate"}
                            </Button>
                        )
                    }
            }];

            setColumns(cols);
         
        }
        else if (platformType == 2)
        {
            let cols = [...companiesColumns, ...customFields.map((field, i) => {
               
                return {
                    field: `customField${i + 1}`,
                    headerName: field.name,
                    flex: 1,
                    valueGetter: (_, row) => {
                        
                        if (row.customFields)
                        {
                            let cf = row.customFields.find(f => f.customFieldId == field.id);
                            if (cf) return cf.value;
                        }

                        return null;
                    } 
                };
            }), {
                field: '',
                headerName: '',
                flex: 1,
                renderCell: 
                    (param) => {
                        return (
                            <Button onClick={(e) =>{
                                e.stopPropagation();
                                setShowArchiveUserDialog(param.row);

                            }}>
                                {param.row.isActive ? "Archive" : "Activate"}
                            </Button>
                        )
                    }
            }];

            setColumns(cols);

        }
        else if (platformType == 3)
        {
            let cols = [...locationColumns, ...customFields.map((field, i) => {
               
                return {
                    field: `customField${i + 1}`,
                    headerName: field.name,
                    flex: 1,
                    valueGetter: (_, row) => {
                        
                        if (row.customFields)
                        {
                            let cf = row.customFields.find(f => f.customFieldId == field.id);
                            if (cf) return cf.value;
                        }

                        return null;
                    } 
                };
            }), {
                field: '',
                headerName: '',
                flex: 1,
                renderCell: 
                    (param) => {
                        return (
                            <Button onClick={(e) =>{
                                e.stopPropagation();
                                setShowArchiveUserDialog(param.row);

                            }}>
                                {param.row.isActive ? "Archive" : "Activate"}
                            </Button>
                        )
                    }
            }];

            setColumns(cols);
        }
    }

    const getAllCompanies = async () => {

        let results = [];

        let response = await apiService().get("/UserManagement/GetAllCompanies");

        response.data.forEach(element => {

            results.push({
                label: element.title,
                id: element.id
            });
        });

        setAllCompanies(results);
    }

    const getAllCustomFields = async () => {

        let res = await apiService().get(`/UserManagement/GetCustomFields?platformType=${platformType}&IsDatagrid=true`);
        getColumns(res.data);

    }

    const getAllRoles = async () => {

        let results = [];

        let response = await apiService().get("/UserManagement/GetRoles");
        response.data.forEach(element => {

            results.push({
                label: element.name,
                id: element.id
            });
        });

        setAllRoles(results);
    }

    useEffect(() => {

        if (inputCompanyValue != null)
        {
            const fetchData = async () => {

            const response = await apiService().get("/UserManagement/GetCompaniesForLocation?searchBName=" + inputCompanyValue);
            if (response != null && response.status == 200)
            {
                setCompanies(response.data)
            }

            }
            fetchData();
        }

    }, [inputCompanyValue]);

    return (
        <Box>
            <Box>
                <AppBar color={"invert"} position="static" sx={{borderRadius:1, paddingLeft:3, paddingRight:3, minHeight:50}}>
                    <Toolbar disableGutters>
                    {(!showCustomSettings && showUserDetails) &&
                    <>
                        <Box sx={{paddingRight:2}}>
                            <KeyboardBackspaceRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor:"pointer" }} onClick={() => {
                                
                                setShowUserDetails(null);
                            }} />
                        </Box>
                        <Divider orientation="vertical" flexItem />
                    </>
                    }

                    {showCustomSettings &&
                    <>
                        <Box sx={{paddingRight:2}}>
                            <KeyboardBackspaceRoundedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor:"pointer" }} onClick={async () => {
                                
                                await getAllCustomFields();
                                setDataGridRefreshKey(dataGridRefreshKey + 1);
                                setShowCustomSettings(false);
                            }} />
                        </Box>
                        <Divider orientation="vertical" flexItem />
                    </>
                    }

                    {!showCustomSettings &&
                    <>
                        {(showUserDetails || defaultIdentifier) &&
                        <>
                            <Box sx={{paddingRight:2, paddingLeft:2}}>
                                <Button variant="text" startIcon={<SaveRoundedIcon />} onClick={async () => {

                                    
                                    userEditorRef.current.saveChanges();

                                }}>Save</Button>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                        </>
                        }

                        {(showUserDetails || defaultIdentifier) &&
                        <>
                            <Box sx={{paddingRight:2, paddingLeft:2}}>
                                <Button variant="text" startIcon={<SaveRoundedIcon />} onClick={async () => {

                                    userEditorRef.current.saveChanges(true);
                                    setShowUserDetails(null);

                                }}>Save &amp; close</Button>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                        </>
                        }

                        {(showUserDetails && platformType == 1) &&
                        <>
                            <Box sx={{paddingRight:2, paddingLeft:2}}>
                                <Button variant="text" startIcon={<PasswordRoundedIcon />} onClick={async () => {

                                    setShowChangePasswordDialog(true);

                                }}>Change Password</Button>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                        </>
                        }

                        {(!showUserDetails && defaultIdentifier == null) &&
                        <>
                            <Box sx={{paddingRight:2, paddingLeft:1}}>
                                <Button variant="text" startIcon={<AddRoundedIcon />} onClick={async () => {

                                    setShowContactDialog(true);

                                }}>
                                    {platformType == 1 ? "Add User" : (platformType == 2 ? "Add Company" : "Add Location")}
                                </Button>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                        </>
                        }

                        {(!showUserDetails && defaultIdentifier == null && platformType == 1) &&
                        <>
                            <Box sx={{paddingRight:2, paddingLeft:1}}>
                                <Button variant="text" startIcon={<UploadRoundedIcon />} onClick={async () => {

                                    setUploadUsersShowDialog(true);

                                }}>Upload Users</Button>
                            </Box>
                            <Divider orientation="vertical" flexItem />
                        </>
                        }
                    </>
                    }
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Custom Fields">
                        <IconButton sx={{ p: 0 }} onClick={() => {
                            setShowCustomSettings(true);
                        }}>
                            <SettingsRoundedIcon sx={{fontSize:25}} />
                        </IconButton>
                        </Tooltip>
                        <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        // anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        >
                        </Menu>
                    </Box>
                    </Toolbar>
                </AppBar>

                <Box sx={{marginTop:1, padding:2, borderRadius:1, boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"}}>
                    {(showUserDetails == null && defaultIdentifier == null && platformType == 1) &&
                        <Box sx={{paddingBottom:1}}>

                            <Grid container spacing={2}>
                                <Grid size={3}>
                                    <AutoSaveTextField label="name or email " fullWidth={true} onChanged={(value) => {
                                    
                                        setSearchByName(value);
                                        setDataGridRefreshKey(dataGridRefreshKey + 1);

                                    }} />
                                </Grid>
                                <Grid size={3}>
                                    <Autocomplete
                                        options={allCompanies}
                                        renderInput={(params) => <TextField {...params} label="Companies" />}
                                        onChange={(event, newValue) => {

                                            if (newValue != null)
                                            {
                                                setSearchByCompanyId(newValue.id);
                                                setDataGridRefreshKey(dataGridRefreshKey + 1);
                                            }
                                            else
                                            {
                                                setSearchByCompanyId(null);
                                                setDataGridRefreshKey(dataGridRefreshKey + 1);
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid size={3}>
                                    <Autocomplete
                                        disablePortal
                                        options={allRoles}
                                        renderInput={(params) => <TextField {...params} label="Roles" />}
                                        onChange={(event, newValue) => {

                                            if (newValue != null)
                                            {
                                                setSearchByRoleId(newValue.id);
                                                setDataGridRefreshKey(dataGridRefreshKey + 1);
                                            }
                                            else
                                            {
                                                setSearchByRoleId(null);
                                                setDataGridRefreshKey(dataGridRefreshKey + 1);
                                            }
                                        }}
                                    />
                                </Grid>



                                <Grid size={3}>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={activeState ? 1 : 0}
                                            label="State"
                                            onChange={(evn, newVal) => {

                                                if (evn.target.value == 0)
                                                {
                                                    setActiveState(false);
                                                }
                                                else
                                                {
                                                    setActiveState(true);
                                                }

                                            }}>
                                            <MenuItem value={0}>Deactivated</MenuItem>
                                            <MenuItem value={1}>Activated</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                            </Grid>

                            
                        </Box>
                    }

                    {(showUserDetails == null && defaultIdentifier == null && platformType == 2) &&
                        <Box sx={{paddingBottom:1}}>

                            <Grid container spacing={2}>
                                <Grid size={6}>
                                    <AutoSaveTextField label="Company Name" fullWidth={true} onChanged={(value) => {
                                    
                                        setSearchByName(value);
                                        setDataGridRefreshKey(dataGridRefreshKey + 1);

                                    }} />


                                </Grid>


                                <Grid size={6}>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={activeState ? 1 : 0}
                                            label="State"
                                            onChange={(evn, newVal) => {

                                                if (evn.target.value == 0)
                                                {
                                                    setActiveState(false);
                                                }
                                                else
                                                {
                                                    setActiveState(true);
                                                }

                                            }}>
                                            <MenuItem value={0}>Deactivated</MenuItem>
                                            <MenuItem value={1}>Activated</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                            </Grid>

                            
                        </Box>
                    }


                    {(showUserDetails == null && defaultIdentifier == null && platformType == 3) &&
                        <Box sx={{paddingBottom:1}}>

                            <Grid container spacing={2}>
                                <Grid size={6}>
                                    <AutoSaveTextField label="Location Name" fullWidth={true} onChanged={(value) => {
                                    
                                        setSearchByName(value);
                                        setDataGridRefreshKey(dataGridRefreshKey + 1);

                                    }} />

                                </Grid>


                                <Grid size={6}>

                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">State</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={activeState ? 1 : 0}
                                            label="State"
                                            onChange={(evn, newVal) => {

                                                if (evn.target.value == 0)
                                                {
                                                    setActiveState(false);
                                                }
                                                else
                                                {
                                                    setActiveState(true);
                                                }

                                            }}>
                                            <MenuItem value={0}>Deactivated</MenuItem>
                                            <MenuItem value={1}>Activated</MenuItem>
                                        </Select>
                                    </FormControl>

                                </Grid>
                            </Grid>

                            
                        </Box>
                    }

                    {!showCustomSettings &&
                    <Box>
                        {(showUserDetails == null && defaultIdentifier == null) &&
                     
                        <EditableDatagrid 
                            key={dataGridRefreshKey}
                            height={height}
                            pageSize={25}
                            url={getDataGrid()} 
                            columns={columns}
                            params={{
                                searchByName: searchByName,
                                searchByCompanyId: searchByCompanyId,
                                searchByRoleId: searchByRoleId,
                                name: searchByName,

                                isActive: activeState
                            }} 
                            onRowClick={(row) => {                                
                                setShowUserDetails(row.id);
                            }} />
                        }

                        <Box>
                            {(showUserDetails != null || defaultIdentifier != null) &&
                            <Grid item xs={12}>
                                <Box sx={{ width: '100%' }}>
                                    {platformType == 1 &&
                                        <UserEditor
                                            platformType={platformType}
                                            onCustomTabs={onCustomTabs}
                                            ref={userEditorRef}
                                            userId={defaultIdentifier != null ? defaultIdentifier : showUserDetails}
                                            onSaved={(shouldClose, platformType, userId, fields) => {

                                                setDataGridRefreshKey(dataGridRefreshKey + 1);

                                                if (onSaved != null)
                                                {
                                                    if (shouldClose == null)
                                                    {
                                                        shouldClose = false;
                                                    }

                                                    onSaved(shouldClose, platformType, userId, fields);
                                                }
                                                
                                                if (shouldClose)
                                                {
                                                    setShowUserDetails(null);
                                                }
                                            }}
                                        />
                                    }
                                    {platformType == 2 &&
                                        <CompanyEditor 
                                            companyId={defaultIdentifier != null ? defaultIdentifier : showUserDetails}
                                            onCustomTabs={onCustomTabs}
                                            platformType={platformType}
                                            ref={userEditorRef}
                                            onSaved={(shouldClose, platformType, userId, fields) => {

                                                setDataGridRefreshKey(dataGridRefreshKey + 1);

                                                // need to add a way to close the company editor
                                                if (onSaved != null)
                                                {
                                                    if (shouldClose == null)
                                                    {
                                                        shouldClose = false;
                                                    }

                                                    onSaved(shouldClose, platformType, userId, fields);
                                                }
                                            }}
                                        />
                                    }
                                    {platformType == 3 &&
                                        <LocationEditor
                                            locationId={defaultIdentifier != null ? defaultIdentifier : showUserDetails}
                                            onCustomTabs={onCustomTabs}
                                            platformType={platformType}
                                            ref={userEditorRef}
                                            onSaved={(shouldClose, platformType, userId, fields) => {

                                                setDataGridRefreshKey(dataGridRefreshKey + 1);

                                                if (onSaved != null)
                                                {
                                                    if (shouldClose == null)
                                                    {
                                                        shouldClose = false;
                                                    }

                                                    onSaved(shouldClose, platformType, userId, fields);
                                                }
                                            }}
                                        />
                                    }
                                </Box>
                            </Grid>
                            }
                            
                        </Box>
                    </Box>
                    }

                    <Dialog
                        open={showChangePasswordDialog}
                        onClose={() => {
                            setShowChangePasswordDialog(false);
                        }}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                        {"Change Password"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Please provide the new password that you want to change for this users account.
                            </DialogContentText>

                            <Grid size={12}>
                                
                                <Box sx={{paddingTop:2}}>
                                    <TextField id="txtNewPassword" label="New Password" variant="outlined" fullWidth={true} onChange={(val) => {
                                        setNewPassword(val.currentTarget.value);
                                    }} />
                                </Box>
                                <Box sx={{paddingTop:2}}>
                                    <TextField id="txtConfirmPassword" label="Confirm Password" variant="outlined" fullWidth={true} onChange={(val) => {
                                        setConfirmPassword(val.currentTarget.value);
                                    }} />

                                    {newPassword !== confirmPassword &&
                                    <Typography color={"red"}>{"New Password and Confirm Password"} does not match.</Typography>
                                    }

                                </Box>

                            </Grid>




                        </DialogContent>
                        <DialogActions>
                        <Button onClick={() => {
                            setShowChangePasswordDialog(false);
                        }}>Cancel</Button>
                        <Button onClick={async () => {

                            if (newPassword != null && confirmPassword != null && confirmPassword != "" && newPassword != "")
                            {
                                let response = await apiService().put("/UserManagement/ChangeUserPassword", {
                                    userId: parseInt(showUserDetails),
                                    password: newPassword
                                });

                                if (response.data != null && response.data.error != null)
                                {
                                    alert(response.data.error);
                                }
                                else
                                {
                                    setShowChangePasswordDialog(false);
                                }
                            }

                        }}>
                            Change Password
                        </Button>
                        </DialogActions>
                    </Dialog>
                    
                    {
                        showArchiveUserDialog &&
                        <Dialog
                            open={showArchiveUserDialog}
                            onClose={() => {
                                setShowArchiveUserDialog(null);
                            }}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">

                                {(showArchiveUserDialog.isActive == true && platformType == 1) && "Archive User"}
                                {(showArchiveUserDialog.isActive == true && platformType == 2) && "Archive Company"}
                                {(showArchiveUserDialog.isActive == true && platformType == 3) && "Archive Location"}

                                {(showArchiveUserDialog.isActive == false && platformType == 1) && "Activate User"}
                                {(showArchiveUserDialog.isActive == false && platformType == 2) && "Activate Company"}
                                {(showArchiveUserDialog.isActive == false && platformType == 3) && "Activate Location"}

                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">


                                    {(showArchiveUserDialog.isActive == true && platformType == 1) && "Are you sure you want to archive " + showArchiveUserDialog.firstName + " " + showArchiveUserDialog.lastName}
                                    {(showArchiveUserDialog.isActive == true && platformType == 2) && "Are you sure you want to archive this company?"}
                                    {(showArchiveUserDialog.isActive == true && platformType == 3) && "Are you sure you want to archive this location?"}

                                    {(showArchiveUserDialog.isActive == false && platformType == 1) && "Are you sure you want to activate " + showArchiveUserDialog.firstName + " " + showArchiveUserDialog.lastName}
                                    {(showArchiveUserDialog.isActive == false && platformType == 2) && "Are you sure you want to activate " + showArchiveUserDialog.title}
                                    {(showArchiveUserDialog.isActive == false && platformType == 3) && "Are you sure you want to activate " + showArchiveUserDialog.address + " " + showArchiveUserDialog.city + " " + showArchiveUserDialog.state + " " + showArchiveUserDialog.zipCode}

                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <Button onClick={() => {
                                setShowArchiveUserDialog(null);
                            }}>Cancel</Button>
                            <Button onClick={async () => {

                                if (showArchiveUserDialog.isActive)
                                {
                                    if (platformType == 1)
                                    {
                                        await apiService().delete(`/UserManagement/ArchiveUser?id=${showArchiveUserDialog.id}`);
                                    }
                                    else if (platformType == 2)
                                    {
                                        await apiService().delete(`/UserManagement/ArchiveCompany?id=${showArchiveUserDialog.id}`);
                                    }
                                    else if (platformType == 3)
                                    {
                                        await apiService().delete(`/UserManagement/ArchiveLocation?id=${showArchiveUserDialog.id}`);
                                    }
                                }
                                else
                                {
                                    if (platformType == 1)
                                    {
                                        await apiService().delete(`/UserManagement/ActivateUser?id=${showArchiveUserDialog.id}`);
                                    }
                                    else if (platformType == 2)
                                    {
                                        await apiService().delete(`/UserManagement/ActivateCompany?id=${showArchiveUserDialog.id}`);
                                    }
                                    else if (platformType == 3)
                                    {
                                        await apiService().delete(`/UserManagement/ActivateLocation?id=${showArchiveUserDialog.id}`);
                                    }
                                }

                                setDataGridRefreshKey(dataGridRefreshKey + 1);
                                setShowArchiveUserDialog(null);

                            }}>
                                Yes
                            </Button>
                            </DialogActions>
                        </Dialog>
                    }

                    <Dialog
                        open={showContactDialog}
                        onClose={() => {
                            setShowContactDialog(false);
                        }}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                        {platformType == 1 ? "Setup User Account" : (platformType == 2 ? "Setup Company Account" : "Setup Location Account")}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                                Please provide the following information to proceed and complete the account setup.
                            </DialogContentText>

                            {platformType == 1 &&
                                <Grid container spacing={2} sx={{paddingTop:2}}>
                                    <Grid size={6}>
                                        <TextField inputRef={newFirstName} label="First Name" variant="outlined" fullWidth={true} />
                                    </Grid>
                                    <Grid size={6}>
                                        <TextField inputRef={newLastName} label="Last Name" variant="outlined" fullWidth={true} />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField inputRef={newEmail} label="Email" variant="outlined" fullWidth={true} />
                                    </Grid>
                                </Grid>
                            }

                            {platformType == 2 &&
                                <Grid container spacing={2} sx={{paddingTop:2}}>
                                    <Grid size={12}>
                                        <TextField inputRef={newCompanyName} label="Company Name" variant="outlined" fullWidth={true} />
                                    </Grid>
                                </Grid>
                            }

                            {platformType == 3 &&
                                <Grid container spacing={2} sx={{paddingTop:2}}>
                                    <Grid size={12}>
                                        <TextField inputRef={newLocationName} label="Location Name" variant="outlined" fullWidth={true} />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField inputRef={newLocationAddress} label="Address" variant="outlined" fullWidth={true} />
                                    </Grid>
                                    <Grid size={6}>
                                        <TextField inputRef={newLocationCity} label="City" variant="outlined" fullWidth={true} />
                                    </Grid>
                                    <Grid size={6}>
                                        <TextField inputRef={newLocationState} label="State" variant="outlined" fullWidth={true} />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField inputRef={newLocationPostalCode} label="Postal Code" variant="outlined" fullWidth={true} />
                                    </Grid>
                                    <Grid size={12}>

                                        <Autocomplete
                                        id="companySelect"
                                        inputRef={newLocationCompanyId}
                                        sx={{paddingTop: 2}}
                                        getOptionLabel={(option) => option.title || option}
                                        options={[...companies, { title: "Add Company", isAddOption: true }]} // Add option appended here
                                        autoComplete
                                        includeInputInList
                                        filterSelectedOptions
                                        value={company}
                                        noOptionsText="Company Not Found"
                                        onChange={(event, newValue) => {
                                            if (newValue?.isAddOption) {

                                            setEditAddLocationId(-1);

                                            } else {

                                            setCompany(newValue);

                                            }
                                        }}
                                        onInputChange={(event, newInputValue) => {
                                            
                                            setInputCompanyValue(newInputValue);
                                        }}
                                        renderInput={(params) => (
                                            <TextField {...params} label="Company" fullWidth />
                                        )}
                                        renderOption={(props, option) => (
                                            <li {...props} key={"company-" + option.title}>
                                            <Grid container alignItems="center">
                                                <Grid item sx={{ display: 'flex', width: 44 }}>
                                                    <BusinessRoundedIcon sx={{ color: 'text.secondary' }} />
                                                    </Grid>
                                                    <Grid item sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}>
                                                    <Typography variant="body2" color={option.isAddOption ? "primary" : "text.secondary"}>
                                                        {option.title}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                            </li>
                                        )}
                                        />

                                        {/* <TextField inputRef={newLocationCompanyId} label="Company" variant="outlined" fullWidth={true} /> */}
                                    </Grid>
                                </Grid>
                            }

                        </DialogContent>
                        <DialogActions>
                        <Button onClick={() => {
                            setShowContactDialog(false);
                        }}>Cancel</Button>
                        <Button onClick={async () => {

                            if (platformType == 1)
                            {
                                onAccountCreated({
                                    firstName: newFirstName.current.value,
                                    lastName: newLastName.current.value,
                                    email: newEmail.current.value
                                });
                            }
                            if (platformType == 2) // company
                            {
                                onAccountCreated({
                                    companyName: newCompanyName.current.value
                                });
                            }
                            if (platformType == 3) // location
                            {
                                onAccountCreated({
                                    Name: newLocationName.current.value,
                                    address: newLocationAddress.current.value,
                                    city: newLocationCity.current.value,
                                    state: newLocationState.current.value,
                                    postalCode: newLocationPostalCode.current.value,
                                    companyId: company.id
                                });
                            }
                            setShowContactDialog(false);

                        }}>
                            Create Account
                        </Button>
                        </DialogActions>
                    </Dialog>


                    {showCustomSettings &&
                        <CustomFields platformType={platformType} />
                    }

                    <CSVUsersUpload showDialog={uploadUsersShowDialog} platformType={platformType} onClose={() => {
                        
                        setDataGridRefreshKey(dataGridRefreshKey + 1);
                        setUploadUsersShowDialog(false);
                    }} />
                </Box>
            </Box>
        </Box>
    );
}