const Doctor = require('../models/DoctorModel')
const Patient = require('../models/PatientModel')
const jwt=require('jsonwebtoken')

//jwd token generator
const createtoken=(_id)=>{
  return jwt.sign({_id},process.env.secret_string,{expiresIn:'3d'})
}

// login doctor
const loginDoctor = async (req, res) => {
  const {email, password} = req.body

  try {
    const user = await Doctor.login(email, password)
    const token = createtoken({doctor:user._id})
    res.status(200).cookie('token',token,{httpOnly:true,}).json({token})
  } catch (error) {
    res.status(400).json({status:'err',error: error.message,user:false})
  }
}

//signup Doctor
const signupDoctor = async function(req, res) {
    
    const {firstName, familyName, email, password, speciality, phoneNumber, birthDate, gender, graduationYear, address, bloodType,allergies, chronicalIlnesses} = req.body
    
    try {
      const doctor = await Doctor.signup(firstName, familyName, email, password, speciality, phoneNumber, birthDate, gender, graduationYear, address, bloodType,allergies, chronicalIlnesses)
      token =createtoken({doctor:doctor._id})
      res.status(200).cookie('token',token,{httpOnly:true,}).json({token})
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }

  // login Patient
const loginPatient = async (req, res) => {
    const {email, password} = req.body
  
    try {
      const user = await Patient.login(email, password)
      const token = createtoken({patient:user._id})
      res.status(200).cookie('token',token,{httpOnly:true,}).json({token})
    } catch (error) {
      res.status(400).json({status:'err',error: error.message,user:false})
    }
  }
  
  //signup Patient
  const signupPatient = async function(req, res) {
      
    const {firstName, familyName, email, password,   birthDate, gender,  bloodType,allergies, chronicalIlnesses} = req.body
  
      try {
        const user = await Patient.signup(firstName, familyName, email, password,  birthDate, gender,  bloodType,allergies, chronicalIlnesses)
        token =createtoken({patient:user._id})
        res.status(200).cookie('token',token,{httpOnly:true,}).json({token})
      } catch (error) {
        res.status(400).json({error: error.message})
      }
    }
module.exports = { loginDoctor ,signupDoctor,loginPatient,signupPatient}