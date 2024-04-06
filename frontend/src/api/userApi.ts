import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";
import { useQuery } from "react-query";
import { User } from '../types';

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

type UpdateUserRequest = {
    name: string;
    addressLine1: string;
    city: string;
    country: string;
}

export const useUpdateUser = () => {
    const { getAccessTokenSilently } = useAuth0();
    const updateUserRequest = async (formData: UpdateUserRequest) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/api/v1/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Failed to update user")
        }
        return response.json();
    };

    const { mutateAsync: updatedUser, isLoading, isSuccess, error, reset } = useMutation(updateUserRequest);

    if (isSuccess) {
        toast.success("User profile updated!")
    }

    if (error) {
        toast.error(error.toString());
        reset();
    }

    return {
        updatedUser,
        isLoading,
    }

};

export const useGetCurrentUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getUserRequest = async () :Promise<User> => {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/api/v1/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch User");
        }

        return response.json();
    };
    
    const { data: currentUser, isLoading, error } = useQuery("fetchCurrentUser", getUserRequest);
    
    if (error) {
        toast.error(error.toString());
    }

    return {
        currentUser,
        isLoading
    }
};

