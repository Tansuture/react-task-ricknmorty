import { useDispatch, useSelector } from "react-redux";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useCallback } from "react";
import { closeModal } from "../../store/actions";
import TextField from '@mui/material/TextField';
import { Button} from "@mui/material";
import Select from 'react-select'
import { RootState } from "../../store/store"
import React from 'react'

import { Controller, useForm } from "react-hook-form";



const Modalstyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export default function BasicModal() {

    const {register,handleSubmit,formState:{errors},control,reset}= useForm()
    
  const open = useSelector((state:RootState)=>state.shopReducer.modal)


    const handleClose = useCallback(()=>{
     closeModal()
    },[closeModal])

    const onSubmit =useCallback(()=>{
 
       handleClose()
        reset()
    },[handleClose,reset])

    const handleError = (errors:any)=>{
        console.error(errors)
    }
    const registerOptions = {
      name: { required: "Name is required",
      minLength:{
        value:3,
        message:'at least 3 symbols'
      }
    },
      email: { required: false,pattern:{ value: /^\S+@\S+$/i,message:'invalid'}},
      phone: {
        required: "Phone is required",
        minLength: {
          value: 11,
          message: "Phone  must have at least 11 characters"
        }
      },
      role: { required: "Role is required" }
    };

    const selectOptions = [
      { value: "almaty", label: "almaty" },
      { value: "astana", label: "astana" },
      { value: "aktobe", label: "aktobe" }
    ];
 

    return (
      <div>

    
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
            
          <Box sx={Modalstyle}>
           <form onSubmit={handleSubmit(onSubmit,handleError)}
           style={{display:'flex',flexDirection:"column"}}>
                <TextField {...register("name",registerOptions.name)}  required id="outlined-required"label="name"/>
                    <small className="text-danger">
                    {errors?.name && errors.name.message}
                     </small>
                <br></br>
                 <TextField  {...register("phone", registerOptions.phone)} required id="outlined-required"label="phone"/>
                    <small className="text-danger">
                    {errors?.phone && errors.phone.message}
                     </small>
                 <br></br>
                 <TextField {...register("email",registerOptions.email)}  id="outlined-required"label="email"/>
                 <small className="text-danger">
                    {errors?.email && errors.email.message}
                     </small>
                  <br></br>
                     <TextField {...register("comment", {required: false, maxLength: 10})} id="outlined-required"label="comment"/>
                 <small className="text-danger">
                    {errors?.comment && errors.comment.message}
                     </small>
           
           <br></br>
            <Controller
            name="role"
            control={control}
            rules={registerOptions.role}
            render={({ field }) => (
              <Select options={selectOptions} {...field}  />
            )}
            ></Controller>
                <small className="text-danger">
               {errors?.role && errors.role.message}
                </small>
           <Button type="submit">отправить форму</Button>
        
           </form>
          </Box>
        </Modal>
      </div>
    );
  }