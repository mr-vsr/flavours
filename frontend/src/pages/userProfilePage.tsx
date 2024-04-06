import {
    useUpdateUser,
    useGetCurrentUser
} from "@/api/userApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
    const { currentUser, isLoading:isGetLoading } = useGetCurrentUser();
    const { updatedUser, isLoading: isUpdateLoading } = useUpdateUser();
    
    if (isGetLoading) {
        return <span>Loading...</span>
    }

    if (!currentUser) {
        return <span>Unable to load user profile</span>
    }
    return (
        <UserProfileForm
            onSave={updatedUser}
            isLoading={isUpdateLoading}
            currentUser={currentUser}
        />
    );
};

export default UserProfilePage;
