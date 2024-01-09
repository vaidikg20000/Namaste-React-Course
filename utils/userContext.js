import { createContext } from "react";

const UserContext = createContext({
    user:{
    name: 'Vaidik',
    email: 'vaidik@gmail.com'
    }
});

UserContext.displayName = "UserContext"

export default UserContext;