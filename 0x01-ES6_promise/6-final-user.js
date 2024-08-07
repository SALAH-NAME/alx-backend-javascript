import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise
    .allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((res) => (
      res.map((elm) => ({
        status: elm.status,
        value: elm.status === 'fulfilled' ? elm.value : String(elm.reason),
      }))
    ));
}

export default handleProfileSignup;
