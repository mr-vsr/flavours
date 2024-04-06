import { useUpdateUser } from "@/api/userApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
    const { updatedUser, isLoading } = useUpdateUser();
    return (
        <UserProfileForm onSave={updatedUser} isLoading={isLoading} />
    );
};

export default UserProfilePage;
