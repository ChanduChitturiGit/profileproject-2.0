// import React, { useState } from 'react';
// import { addCustomer, signUp } from '../services/CustomerService';
// function AddCustomer() {


//     const [pFirstName, setpFirstName] = useState('');
//     const [pLastName, setpLastName] = useState('');
//     const [pAge, setpAge] = useState('');
//     const [pGender, setpGender] = useState('');
//     const [pMobileNumber, setpMobileNumber] = useState('');
//     const [pEmail, setpEmail] = useState('');
//     const [pUserId, setpUserId] = useState('');
//     const [pBuildingName, setpBuildingName] = useState('');
//     const [pStreetNo, setpStreetNo] = useState('');
//     const [pCity, setpCity] = useState('');
//     const [pState, setpState] = useState('');
//     const [pCountry, setpCountry] = useState('');
//     const [pPincode, setpPincode] = useState('');
//     const[pUserName,setpUserName]=useState('');
//     const[pPassword,setpPassword]=useState('');

//     const handleSubmit = () => {

//         const payload1={
//             userName:pUserName,
//             password:pPassword,

//         }




//         const payload = {

            
//             firstName: pFirstName,
//             lastName: pLastName,
//             age:pAge,
//             gender:pGender,
//             mobileNumber: pMobileNumber,
//             email: pEmail,
//             userId:pUserId,
//             buildingName:pBuildingName,
//             streetNo:pStreetNo,
//             city:pCity,
//             state:pState,
//             country:pCountry,
//             pincode:pPincode,
        
//         }

//         addCustomer(payload).then(resp => alert("Customer is saved with id: " + resp.data.customerId))
//         signUp(payload1)
//     }

//     return (
//         <div>
//             <div>
//                 <h1>Add Customer</h1>
//             </div>
//             <div>
//                 <label>FirstName</label>
//                 <input type="text" id="pFirstName" name="pFirstName" value={pFirstName} onChange={e => setpFirstName(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>LastName</label>
//                 <input type="text" id="pLastName" name="pLastName" value={pLastName} onChange={e => setpLastName(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>Age</label>
//                 <input type="text" id="pAge" name="pAge" value={pAge} onChange={e => setpAge(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>Gender</label>
//                 <input type="text" id="pGender" name="pGender" value={pGender} onChange={e => setpGender(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>Mobile Number</label>
//                 <input type="text" id="pMobileNumber" name="pMobileNumber" value={pMobileNumber} onChange={e => setpMobileNumber(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>Email</label>
//                 <input type="text" id="pEmail" name="pEmail" value={pEmail} onChange={e => setpEmail(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>UserId</label>
//                 <input type="text" id="pUserId" name="pUserId" value={pUserId} onChange={e => setpUserId(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>Building Name</label>
//                 <input type="text" id="pBuildingName" name="pBuildingName" value={pBuildingName} onChange={e => setpBuildingName(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>StreetNo</label>
//                 <input type="text" id="pStreetNo" name="pStreetNo" value={pStreetNo} onChange={e => setpStreetNo(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>City</label>
//                 <input type="text" id="pCity" name="pCity" value={pCity} onChange={e => setpCity(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>State</label>
//                 <input type="text" id="pLState" name="pState" value={pState} onChange={e => setpState(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>Country</label>
//                 <input type="text" id="pCountry" name="pCountry" value={pCountry} onChange={e => setpCountry(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>Pincode</label>
//                 <input type="text" id="pPincode" name="pPincode" value={pPincode} onChange={e => setpPincode(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>User Name</label>
//                 <input type="text" id="pUserName" name="pUserName" value={pUserName} onChange={e => setpUserName(e.target.value)}></input>
//             </div>

//             <div>
//                 <label>Password</label>
//                 <input type="password" id="Password" name="Password" value={pPassword} onChange={e => setpPassword(e.target.value)}></input>
//             </div>
            

//             <div>
//                 <button onClick={handleSubmit}>Submit</button>
//             </div>
//         </div>

//     )

// }

// export default AddCustomer;