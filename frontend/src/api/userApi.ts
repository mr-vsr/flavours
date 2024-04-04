import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

//create a custom datatype 
type createUserRequest = {
    auth0Id: string;
    email: string;
};

//This function whenever called makes a request to the api/v1/user route and fetch the data and return objects using fetch and 
export const useCreateUserRequest = () => {
    const { getAccessTokenSilently } = useAuth0();
    const createMyUserRequest = async (user: createUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/v1/user`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to create User");
        }
    };
    const {
        mutateAsync: createUser,
        isError,
        isLoading,
        isSuccess } = useMutation(createMyUserRequest);
    
    return {
        createUser,
        isError,
        isSuccess,
        isLoading
    }
};


