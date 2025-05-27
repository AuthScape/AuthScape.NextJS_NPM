import React, {useEffect, useState, useRef} from 'react';
import { Box, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useForm, Controller } from 'react-hook-form';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Grid from '@mui/material/Grid2';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DropZone } from 'authscape';

export const findTheValue = (fieldObject, field) => {

    let result = "";
    if (fieldObject != null)
    {
      Object.getOwnPropertyNames(fieldObject).forEach(element => {

        if (field.toLowerCase() == element.toLowerCase())
        {
          result = fieldObject[element];
        }

      });
    }

    return result;
}

const findCustomFieldValue = (fieldObject, field) => {

    let result = null;
    if (fieldObject != null && fieldObject.customFields)
    {
        fieldObject.customFields.forEach(userCustomField => {

            if (field.toLowerCase() == userCustomField.name.toLowerCase())
            {
              if (userCustomField.customFieldType == 5)
              {
                result = (userCustomField.value === "true")
              }
              else
              {
                result = userCustomField.value;
              }
            }
            
        });
    }

    return result;
}

export const renderCustomField = (identifier, fieldObject, control, errors, register, setValue, customFields, 
  editors, setEditors
) => {


  return (
      <Grid container spacing={2}>
      {(identifier != -1 ? fieldObject != null : true) && customFields.map((field, index) => {

          let result = findCustomFieldValue(fieldObject, field.name);

          return (
            <Grid key={index} item size={field.size ? field.size : 12}>
              <Controller
                name={field.customFieldId}
                control={control}
                defaultValue={result}
                rules={{ required: field.isRequired }}
                render={({ field: { onChange, value } }) => (
                  <>
                    {(field.customFieldType === 1) && (
                      <TextField
                        label={field.name}
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        {...register(field.customFieldId, { required: field.isRequired })}
                        onChange={onChange}
                        value={value || ''}
                      />
                    )}

                    {(field.customFieldType === 2) && (
                      
                        <TextField
                          label={field.name}
                          variant="outlined"
                          margin="normal"
                          fullWidth
                          minRows={4}
                          multiline={true}
                          {...register(field.customFieldId, { required: field.isRequired })}
                          onChange={onChange}
                          value={value || ''}
                        />
                    )}

                    {
                      field.customFieldType === 3 && (
                        <TextField
                          variant="outlined"
                          label={field.name}
                          type="number"
                          margin="normal"
                          fullWidth
                          {...register(field.customFieldId, { required: field.isRequired })}
                          onChange={onChange}
                          value={value || 0}
                        />
                      )
                    }
                    {
                      field.customFieldType === 4 && (
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                              label={field.name}
                              value={dayjs(value)}
                              {...register(field.customFieldId, { required: field.isRequired })}
                              onChange={onChange}
                            />
                          </LocalizationProvider>

                      )
                    }
                    {field.customFieldType === 5 && (
                      <FormControlLabel sx={{
                        height: "100%",
                        display: "flex",
                        alignItems: "center"
                      }}
                        control={
                            <Switch
                              checked={value || false}
                              {...register(field.customFieldId, { required: field.isRequired })}
                              onChange={onChange}
                            />
                        }
                        label={field.name}
                      />
                    )}

                    {field.customFieldType === 6 && (
                      <Box>
                        <Box>{field.name}</Box>
                          <DropZone {...register(field.customFieldId, { required: field.isRequired })} 
                            image={value} 
                            text={"Drag 'n' drop your logo here, or click to select your logo"} 
                            onDrop={async (blob) => {

                              value = blob;
                              onChange(blob);                                  

                          }} />
                      </Box>
                    )}

                    {field.customFieldType === 7 && (
                      <Box>
                          <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">{field.name}</InputLabel>
                            <Select
                              {...register(field.customFieldId, { required: field.isRequired })}
                              label={field.name}
                              value={value || ''}
                              onChange={onChange}>
                                {(field.properties != null && field.properties != "") && JSON.parse(field.properties).map((property) => {
                                  return <MenuItem value={property.key}>{property.value}</MenuItem>
                                })}
                              
                            </Select>
                          </FormControl>
                      </Box>
                    )}

                  </>
                )}
              />
              {errors[field.customFieldId] && (
                <Typography color="red">{field.name} is required.</Typography>
              )}
            </Grid>
          )

      })}
      </Grid>
  )
}


export const renderSystemField = (identifier, fieldObject, control, errors, register, customFields) => {

  return (
      <>
      {(identifier != -1 ? fieldObject != null : true) && customFields.map((field, index) => {

          let result = findTheValue(fieldObject, field);

          let isRequied = true;
          if (field == "PhoneNumber")
          {
            isRequied = false;
          }

          if (field == "IsDeactivated") // we are doing this to make the naming the same (IsActive)
          {
            field = "IsActive";
            result = !result;
          }

          return (
          <Box key={index}>
            {(field == "IsActive") &&
                <Box>
                  <Controller name={field} 
                      control={control}
                      rules={{
                          required: false,
                      }}
                      render={({renderField}) => 
                        <FormControlLabel control={<Switch defaultChecked={result} />} label={field} {...register(field, { required: false })} {...renderField} />
                      }
                  />
                  {errors[field] && <Typography color={"red"}>{field} is required.</Typography>}
                </Box>
            }

            {(field != "IsActive" && field != "IsDeactivated") &&
            <Box>
                <Controller name={field} 
                    control={control}
                    rules={{
                        required: isRequied,
                    }}
                    render={({renderField}) => 
                    <TextField
                        label={field}
                        variant="outlined"
                        defaultValue={result}
                        margin="normal"
                        fullWidth
                        {...register(field, { required: isRequied })}
                        {...renderField}
                    />
                    }
                />
                {errors[field] && <Typography color={"red"}>{field} is required.</Typography>}
            </Box>
            }
          </Box>
          )

      })}
      </>
  )
}