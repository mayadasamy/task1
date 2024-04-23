import React ,{useState} from 'react'
import './css/UserComplete.css'



// const UserCompleteData = (props) => {
//     console.log(props);
//     const {user} = props;
   



const UserCompleteData = () => {
  const [userA ] = useState({
    
  })


  return (



    
        <div className="container_UserComplete">

            <div className="col_right">
                <div action="" className="messageForm">
                  
                     

                        
                       <h3>Your Name : </h3>
                        <div>{userA.name}</div>
                        <br />
                  
             
                        
                        <h3>Email : </h3>
                        <div> {userA.email}</div>
                        <br />
           
                  
                      
                        <h3>subject : </h3>
                        <div>{userA.subject}</div>
                        <br />

                        <div>{userA.message}</div>

                        <h2>“Thank you! Your form has been send successfully”</h2>
                 


                 </div>
        
   
             </div>
        </div>
            


      
   
  )
}

export default UserCompleteData


