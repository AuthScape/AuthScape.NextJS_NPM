import React, {useEffect, useState, useRef, useImperativeHandle, forwardRef } from 'react';
import { Box } from '@mui/system';
import { Autocomplete, Avatar, Button, Drawer } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import { Tab, Tabs, Stack } from '@mui/material';
import { apiService } from 'authscape';
import Grid from '@mui/material/Grid2';

// remove when publishing
// import {renderCustomField, renderSystemField } from './EditorFields';

const CompanyEditor = forwardRef(({companyId = null, platformType, onSaved = null}, ref) => {

  const {control, register, handleSubmit, formState: { errors }, watch, setValue } = useForm();

  const [editors, setEditors] = useState({});

  const refShouldClose = useRef(null);
  const refSubmitButton = useRef(null);

  const [selectedRoles, setSelectedRole] = useState([]);
  const [selectedPermission, setSelectedPermission] = useState([]);

  const [company, setCompany] = useState(null);

  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState(null);
  const [inputLocationValue, setInputLocationValue] = useState('');

  const [customFields, setCustomFields] = useState([]);

  const [user, setUser] = useState(null);

  const [tabOptions, setTabOptions] = useState([]);


  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
      setTabValue(newValue);
  };

  useEffect(() => {

    const fetchData = async () => {

      await refreshTabOptions();

      let response = await apiService().get("/UserManagement/GetCompany?companyId=" + companyId);
      if (response != null && response.status == 200)
      {
        setCompany(response.data);

        if (response.data.customFields != null)
        {
            setCustomFields(response.data.customFields);
        }
        setEditors({...editors});
      }

        // assign all selected roles
        if (response.data.roles != null)
        {
          let roleNames = [];
          for (let index = 0; index < response.data.roles.length; index++) {
            const role = response.data.roles[index];
            
            roleNames.push(role);
          }
          setSelectedRole(roleNames);
        }

        // assign all selected permissions
        if (response.data.permissions != null)
        {
          let permissionNames = [];
          for (let index = 0; index < response.data.permissions.length; index++) {
            const permission = response.data.permissions[index];
            
            permissionNames.push(permission);
          }
          setSelectedPermission(permissionNames);
        }
    }

    if (companyId != -1)
    {
      fetchData();
    }
      

  }, [companyId])

  const fields = [
    "Title"
  ]

  const refreshTabOptions = async () => {
      const customTabResponse = await apiService().get("/UserManagement/GetCustomTabs?platformType=" + platformType);
      if (customTabResponse != null && customTabResponse.status == 200)
      {
          let dataElement = customTabResponse.data; 
          setTabOptions(dataElement);

          if (dataElement.length > 0)
          {
            setTabValue(dataElement[0].id);
          }
      }
  }


  useEffect(() => {

    const fetchData = async () => {

      if (company != null)
      {
        if (inputLocationValue == null || inputLocationValue == "")
        {
          let response = await apiService().get("/UserManagement/GetLocations?companyId=" + company.id);
          if (response != null && response.status == 200)
          {
            setLocations(response.data);
          }
        }
        else
        {
          let response = await apiService().get("/UserManagement/GetLocations?companyId=" + company.id + "&name=" + inputLocationValue);
          if (response != null && response.status == 200)
          {
            setLocations(response.data);
          }
        }
      }
    }

    if (company != null || companyId == -1)
    {
      fetchData();
    }

  }, [company, companyId, inputLocationValue, company])


  const saveChanges = (shouldClose) => {
    refShouldClose.current = shouldClose;
    refSubmitButton.current.click();
  }


  useImperativeHandle(ref, () => ({
    saveChanges,
  }));



  return (
      <Box>

          <form onSubmit={handleSubmit(async (data) => {
            
            let userCustomFields = [];

            customFields && customFields.forEach(customField => {

              let newValue = 
              // customField.customFieldType == 2 ? 
              // draftToHTML(editors[customField.customFieldId].getCurrentContent()) 
              // : 
              data[customField.customFieldId];
              if (newValue != null)
              {
                userCustomFields.push({
                    customFieldId: customField.customFieldId,
                    name: customField.name,
                    isRequired: customField.isRequired,
                    customFieldType: customField.customFieldType,
                    value: newValue.toString()
                });
              }
                
            });

            let response = await apiService().post("/UserManagement/UpdateCompany", {
                id: companyId,
                title: data.Title,
                isDeactivated: false,
                customFields: userCustomFields
            });

            if (response != null && response.status == 200)
            {
                if (onSaved != null)
                {
                    onSaved(refShouldClose.current);
                }
            }

          })} noValidate autoComplete="off">
            
            <Grid container spacing={2} sx={{paddingTop:2}}>
              <Grid size={4} sx={{backgroundColor:"#f5f8fa", borderRadius:2, border: "1px solid lightgray", padding:2}}>
                <Box sx={{textAlign:"center", display:"flex", justifyContent:"center", padding:2 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg"  sx={{ width: 100, height: 100 }} />
                </Box>

                <hr />
                <Box sx={{fontWeight:"bold", paddingBottom: 1}}>
                  About this company
                </Box>

                {renderSystemField(companyId, company, control, errors, register, fields)}

                {/* <Box sx={{fontWeight:"bold", paddingTop:1, paddingBottom: 1}}>
                  Locations
                </Box>
                
                <Box>
                  Need a way to add and view locations
                </Box> */}


              </Grid>
              <Grid item size={8} sx={{backgroundColor:"#f5f8fa", borderRadius:2, border: "1px solid lightgray", padding:2}}>
                  <Stack spacing={2}>
                    <Box>
                      <Tabs value={tabValue} onChange={handleTabChange} variant="fullWidth" aria-label="basic tabs example" centered>
                        {tabOptions.map((tab, index) => {
                          return (
                            <Tab key={tab.id} label={tab.name} value={tab.id} />
                          )
                        })}
                      </Tabs>
                    </Box>
                    <Box>
                    {tabOptions.map((tab, index) => {
                      return (
                        <>
                        {tabValue === tab.id && 
                          <>
                            {customFields &&
                              <>
                                {renderCustomField(companyId, company, control, errors, register, setValue, customFields.filter(s => s.tabId == tab.id))}
                              </>
                            }
                          </>
                        }
                        </>
                      )
                    })}
                    </Box>
                  </Stack>
                 
                 
                    
                    
                  <Button ref={refSubmitButton} variant="contained" type="submit" sx={{display:"none"}}>Save Changes</Button>
                  
              </Grid>
            </Grid>
          </form>

      </Box>
  )
});

CompanyEditor.displayName = "CompanyEditor";

export default CompanyEditor;