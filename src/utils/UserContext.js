import { createContext } from "react";

const UserContext = createContext({
    user: {
        name: "default",
        mail: "default@gmail.com"
    },
});

UserContext.displayName = "UserContext";

export default UserContext