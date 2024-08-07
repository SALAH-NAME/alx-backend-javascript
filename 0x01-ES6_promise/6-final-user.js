// 6-final-user.js
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
    try {
        const [userResponse, photoResponse] = await Promise.all([
            signUpUser(firstName, lastName),
            uploadPhoto(fileName),
        ]);

        return [
            { status: 'fulfilled', value: userResponse },
            { status: 'fulfilled', value: photoResponse },
        ];
    } catch (error) {
        return [{ status: 'rejected', value: error.message }];
    }
}

export default handleProfileSignup;
